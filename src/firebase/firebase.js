import { initializeApp } from 'firebase/app'

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail, signOut
} from 'firebase/auth'

import { getFirestore, serverTimestamp, setDoc, getDoc, doc, Timestamp } from 'firebase/firestore'
// import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth()
export const db = getFirestore()
console.log(firebaseApp)
// const storage = getStorage(firebaseApp)
console.log(new Timestamp())
export const passTimestamp = serverTimestamp

export const register = async (data, email, password) => {
  let msg = ''

  try {
    const result = await createUserWithEmailAndPassword(auth, email, password)

    const newData = { ...data, uid: result.user.uid }

    await setDoc(doc(db, 'users', result.user.uid), newData, { merge: true })
  } catch (error) {
    switch (error.code) {
      case 'auth/email-already-in-use':
        msg = ('信箱已存在，請重試')
        break
      case 'auth/invalid-email':
        msg = '密碼格式不正確，請重試'
        break
      case 'auth/weak-password':
        msg = '密碼強度不足，請重試'
        break
      default:
    }
    return msg
  }
}

export const logIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    console.log(userCredential.uder.uid, 'login')
  } catch (error) {
    let errorMsg = ''
    switch (error.code) {
      case 'auth/user-not-found':
        errorMsg = ('信箱不存在，請重試')
        break
      case 'auth/invalid-email':
        errorMsg = '信箱格式不正確，請重試'
        break
      case 'auth/wrong-password':
        errorMsg = '密碼錯誤，請重試'
        break
      default:
    }
    return errorMsg
  }
}

export const subscribeToUserStatus = (callback) => {
  onAuthStateChanged(auth, callback)
}

export const sendResetPasswordEmail = async (email) => {
  let msg
  console.log('fire')

  try {
    await sendPasswordResetEmail(auth, email)
    msg = '重設密碼信件已寄至該信箱，請前往收件'
  } catch (error) {
    switch (error.code) {
      case 'auth/user-not-found':
        msg = '信箱不存在，請重試'
        break
      case 'auth/invalid-email':
        msg = '信箱格式不正確，請重試'
        break

      default:
    }
  }
  console.log(msg)
  return msg
}

export const getCurrentUserData = async () => {
  const docRef = doc(db, 'users', getAuth().currentUser.uid)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    console.log('No such document!')
  }
}

export const logOut = () => {
  signOut(auth)
  // window.location.reload()
}

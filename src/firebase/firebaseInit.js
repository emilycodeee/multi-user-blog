import { initializeApp } from 'firebase/app'

import {
  // getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider
} from 'firebase/auth'

import { getFirestore, serverTimestamp } from 'firebase/firestore'
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
// const auth = getAuth()
export const db = getFirestore()
// const storage = getStorage(firebaseApp)
console.log(firebaseApp)
export const passTimestamp = serverTimestamp
export const facebookProvider = new FacebookAuthProvider()
export const googleProvider = new GoogleAuthProvider()

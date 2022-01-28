<template>
<div class="form-wrap">
  <form class='register'>
    <p class="login-register">
     Already have a accont?
      <router-link class="router-link" :to="{name:'Login'}">Login</router-link>
    </p>
    <h2>Create your EmilyD Blog Account</h2>
    <div class="inputs">
      <div class="input">
        <input type='text' placeholder="First Name" v-model="firstName"/>
        <img :src="userIcon" class="icon"/>
      </div>
      <div class="input">
        <input type='text' placeholder="Last Name" v-model="lastName"/>
        <img :src="userIcon" class="icon"/>
      </div>
      <div class="input">
        <input type='text' placeholder="Username" v-model="userName"/>
        <img :src="userIcon" class="icon"/>
      </div>
      <div class="input">
        <input type='email' placeholder="Email" v-model="email"/>
        <img :src="emailIcon" class="icon"/>
      </div>
     <div class="input">
        <input type='password' placeholder="Password" v-model="password"/>
        <img :src="passwordIcon" class="icon"/>
      </div>
      <div v-show="errorMsg" class="error">{{errorMsg}}</div>
    </div>
    <button @click.prevent="handleRegister">Sign Up</button>
    <div class="angle">
    </div>
  </form>
  <div class="background"></div>
</div>
</template>

<script>

import emailIcon from '@/assets/Icons/envelope-regular.svg'
import userIcon from '@/assets/Icons/user-alt-light.svg'
import passwordIcon from '@/assets/Icons/lock-alt-solid.svg'
import { register } from '../firebase/firebase'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Register',
  setup () {
    const email = ref('')
    const password = ref('')
    const firstName = ref('')
    const lastName = ref('')
    const userName = ref('')
    const error = ref(null)
    const errorMsg = ref('')

    const router = useRouter()
    console.log(router)
    const handleRegister = () => {
      const alertMsg = firstName.value === '' ? '請輸入 First Name' : lastName.value === '' ? '請輸入 Last Name' : userName.value === '' ? '請輸入 User Name' : email.value === '' ? '請輸入 Email' : password.value === '' ? '請輸入密碼' : null

      if (alertMsg) {
        error.value = true
        errorMsg.value = alertMsg
      } else {
        const data = {
          firstName: firstName.value,
          lastName: lastName.value,
          userName: userName.value,
          email: email.value
        }
        register(data, email.value, password.value).then(msg => {
          if (msg) {
            errorMsg.value = msg
          } else {
            router.push({ name: 'Home' })
          }
        }).catch(err => console.log(err))
      }
    }

    return { email, password, emailIcon, passwordIcon, userIcon, firstName, lastName, userName, error, errorMsg, handleRegister }
  }
}
</script>

<style lang='scss' scoped>

.register{
  h2{
    min-width: 350px;
  }
}

</style>

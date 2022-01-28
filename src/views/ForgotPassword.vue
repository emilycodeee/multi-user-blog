<template>
  <div class="reset-password">
    <Modal v-if="showModal" :modalMessage="modalMessage" @close="closeModal" />
    <Loading v-if="isLoading "/>

    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Back to
          <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
        </p>
        <h2>Reset Password</h2>
        <p>Forgot your passowrd? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <img :src="emailIcon" class="icon" />
          </div>
        </div>
        <button @click.prevent='sendResetEmail' >Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Modal from '../components/Modal.vue'
import Loading from '../components/Loading.vue'
import { sendResetPasswordEmail } from '../firebase/firebase'
import emailIcon from '@/assets/Icons/envelope-regular.svg'
export default {
  name: 'ForgotPassword',
  components: { Modal, Loading },
  setup () {
    const email = ref('')
    const showModal = ref(false)
    const modalMessage = ref('')
    const isLoading = ref(false)

    const closeModal = () => {
      showModal.value = !showModal.value
      email.value = ''
    }

    const sendResetEmail = () => {
      // isLoading.value = true
      if (email.value === '') {
        modalMessage.value = '請確實填寫信箱'
        showModal.value = true
        console.log(sendResetPasswordEmail)
        return
        // isLoading.value = false
      }
      isLoading.value = true
      sendResetPasswordEmail(email.value).then(msg => {
        console.log('then', msg)
        isLoading.value = false
        showModal.value = true
        modalMessage.value = (msg)
      }).catch(err => { console.log(err) })
    }

    return { email, showModal, emailIcon, modalMessage, closeModal, Modal, Loading, isLoading, sendResetEmail }
  }
}
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>

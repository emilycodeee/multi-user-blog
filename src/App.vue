
<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation v-if="showNav"/>
      <router-view />
      <Footer v-if="showNav"/>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import { subscribeToUserStatus } from './firebase/firebase'
import { useStore } from 'vuex'
// import { getAuth } from 'firebase/auth'

export default {
  name: 'App',
  components: { Navigation, Footer },
  setup () {
    const showNav = ref(null)
    const route = useRoute()
    const store = useStore()

    subscribeToUserStatus((currentUser) => {
      console.log(currentUser)
      console.log('有在該乖監聽')
      store.commit('updateCurrentUser', currentUser)
      if (currentUser) {
        store.dispatch('getCurrentUser')
      }
    })

    watchEffect(() => {
      if (route.name === 'Login' || route.name === 'Register' || route.name === 'ForgotPassword') {
        showNav.value = false
      } else {
        showNav.value = true
      }
    })

    console.log(route.name)
    return { showNav }
  }

}
</script>
<style lang="scss" >
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

.arrow{
  margin-left: 8px;
  width: 12px;
  path{
    fill:#000
  }
}

.arrow-light {
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(251deg) brightness(106%) contrast(101%);
}

button,
.router-button {
  transition: 500ms ease all;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(48, 48, 48, 0.7);
  }
}

.button-ghost {
  color: #000;
  padding: 0;
  border-radius: 0;
  margin-top: 50px;
  font-size: 15px;
  font-weight: 500;
  background-color: transparent;
  @media (min-width: 700px) {
    margin-top: 0;
    margin-left: auto;
  }
  i {
    margin-left: 8px;
  }
}
.button-light {
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
}
.button-inactive {
  pointer-events: none !important;
  cursor: none !important;
  background-color: rgba(128, 128, 128, 0.5) !important;
}

.error{
  text-align: center;
  color:red;
  font-size: 12px;
}

.blog-card-wrap{
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;

  @media (min-width:500px) {
    padding: 100px 16px;
  }

  .blog-cards{
    display: grid;
    gap:32px;
    grid-template-columns: 1fr;

    @media (min-width: 500px) {
       grid-template-columns: repeat(2,1fr);
    }

    @media (min-width: 900px) {
       grid-template-columns: repeat(3,1fr);
    }

    @media (min-width: 1200px) {
       grid-template-columns: repeat(4,1fr);
    }
  }

}

</style>

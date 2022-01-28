<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }"
          >EmilyD Blogs
        </router-link>
      </div>
      <div class="nav-links" v-show="!mobileScreen">
        <ul>
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
          <router-link class="link" to="#">Create post</router-link>
          <router-link v-if="!store.state.user" class="link" :to="{ name: 'Login' }">Login/Register</router-link>
        </ul>
        <div v-if="store.state.user" class="profile" ref="profile" @click="toggleProfile">
          <span>{{ store.state.profileInitials }}</span>
          <div v-show="showProfile" class="profile-menu">
            <div class="info">
              <p class="initials">{{ store.state.profileInitials }}</p>
              <div class="right">
                <p>
                  {{ store.state.profileFirstName }}
                  {{ store.state.profileLastName }}
                </p>
                <p>{{ store.state.profileUserName }}</p>
                <p>{{ store.state.profileEmail }}</p>
              </div>
            </div>
            <div class="options">
              <router-link class="option" to="#">
                <img class="icon" :src="userIcon" alt="userIcon" />
                <p>Profile</p>
              </router-link>
              <router-link class="option" to="#">
                <img class="icon" :src="adminIcon" alt="adminIcon" />
                <p>Profile</p>
              </router-link>
              <div @click="handleLogout" class="option" to="#">
                <img class="icon" :src="signOutIcon" alt="signOutIcon" />
                <p>Sign Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <img
      :src="menuIcon"
      class="menu-icon"
      v-show="mobileScreen"
      @click="toggleMenu"
    />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
        <router-link class="link" to="#">Create post</router-link>
        <router-link v-if="!store.state.user" class="link" :to="{ name: 'Login' }"
          >Login/Register</router-link
        >
      </ul>
    </transition>
  </header>
</template>

<script >
import { ref } from 'vue'
import { useStore } from 'vuex'
import { logOut } from '../firebase/firebase'
import menuIcon from '@/assets/Icons/bars-regular.svg'
import adminIcon from '@/assets/Icons/user-crown-light.svg'
import userIcon from '@/assets/Icons/user-alt-light.svg'
import signOutIcon from '@/assets/Icons/sign-out-alt-regular.svg'

export default {
  name: 'Navigation',
  setup () {
    const mobileScreen = ref(null)
    const mobileNav = ref(false)
    const windowWidth = ref(null)
    const profile = ref(null)
    const showProfile = ref(false)
    const store = useStore()
    const checkScreen = () => {
      windowWidth.value = window.innerWidth
      if (windowWidth.value < 750) {
        mobileScreen.value = true
      } else {
        mobileScreen.value = false
        mobileNav.value = false
      }
    }

    const toggleMenu = () => {
      mobileNav.value = !mobileNav.value
    }

    const toggleProfile = (e) => {
      console.log('ssss', e.target)
      console.log('ssss', profile.value)
      if (e.target === profile.value) {
        showProfile.value = !showProfile.value
      }
      console.log('toggle')
    }

    const handleLogout = () => {
      logOut()
    }

    window.addEventListener('resize', checkScreen)
    checkScreen()

    return {
      menuIcon,
      mobileScreen,
      mobileNav,
      toggleMenu,
      store,
      signOutIcon,
      userIcon,
      adminIcon,
      toggleProfile,
      showProfile,
      profile,
      handleLogout
    }
  }
}
</script>
<style lang='scss' scoped>
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;
  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;
    &:hover {
      color: #1eb8b8;
    }
  }
  nav {
    display: flex;
    padding: 25px 0;
    .branding {
      display: flex;
      align-items: center;
      .header {
        font-weight: 600;
        font-size: 24px;
        color: #000;
        text-decoration: none;
      }
    }
    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;
      ul {
        margin-right: 32px;
        .link {
          margin-right: 32px;
        }
        .link:last-child {
          margin-right: 0;
        }
      }
      .profile {
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #fff;
        background-color: #303030;
        span {
          pointer-events: none;
        }
        .profile-menu {
          position: absolute;
          top: 60px;
          right: 0;
          width: 250px;
          background-color: #303030;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
          .info {
            display: flex;
            align-items: center;
            padding: 15px;
            border-bottom: 1px solid #fff;
            .initials {
              position: initial;
              width: 40px;
              height: 40px;
              background-color: #fff;
              color: #303030;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
            }
            .right {
              flex: 1;
              margin-left: 24px;
              p:nth-child(1) {
                font-size: 14px;
              }
              p:nth-child(2),
              p:nth-child(3) {
                font-size: 12px;
              }
            }
          }
          .options {
            padding: 15px;
            .option {
              text-decoration: none;
              color: #fff;
              display: flex;
              align-items: center;
              margin-bottom: 12px;
              .icon {
                width: 18px;
                height: auto;
              }
              p {
                font-size: 14px;
                margin-left: 12px;
              }
              &:last-child {
                margin-bottom: 0px;
              }
            }
          }
        }
      }
    }
    .mobile-user-menu {
      margin-right: 40px;
    }
  }
  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }

  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }
  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;
    .link {
      padding: 15px 0;
      color: #fff;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    /* transition: opacity .5s; */
    transition: all 1s ease;
  }

  .mobile-nav-enter {
    transform: translateX(-250px);
  }
  .mobile-nav-enter-to {
    transform: translateX(0px);
  }
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}
</style>

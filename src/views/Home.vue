<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

  </div>
</template>

<script>

export default {
  name: 'Home',
  setup () {
    console.log('process.env.VUE_APP_apiKey')
    console.log(process.env.VUE_APP_API_KEY)
  },
  components: {

  }
}
</script>

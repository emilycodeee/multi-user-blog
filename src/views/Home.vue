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
    console.log(process.env.VUE_APP_SOMEKEY)
  },
  components: {

  }
}
</script>

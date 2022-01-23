<template>
  <div class="home">
<BlogPost :post='welcomeScreen'/>
<BlogPost v-for='(post,i) in sampleBlogPost' :key='i' :post='post'/>
  </div>
</template>

<script>
import { ref } from 'vue'
import BlogPost from '../components/BlogPost.vue'
export default {
  name: 'Home',
  setup () {
    const welcomeScreen = ref({ title: 'Welcome', blogPost: 'loremloremloremlorem loremlorem', welcomeScreen: true, photo: 'coding' })
    const sampleBlogPost = ref([{ title: 'blog1', blogHTML: 'loremloremloremlorem loremlorem', blogCoverPhotos: 'beautiful-stories' }, { title: 'blog2', blogHTML: 'loremloremloremlorem loremlorem', blogCoverPhotos: 'designed-for-everyone' }])
    return { welcomeScreen, sampleBlogPost }
  },
  components: {
    BlogPost
  }
}
</script>

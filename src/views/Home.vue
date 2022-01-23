<template>
  <div class="home">
<BlogPost :post='welcomeScreen'/>
<BlogPost v-for='(post,i) in sampleBlogPost' :key='i' :post='post'/>
<div class="blog-card-wrap">
  <div class="container">
<h3>View More Recent Blogs</h3>
<div class="blog-cards">
  <BlogCard v-for="(card,i) in sampleBlogCards" :key="i" :card='card'/>
</div>
  </div>
</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import BlogPost from '../components/BlogPost.vue'
import BlogCard from '../components/BlogCard.vue'
export default {
  name: 'Home',
  setup () {
    const welcomeScreen = ref({ title: 'Welcome', blogPost: 'loremloremloremlorem loremlorem', welcomeScreen: true, photo: 'coding' })
    const sampleBlogPost = ref([{ title: 'blog1', blogHTML: 'loremloremloremlorem loremlorem', blogCoverPhotos: 'beautiful-stories' }, { title: 'blog2', blogHTML: 'loremloremloremlorem loremlorem', blogCoverPhotos: 'designed-for-everyone' }])

    const sampleBlogCards = ref([{ blogTitle: 'title 1 ', blogCoverPhoto: 'stock-1', blogDate: 'May 1 ,2022' }, { blogTitle: 'title 2 ', blogCoverPhoto: 'stock-2', blogDate: 'May 1 ,2022' }, { blogTitle: 'title 3 ', blogCoverPhoto: 'stock-3', blogDate: 'May 1 ,2022' }, { blogTitle: 'title 4', blogCoverPhoto: 'stock-4', blogDate: 'May 1 ,2022' }])

    return { welcomeScreen, sampleBlogPost, sampleBlogCards }
  },
  components: {
    BlogPost, BlogCard
  }
}
</script>

<style lang="scss" scoped>
.blog-card-wrap{
  h3{
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
</style>

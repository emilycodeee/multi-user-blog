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
<div class="updates">
  <div class="container">
    <h2>never miss a post. Register or your free account today!</h2>
    <router-link class="router-button" to="#">
      Register for EmilyD Blogs
<img :src="arrow" class="arrow arrow-light" alt="">
    </router-link>
  </div>
</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import BlogPost from '../components/BlogPost.vue'
import BlogCard from '../components/BlogCard.vue'
import arrow from '@/assets/Icons/arrow-right-light.svg'
export default {
  name: 'Home',
  setup () {
    const welcomeScreen = ref({ title: 'Welcome', blogPost: 'loremloremloremlorem loremlorem', welcomeScreen: true, photo: 'coding' })
    const sampleBlogPost = ref([{ title: 'blog1', blogHTML: 'loremloremloremlorem loremlorem', blogCoverPhotos: 'beautiful-stories' }, { title: 'blog2', blogHTML: 'loremloremloremlorem loremlorem', blogCoverPhotos: 'designed-for-everyone' }])

    const sampleBlogCards = ref([{ blogTitle: 'title 1 ', blogCoverPhoto: 'stock-1', blogDate: 'May 1 ,2022' }, { blogTitle: 'title 2 ', blogCoverPhoto: 'stock-2', blogDate: 'May 1 ,2022' }, { blogTitle: 'title 3 ', blogCoverPhoto: 'stock-3', blogDate: 'May 1 ,2022' }, { blogTitle: 'title 4', blogCoverPhoto: 'stock-4', blogDate: 'May 1 ,2022' }])

    return { welcomeScreen, sampleBlogPost, sampleBlogCards, arrow }
  },
  components: {
    BlogPost, BlogCard
  }
}
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>

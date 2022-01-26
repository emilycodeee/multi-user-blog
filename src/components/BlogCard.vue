<template>
<div class="blog-card">
  <div v-show="editMode" class="icons">
    <div class="icon">
      <img class="edit" :src="editIcon" alt="edit">
    </div>
      <div class="icon">
      <img class="delete"  :src="deleteIcon" alt="delete">
    </div>
  </div>
  <img class="card-cover" :src="require(`../assets/blogCards/${card.blogCoverPhoto}.jpg`)" alt="s">
  <div class="info">
    <h4>{{card.blogTitle}}</h4>
    <h6>{{card.blogDate}}</h6>
    <router-link class="link" to="#">
              View The Post
      <img :src="arrow" class="arrow " alt="">
    </router-link>
  </div>
</div>
</template>

<script>
import { computed, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'
import arrow from '@/assets/Icons/arrow-right-light.svg'
import editIcon from '@/assets/Icons/edit-regular.svg'
import deleteIcon from '@/assets/Icons/trash-regular.svg'

export default {
  name: 'BlogCard',
  props: ['card'],
  setup () {
    const store = useStore()
    const editMode = computed(() => store.state.editMode)

    onBeforeUnmount(() => store.commit('toggleEditPost', false))

    return {
      arrow, editIcon, deleteIcon, editMode
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-card{
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  min-height: 420px;
  transition: .5 ease all ;

  &:hover{
    transform: rotateZ(-1deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .icons{
    display: flex;
    position: absolute;
    top:10px;
    right: 10px;
    z-index: 99;

    .icon{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #fff;
      transition: 0.5s ease all;

      &:hover{
        background-color: #303030;
        .edit, .delete{
          filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(251deg) brightness(106%) contrast(101%);
        }
      }

      &:nth-child(1){
        margin-right: 8px;
      }
      .edit, .delete{
        pointer-events: none;
        height: 15px;
        width: auto;
      }
    }
  }

  .card-cover{
    display: block;
    border-radius:8px 8px 0 0 ;
    z-index: 1;
    width: 100%;
    min-height: 200px;
    object-fit: cover;
  }

  .info{
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index:3;
    padding:32px 16px;
    color: #000;
    h4{
      padding-bottom: 8px;
      font-size: 20px;
      font-weight: 300;
    }

    h6{
      font-weight: 400;
      font-size: 12px;
      padding-bottom: 16px;
    }

    .link{
      display: inline-flex;
      align-items: center;
      margin-top: auto;
      font-weight: 500;
      padding-top: 20px;
      padding-bottom: 4px;
      transition: 0.5s ease-in all;

      &:hover{
        color: rgba(48,48,48,0.8);
      }

      .arrow{
        width:10px ;
      }

    }
  }

}
</style>

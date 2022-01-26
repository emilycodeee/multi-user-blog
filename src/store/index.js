import { createStore } from 'vuex'

export default createStore({
  state: {
    sampleBlogCards: [
      {
        blogTitle: 'title 1 ',
        blogCoverPhoto: 'stock-1',
        blogDate: 'May 1 ,2022'
      },
      {
        blogTitle: 'title 2 ',
        blogCoverPhoto: 'stock-2',
        blogDate: 'May 1 ,2022'
      },
      {
        blogTitle: 'title 3 ',
        blogCoverPhoto: 'stock-3',
        blogDate: 'May 1 ,2022'
      },
      {
        blogTitle: 'title 4',
        blogCoverPhoto: 'stock-4',
        blogDate: 'May 1 ,2022'
      }
    ],
    editMode: null
  },
  mutations: {

    toggleEditPost (state, payload) {
      state.editMode = payload
      console.log(state.editMode)
    }
  },
  actions: {},
  modules: {}

})

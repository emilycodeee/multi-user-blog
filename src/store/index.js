import { createStore } from 'vuex'
import { getCurrentUserData } from '../firebase/firebase'
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
    editMode: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null
  },
  mutations: {
    toggleEditPost (state, payload) {
      state.editMode = payload
      console.log(state.editMode)
    },
    updateCurrentUser (state, payload) {
      state.user = payload
      console.log(payload)
    },
    setProfileInfo (state, payload) {
      state.profileEmail = payload.email
      state.profileFirstName = payload.firstName
      state.profileLastName = payload.lastName
      state.profileUserName = payload.userName
      state.profileId = payload.uid
      console.log(payload)
    },
    setProfileInitials (state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join('') +
        state.profileLastName.match(/(\b\S)?/g).join('')
    }
  },
  actions: {
    async getCurrentUser ({ commit }) {
      const userData = await getCurrentUserData()
      console.log(userData)
      commit('setProfileInfo', userData)
      commit('setProfileInitials')
    }
  },
  modules: {}
})

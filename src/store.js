import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imgSrc: require('@/assets/photo.jpg'),
    name: 'John Smith',
    address: 'Portland, Oregon, USA',
    lang: 'English',
    experience: [
      {
        skill: 'php',
        years: '6 years'
      },
      {
        skill: 'ruby',
        years: '7 years'
      },
      {
        skill: 'javascript',
        years: '4 years'
      },
      {
        skill: 'actionScript',
        years: '3 years'
      }
    ],
  },
  mutations: {
    deleteSkill(state, skill) {
      for (let i in state.experience) {
        if (state.experience[i].skill === skill) {
          state.experience.splice(i, 1)
        }
      }
    },
    changeName(state, newName) {
      state.name = newName
    },
    changeAddress(state, newAddress) {
      state.address = newAddress
    },
    changeLang(state, newLang) {
      state.lang = newLang
    },
    changeSkills(state, newExperience) {
      state.experience.push({
        skill: newExperience.skill,
        years: newExperience.years
      })
    },
  },
  actions: {}
})

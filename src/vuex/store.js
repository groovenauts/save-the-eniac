import _ from 'lodash'
import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import mutations from './mutations'
import types from './mutation-types'
import { STEPS } from '../const'

Vue.use(Vuex)

const state = {
  page: 0,
  currentPage: STEPS[0],
  steps: STEPS,
  name: "",
  age: "",
  power: 0,
  answer: "",
  correct: false,
  showStamp: false,
}
const getters = {
  page: state => state.page,
  steps: state => state.steps,
  currentPage: state => state.currentPage,
  name: state => state.name,
  age: state => state.age,
  power: state => state.power,
  answer: state => state.answer,
  correct: state => state.correct,
  showStamp: state => state.showStamp,
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

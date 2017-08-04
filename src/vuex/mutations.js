import _ from 'lodash'
import types from './mutation-types'

export default {
  [types.NEXT_PAGE] (state) {
    const pageIndex = state.page + 1
    state.page = pageIndex
    state.currentPage = state.steps[pageIndex]
    if (_.has(state.currentPage, 'answer')) {
      state.answer = state.currentPage.answer
    } else {
      state.answer = ""
    }
    state.correct = false
  },
  [types.CHANGE_ANSWER] (state, value) {
    state.answer = value
  },
  [types.CHECK_ANSWER] (state, result) {
    state.showStamp = true
    state.correct = result
    if (result) {
      if (_.has(state.currentPage, 'power')) {
        state.power = state.currentPage.power
      }
      if (_.has(state.currentPage, 'updateKey')) {
        state[state.currentPage.updateKey] = state.answer
        state.steps = _.map(state.steps, step => {
          return _.mapValues(step, (v, k) => {
            const key = `{{${state.currentPage.updateKey}}}`
            if (_.isString(v) && new RegExp(key).test(v)) {
              return _.replace(v, key, state.answer)
            }
            return v
          })
        })
      }
    }
  },
  [types.HIDE_STAMP] (state) {
    state.showStamp = false
  }
}

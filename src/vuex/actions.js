import types from './mutation-types'

export default {
  [types.NEXT_PAGE] ({ commit }) {
    commit(types.NEXT_PAGE)
  },
  [types.CHANGE_ANSWER] ({commit}, e) {
    commit(types.CHANGE_ANSWER, e.target.value)
  },
  [types.CHECK_ANSWER] ({commit, state}) {
    setTimeout(() => {
      commit(types.HIDE_STAMP)
    }, 1200)
    const valid = state.currentPage.validator(state.answer, state)
    commit(types.CHECK_ANSWER, valid)
  }
}

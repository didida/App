import * as types from '../mutation-types'

const state = {
  pic: 111
}

const mutations = {
  [types.FETCH_PICTURE] (state, picture) {
    state.pic = picture
  }
}

export default {
  state,
  mutations
}

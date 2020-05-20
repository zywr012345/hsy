// initial state
const state = {
  isOnline: false,
  token: null,
  info: null,
  point: {},
  inviterId: 0,
  isTokenInvalid: false,
  storeJoinin: {}
}

// mutations
const mutations = {
  sellerJoininSave (state, payload) {
    state.storeJoinin = Object.assign(
      state.storeJoinin,
      payload.storeJoinin)
  },
  memberInviterId (state, payload) {
    state.inviterId = payload.inviterId
  },
  memberPoint (state, payload) {
    state.point = Object.assign(
      state.point,
      payload.point)
  },
  memberLogin (state, payload) {
    state.info = payload.info
    state.info.invalid_time = parseInt((new Date().getTime()) / 1000) + 3600// 一小时更新
    state.isOnline = true
    state.token = payload.token
    state.isTokenInvalid = false
  },
  memberLogout (state) {
    state.info = null
    state.isOnline = false
    state.token = null
  },
  memberUpdate (state, payload) {
    if (state.info) {
      state.info = payload.info
      state.info.invalid_time = parseInt((new Date().getTime()) / 1000) + 3600// 一小时更新
    }
  },
  memberEdit (state, payload) {
    if (state.info) {
      let i
      for (i in payload) {
        state.info[i] = payload[i]
      }
    }
  }
}

export default {
  state,
  mutations
}

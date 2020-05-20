// initial state
const state = {
  maskState: false, // 套餐弹出框
  info: false,//商品详情弹出框
  maskId: "", // 商品id
}
// mutations
const mutations = {
  // 修改弹窗框状态
  saveMaskSate (state, maskS) {
    state.maskState = maskS
  },
  saveInfoState (state, info) {
    state.info = info;
  },
  // 更改商品idid
  saveMaskId (state, id) {
    state.maskId = id
  }
}


export default {
  state,
  mutations
}

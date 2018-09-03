import * as types from './types'
let mutations={
  [types.VIEW_FOOT]:(state,payload)=>{
    state.bFoot = payload;
  },
  [types.VIEW_LOADING]:(state,payload)=>{
    state.bLoading = payload;
  },
  [types.UPDATE_HOME]:(state,payload)=>{
    state.home = payload;
  },
  [types.UPDATE_USER]:(state,payload)=>{
    state.user = payload;
  },
};
export default mutations;
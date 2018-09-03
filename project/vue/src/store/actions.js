// import axios from 'axios';
import * as types from './types'

let actions={
  [types.VIEW_FOOT]:({commit,state},payload)=>{
    commit(types.VIEW_FOOT,payload)
  },
  [types.VIEW_LOADING]:({commit,state},payload)=>{
    commit(types.VIEW_LOADING,payload)
  },
  /* [types.UPDATE_HOME]:({commit,state},payload)=>{
    axios({
      url:'/static/data/index.json'
    }).then(
      res=>commit(types.UPDATE_HOME,res.data)
    )
  }, */
  [types.UPDATE_USER]:({commit,state},payload)=>{
    commit(types.UPDATE_USER,payload)
  }
};
export default actions;
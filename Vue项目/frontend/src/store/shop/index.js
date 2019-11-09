import {
    SHOP_ADD,
    SHOP_MODIFY,
    SHOP_DEL,
    SHOP_QUERY
  } from 'store/action_type'

  import request from 'utils/request'

  export default {
      state:{
        data:null
      },
      actions:{
        async query({commit}){
            const result = await request({
                url:'/shop',
                method:'GET'
            })
            commit({
                type:SHOP_QUERY,
                payload:result.data.result
            })
        }, 
        async del ({ commit },_id ) { 
            const result = await request({
              url: '/shop',
              method: "DELETE",
              params: {
                _id   
              }
            })
            commit({
              type: SHOP_DEL,
              payload: result.data.result
            })
          },
      },
      mutations:{
          SHOP_QUERY(state,action){
            state.data=action.payload
          },
          SHOP_DEL(state,action){
            state.data=action.payload
          }
      }
  }
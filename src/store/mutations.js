/**
 * Created by sign on 2018/4/24.
 */
import  * as types from './types'
import getters from './getters'

const mutations={
    [types.INCREMENT](state){
  console.log(state)
    state.count++;
  }//数据操作
}

export default mutations

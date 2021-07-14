// reducer 是干什么的？
// reducer 是处理动作相关
// combineReducers 工具函数，用于组织多个reducer，并返回reducer集合
import { combineReducers } from 'redux'
import defaultState from './state'
import { ADD, JIAN } from './action'

// 一个reducer就是一个函数
// state 是初始化的state ， action 是dispash的参数
function optionsNum( state = defaultState.count, action ){
    switch (action.type) {
        case ADD:
            // state
            state.num = state.num + action.data
            return { ...state }
            break;
        case JIAN:
            state.num = state.num - action.data
            return { ...state }
            break;
        default:
            return state
            break;
    }
}
export default combineReducers({
    optionsNum
})
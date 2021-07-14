// 异步处理
export const ADD = 'ADD'
export const JIAN = 'JIAN'

// 注意，如果不使用中间件redux-thunk 的话 那么不能实现异步处理，因为action只能返回一个action，使用了中间以后可以返回一个函数接受上下文的参数，从而处理异步
// 加
export function setAddNum(data){
    return (dispash,getState) => {
        setTimeout(() => {
            // 异步请求两秒钟以后处理一些事情
            // 派发动作
            let num = 30
            if( typeof data === 'number' ){
                num = data
            }
            dispash({type: ADD, data: data})
        }, 2000);
    }
}
// 减去
export function seReduceNum(data){
    return (dispash,getState) => {
        setTimeout(() => {
            // 异步请求两秒钟以后处理一些事情
            // 派发动作
            let num = 10
            if( typeof data === 'number' ){
                num = data
            }
            dispash({type: JIAN, data: data})
        }, 1000);
    }
}
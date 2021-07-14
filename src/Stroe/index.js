import {  createStore, applyMiddleware } from 'redux'
import reducers from './reducer'
import thunk from 'redux-thunk'
// 通过reducer创建stroe
const store = createStore(reducers, applyMiddleware(thunk))
export default store
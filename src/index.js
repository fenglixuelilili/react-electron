import React from 'react'
import ReactDOM from 'react-dom'
import RouterCom from './router'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './Stroe'

ReactDOM.render(
  <Provider store = { store }>
    <RouterCom />
  </Provider>,
  document.getElementById('root')
);
// render(<Router/>, document.getElementById('app'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

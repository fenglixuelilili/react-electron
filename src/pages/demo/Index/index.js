// import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch, useStore } from 'react-redux'
import { setAddNum } from '../../../Stroe/action'
import React, { useState } from 'react'
export default function Index(props){
    function tz(){
        props.history.push({
            pathname: '/about',
            query: {
                id: 1000
            } 
        })
    }
    function Add(){
        dispash(setAddNum(num))
    }
    const count = useSelector(state => {
        return state.optionsNum.num
    })
    const dispash = useDispatch()
    const [ num, setNum ] = useState(10)
    return <div>
        <button onClick={ tz }>我是inde组建</button>
        <button onClick={ Add }>点我异步的+(有延迟的哦)</button>
        <div className='white'>
            全局数据是：{ count },
            每次加 { num } 
        </div>
    </div>
}
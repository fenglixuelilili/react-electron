import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'
export default function Index(props){
    const [ params,setParams ] = useState(null)
    let p = useParams()
    useEffect(()=>{
        console.log(props)
    },[])
    function back(){
        props.history.go(-1)
    }
    return <div>
        我是about组建 传过来的参数是：{  }
        <button onClick={ back }>返回</button>
    </div>
}
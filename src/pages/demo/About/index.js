import React, { useEffect,useState, PureComponent} from 'react';
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
// actions 
import { seReduceNum } from '../../../Stroe/action'
function About(props){
    const { num, jiannum } = props
    console.log(num)
    const [ params,setParams ] = useState(null)
    let p = useParams()
    useEffect(()=>{
        console.log(props)
    },[])
    function back(){
        props.history.go(-1)
    }
    function jianhandle(){
        jiannum(5)
    }
    return <div>
        我是about组建 传过来的参数是：{  }
        <button onClick={ back }>返回</button>
        你好，我是全局数据 { num }
        <button onClick={ jianhandle }>点我异步的减去5</button>
    </div>
}
class About2 extends PureComponent {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentDidMount(){
        
    }
    back(){
        console.log(this.props)
        this.props.history.go(-1)
    }
    jianfn(){
        const { jiannum } = this.props
        jiannum(1)
    }
    render(){
        const { num } = this.props
        return <div>
            我是about组建 传过来的参数是：{  }
            <button onClick={ this.back.bind(this) }>返回</button>
            你好，我是全局数据 { num }
            <button onClick={ this.jianfn.bind(this) }>点我异步的减去1</button>
        </div>
    }
}
// 映射关系
const mapStateToProps = (state) => {
    console.log(state)
    return {
        num: state.optionsNum.num
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        jiannum: (num) => {
            // 减去
            console.log('减去')
            dispatch(seReduceNum(num))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(About2)
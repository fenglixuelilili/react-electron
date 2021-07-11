import { useHistory } from 'react-router-dom';
export default function Index(props){
    function tz(){
        // alert(789)
        props.history.push({
            pathname: '/about',
            query: {
                id: 1000
            } 
        })
    }
    return <div>
        <button onClick={ tz }>我是inde组建</button>
    </div>
}
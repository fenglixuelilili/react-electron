// import logo from './logo.svg';
import './App.css';

function App(props) {
  // const { electron } = window.electron;
  const { shell } = window.electron.electron
  const onlink = function(){
    console.log(window.electron.electron)
    shell.openExternal('https://www.baidu.com')
  }
  return (
    <div className="App">
      <div className='link' onClick={ onlink }>
        我是跳转
      </div>
      <div>
          你好，我是子路由
          { props.children }
      </div>
    </div>
  );
}

export default App;

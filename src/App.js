// import logo from './logo.svg';
import './App.css';

function App() {
  // const { electron } = window.electron;
  const { shell } = window.electron.electron
  const onlink = function(){
    console.log(window.electron.electron)
    shell.openExternal('https://www.baidu.com')
    alert('fasdfas')
  }
  return (
    <div className="App">
      <div className='link' onClick={ onlink }>
        我是跳转
      </div>
    </div>
  );
}

export default App;

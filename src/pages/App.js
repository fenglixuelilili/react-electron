// import logo from './logo.svg';
import './App.css';

function App(props) {
  // const { electron } = window.electron;
  const { shell } = window.electron.electron
  const { fs, __dirname } = window.electron
  console.log(fs, __dirname)
  let res = fs.readFileSync(__dirname + '/src/pages/App.css')
  console.log(res)
  console.log(process, 3393939)
  // const { process } = window.node.process
  // console.log(window.node)
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
      <div>
        你好node
      </div>
    </div>
  );
}

export default App;

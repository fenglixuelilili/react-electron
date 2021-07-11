import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './pages/App';
import Index from './pages/Index/index';
import About from './pages/About/index';
function RouterCom(){
    return (
        <HashRouter>
            <Switch>
                {/* exact 准确匹配路由 */}
                <Route path="/" component={ () => {
                    return (
                        <App>
                            <Route exact path='/Index' component={Index}></Route>
                            <Route exact path='/about' component={About}></Route>
                            <Redirect exact to='/Index' from='/*'></Redirect>
                        </App>
                    )
                } }>
                </Route>
            </Switch>
        </HashRouter>
    )
}
export default RouterCom
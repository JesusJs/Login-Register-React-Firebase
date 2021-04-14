
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Inicio from './components/Inicio/Inicio'
import Admin from './components/Admin/Admin'
import Login from './components/Login/Login'
import Menu from './components/Menu/Menu'

function App() {
  return (
    <div className="container">
     <Router>
        <Menu></Menu>
       <Switch>
         <Route exact path="/" component={Inicio}></Route>
         <Route path="/Admin" component={Admin}></Route>
         <Route path="/Login" component={Login}></Route>
       </Switch>
     </Router>
     
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import Edit from './components-todolist/components/Edit';
import Create from './components-todolist/components/Create';
import Show from './components-todolist/components/Show';
import ToDoList from './components-todolist/ToDoList'
import Login from './component-login/Login'
import Premios from './component-premios/Premios';
import Desafios from './component-desafios/Desafios';


ReactDOM.render(
<Router basename={process.env.PUBLIC_URL}>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/premios' component={Premios} />
        <Route exact path='/desafios' component={Desafios} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/todo' component={ToDoList} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
      </div>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

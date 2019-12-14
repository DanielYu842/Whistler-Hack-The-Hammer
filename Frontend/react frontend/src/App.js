import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Feed from './Pages/Feed.js';
import Login from './Pages/Login.js';



function App() {
  return (
    <div>

      <BrowserRouter>
        <Switch>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/' component={Feed}></Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;

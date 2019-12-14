import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';




function App() {
  return (
    <div>

      <BrowserRouter>
        <Switch>
          <Route path='/login' exact component={}></Route>
          <Route path='/' component={}></Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;

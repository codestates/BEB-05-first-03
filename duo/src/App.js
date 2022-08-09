
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from "axios";
//import React, { useState, useEffect } from 'react';

function App() {
  function login() {
    let result = axios.get("http://localhost:4000/users/login");
    console.log(result.data);
  } 
  return (
    <div className="App">
      <button onClick={() => login()}>
        Login 
      </button>
  
    </div>
  )
    // <Router>

    //   <Switch>
    //     <Route exact path='/'>
    //       <Main />
    //     </Route>
    //     <Route path='/create'>
    //       <Create />
    //     </Route>
    //     <Route path='/astronaut'>
    //       <Astronaut />
    //     </Route>
    //     <Route path='wallet'>
    //       <Wallet />
    //     </Route>
    //   </Switch>
    // </Router>
  
}

export default App;

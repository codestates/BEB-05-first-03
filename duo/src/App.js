
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from "axios";
import {useState, useEffect} from 'react';

function App() {
  useEffect(() => {
    const showAccount = document.querySelector('.showAccount');
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = window.ethereum.request({ method: 'eth_requestAccounts' }).then((response)=>{
          showAccount.innerHTML = response;
        });
      }
      catch (err) { console.log(err) }
    }
  }, [])

  function login() {
    let result = axios.get("http://localhost:4000/users/login").then((response)=>{console.log(response)})
  } 
  return (
    <div className="App">
      <button onClick={() => login()}>
        Login 
      </button>
      <h2>Account: <span className="showAccount"></span></h2>
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

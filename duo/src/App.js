
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from "axios";
import Web3 from "web3";
import {useState, useEffect} from 'react';

function App() {
  useEffect(() => {
    const showAccount = document.querySelector('.showAccount');
    if (typeof window.ethereum !== "undefined") {
      try {
        let web = new Web3(window.ethereum)
        const accounts = window.ethereum.request({ method: 'eth_requestAccounts' }).then((response)=>{
          showAccount.innerHTML = response;
        });
      }
      catch (err) { console.log(err) }
    }
  }, [])

  function login() {
    let result = axios.get("http://localhost:4000/users/login").then((response)=>{console.log(response)})
    // console.log(result);
  } 
  return (
    <div className="App">

      <button className="enableEthereumButton">Enable Ethereum</button>
      <br/>
      <h2>Account: <span className="showAccount"></span></h2>

      <button onClick={() => login()}>
        Login 
      </button>
      <br/>
      <button className="metaConnect" onClick={() => {}}>
              connect to MetaMask
      </button>
      <div className="userInfo">주소: {}</div>  // 연결된 계정 주소를 화면에 출력합니다

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

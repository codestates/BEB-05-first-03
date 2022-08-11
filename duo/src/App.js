
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
    let wallet = document.querySelector('.showAccount').innerHTML
    // `http://localhost:4000/users/login --> 
    //http://localhost:4000/users/0x2Bd964197d5f5b680bF34740574Ded4b2B4aEA9d
    // 통신이 잘되요. 
    // 아 그러면 그냥 wallet변수에 주소값을 담아서 저기 넣어주면 되겠구나 
    // http://localhost:4000/users/0x2Bd964197d5f5b680bF34740574Ded4b2B4aEA9d
    // 두번쨰 시도했을떄는 변수로 담은거를 호출했더니 리턴이 나와요
    let result = axios.get(`http://localhost:4000/users/${wallet}`).then((response)=>{
      console.log(response);
    //  console.log(response.data.images[0]);
      let image = response.data.images[0];
       console.log(image);
       document.getElementById('myNFT').src = image;
    })
  } 
  return (
    <div className="App">
      <button onClick={() => login()}>
        Login 
      </button>
      <h2>Account: <span className="showAccount"></span></h2>
      <div id="image">
        <img id = "myNFT" src = ""></img>
      </div>
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

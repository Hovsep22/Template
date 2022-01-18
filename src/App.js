import './App.css';
import Home from './pages/home/Home';
import Header from "./component/Header/header";
import Account from './account/Account';
// import { Routes } from 'react-router-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import {useState} from "react";
import Password from './password/Password';
import Paymentt from './payment/Paymentt';


// const [isColor, setIsColor] = useState(false);


function App() {
  return (
    <BrowserRouter>
      <div className="app">
         <Header/>      
          <div className='container'>
              <Home/>
              <Routes>
                <Route path="/account"  element={<Account/>}/>   
                <Route path="/password"  element={<Password/>}/>  
                <Route path="/paymentmethods"  element={<Paymentt/>}/>
            </Routes>
               
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

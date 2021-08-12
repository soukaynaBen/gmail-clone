import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import SendMail from './components/SendMail';
import Sidebar from './components/Sidebar';
import {selectSendMessageIsOpen} from "./features/mailSlice"
import{ BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
     
import { login, selectUser } from './features/userSlice';
import Login from './Login.js'
import { auth } from './firebaseConfig';
function App() {
  const  sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  
  const  user = useSelector(selectUser)
   const dispatch= useDispatch();
  useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        if(user){
          dispatch(login({   
             displayName:user.displayName,
             photoUrl:user.photoURL
          }))
        }
      });
  },[])
  return (
    <Router>
   {!user ?
   (<Login/>) :
   (
        <div className="app">
          <Header/>
          <div className="app__body">
          <Sidebar/>
            <Switch>
              <Route path="/mail"  >
                <Mail/>
              </Route>
              <Route path="/"  >
                <EmailList/>
              </Route>
            </Switch>
          </div>
          
          {sendMessageIsOpen && <SendMail/>}
        </div>
   )}
    </Router>
  );
}

export default App;

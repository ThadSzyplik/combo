import React from "react";
import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Navigator from "./components/SiteNav";
import LoginForm from "./components/user/Login";
import RegisterForm from "./components/user/Register";


function App () {

const [currentUser] = useState({
  firstName: "Greg", lastName:"Rojas", loggedIn: true
})

  console.log(currentUser);




  return (
    
    <React.Fragment>
      <Navigator user={currentUser}></Navigator>

  
    <Routes>
      <Route path="/" element={<Home user={currentUser}/>}> </Route>
      {/* <Route path="/page1" element={<Page1 user={currentUser}/>}></Route> */}
      <Route path="/login" element={<LoginForm></LoginForm>}></Route>
      <Route path="/register" element={<RegisterForm></RegisterForm>}></Route>
    </Routes>
    </React.Fragment>
    
  );
}

export default App;

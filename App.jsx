import React from "react";
import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Navigator from "./components/SiteNav";
import LoginForm from "./components/user/Login";
import RegisterForm from "./components/user/Register";

function App() {
  const [user] = useState({
    email: "",
    password: "",
    tenantId: "U04CSBS07FX",
    name: "",
  });

  console.log(user);

  return (
    <React.Fragment>
      <Navigator userData={user}></Navigator>

      <Routes>
        <Route path="/" element={<Home userData={user} />}>
          {" "}
        </Route>
        {/* <Route path="/page1" element={<Page1 userData={user}/>}></Route> */}
        <Route path="/login" element={<LoginForm></LoginForm>}></Route>
        <Route path="/register" element={<RegisterForm></RegisterForm>}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;

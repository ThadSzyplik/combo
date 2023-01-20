import React from "react";
import Footer from "../components/Footer";
import { useEffect } from "react";
import userService from "../userService";
import toastr from "toastr";
import { useState } from "react";


function Home() {

  useEffect(()=> {
    userService.getCurrentUser().then(currentUserSuccess).catch(currentUserError)
  }, []);

  function currentUserSuccess(response){
    let userInfo = response.data.item.name
    console.log("this is current user success handler")
    // onUserLogg
    toastr.success("Welcome back, Friend!")
  
    setCurrentUser((prevState) => {
      console.log("updater onChange");
  
      const user = {
      ...prevState, 
  };
      user.name= userInfo
       return user;
  
        });
  
  }
  
  function currentUserError(error){
    console.warn(error)
    toastr.error("No current User!")
  }
        const [currentUser, setCurrentUser ] = useState({
          firstName:"",
        });

  return (
    
    <React.Fragment>
      <h1>
        Hello, {currentUser.name}

        
        {/* {props.userData ? props.userData?.firstName : ""} {props.userData ? props.userData?.lastName : ""}    */}
      </h1>
      {/* <hr /> */}
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Home;

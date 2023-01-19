/*
this will have 

email address:
First Name:
Last Name:
Password : MUST MATCH CONFIRM
Confirm Password: MUST MATCH PASSWORD
Profile URL: will be the avatar URL in the form.... find how they communicate

ALSO need a tenandId created but need to ensure they 1. don't show on form, and 2. communicate with register user.

*/ 

import React from "react";


function RegisterForm() {
    return (
        <React.Fragment>
        <form>
        <div className="form-group"
        >
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="floatingEmailInput" aria-describedby="emailHelp" placeholder="Enter email"></input>
         
        </div>
        <div className="form-group"
        >
          <label for="exampleInputFirstName">First Name</label>
          <input type="firstName" class="form-control" id="floatingFirstNameInput" aria-describedby="emailHelp" placeholder="Enter First Name"></input>
        </div>

        <div className="form-group"
        >
          <label for="exampleInputLastName">Last Name</label>
          <input type="lastName" class="form-control" id="floatingLastNameInput" aria-describedby="emailHelp" placeholder="Enter First Name"></input>
        </div>

        <div className="form-group"
        >
          <label for="passwordInput">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
        <div className="form-group"
        >
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" class="form-control" id="floatingConfirmPassword1" placeholder="Password"></input>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </React.Fragment>
    );
   
  }
  
  export default RegisterForm;

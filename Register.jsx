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

import React, { useState } from "react";
// import { addUser, userService } from "../../userService";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import userService from "../../userService.js";

function RegisterForm() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    avatarUrl: "",
    password: "",
    passwordConfirm: "",
    tenantId: "U04CSBS07FX",
  });

  const onFormFieldChange = (e) => {
    console.log("onChange", { syntheticEvent: e });

    const target = e.target;

    const value = target.value;

    const name = target.name;

    setUser((prevState) => {
      console.log("updater onChange");

      const updatedFormData = {
        ...prevState,
      };

      updatedFormData[name] = value;

      return updatedFormData;
    });
    console.log("end onChange");
  };

  const onRegisterClicked = (e) => {
    e.preventDefault();
    userService.addUser(user).then(onRegisterSuccess).catch(onRegisterError);
    // console.log(addUser)
  };

  const onRegisterSuccess = (response) => {
    console.log(response);
    toastr.success("User Created!");
  };

  const onRegisterError = (error) => {
    console.log(error);
    toastr.error("cannot create user");
  };
  return (
    <React.Fragment>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="floatingEmailInput"
            placeholder="Enter email"
            name="email"
            // value={user.email}
            onChange={onFormFieldChange}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputFirstName">First Name</label>
          <input
            type="firstName"
            className="form-control"
            id="floatingFirstNameInput"
            placeholder="Enter First Name"
            name="firstName"
            // value={user.firstName}
            onChange={onFormFieldChange}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputLastName">Last Name</label>
          <input
            type="lastName"
            className="form-control"
            id="floatingLastNameInput"
            placeholder="Enter Last Name"
            name="lastName"
            // value={user.lastName}
            onChange={onFormFieldChange}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="exampleURL">Profile URL </label>
          <input
            type="URL"
            className="form-control"
            id="floatingURLInput"
            placeholder="Enter Desired URL"
            name="avatarUrl"
            // value={user.avatarUrl}
            onChange={onFormFieldChange}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            // value={user.password}
            onChange={onFormFieldChange}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="floatingConfirmPassword1"
            placeholder="Confirm Password"
            name="passwordConfirm"
            // value={user.passwordConfirm}
            onChange={onFormFieldChange}
          ></input>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={onRegisterClicked}
        >
          Register
        </button>
      </form>
      {/* <div>
        <h4>
            Output
        </h4>
        <pre>
            <code>{JSON.stringify(setState, undefined, 2)}</code>
        </pre>
      </div> */}
    </React.Fragment>
  );
}

export default RegisterForm;

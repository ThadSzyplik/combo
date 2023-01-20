import React, { useState } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import userService from "../../userService.js";

function LoginForm() {
  const [user, setUser] = useState({
    email: "",
    password: "",
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

  const onLoginClicked = (e) => {
    e.preventDefault();
    userService.loginUser(user).then(onLoginSuccess).catch(onLoginError);
    // console.log(addUser)
  };

  const onLoginSuccess = (response) => {
    console.log(response);
    toastr.success("Welcome back, Friend!");
    userService.getCurrentUser().then().catch();
    // getCurrent user
  };

  const onLoginError = (error) => {
    console.log(error);
    toastr.error("Failed to log in user, try again!");
  };
  return (
    <React.Fragment>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            name="email"
            onChange={onFormFieldChange}
            /* value={user.email} */
          ></input>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div
          className="form-group"
          // value={emailAddress}
        >
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            /* value={user.password} */
            onChange={onFormFieldChange}
            placeholder="Password"
          ></input>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onLoginClicked}
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
}
export default LoginForm;

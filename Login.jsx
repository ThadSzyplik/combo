import React from "react";
// import Form from 'react-bootstrap/Form';


function LoginForm() {
    return (
        <React.Fragment>
        <form>
        <div className="form-group"
        >
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group"
        >
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </React.Fragment>
    );
   
  }
  
  export default LoginForm;

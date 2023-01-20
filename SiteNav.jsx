import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import userService from "../userService";
import toastr from "toastr";
import { useState } from "react";

function Navigator() {
  //   const navigate = useNavigate();

  useEffect(() => {
    userService
      .getCurrentUser()
      .then(currentUserSuccess)
      .catch(currentUserError);
  }, []);

  function currentUserSuccess(response) {
    let userInfo = response.data.item.name;
    console.log("this is current user success handler");
    // onUserLogg
    toastr.success("Welcome back, Friend!");

    setCurrentUser((prevState) => {
      console.log("updater onChange");

      const user = {
        ...prevState,
      };
      user.name = userInfo;
      return user;
    });
  }

  function currentUserError(error) {
    console.warn(error);
    toastr.error("No current User!");
  }
  const [currentUser, setCurrentUser] = useState({
    firstName: "",
  });

  // const loggedInUser = (response) => {
  //   console.log("onChange", loggedInUser);

  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="https://pw.sabio.la/images/Sabio.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Sabio"
            />
          </a>
          <button
            to="/"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link to="/" className="nav-link px-2 text-white link-button">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/friends"
                  className="nav-link px-2 text-white link-button"
                >
                  Friends
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/jobs"
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/tech-companies"
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Tech Companies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/events"
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/test"
                  href="/"
                  className="nav-link px-2 text-white link-button"
                >
                  Test and Ajax Call
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/product"
                  className="nav-link px-2 text-white link-button"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/cars"
                  className="nav-link px-2 text-white link-button"
                >
                  Cars
                </Link>
              </li>
            </ul>
            <div className="text-end">
              <a
                href="/"
                className="align-items-center mb-2 me-2 mb-lg-0 text-white text-decoration-none"
              >
                {currentUser.name}
              </a>

              <Link
                to="/login"
                type="button"
                className="btn btn-outline-light me-2"
                // onClick={onClick}
              >
                Login
              </Link>
              <Link to="/register" type="button" className="btn btn-warning">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
// }

export default Navigator;

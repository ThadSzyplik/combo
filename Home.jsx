import React from "react";
import Footer from "../components/Footer";


function Home(props) {
  return (
    <React.Fragment>
      <h1>
        Hello, {props.user ? props.user?.firstName : ""} {props.user ? props.user?.lastName : ""}   
      </h1>
      <hr />
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Home;
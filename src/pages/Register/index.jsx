import React from "react";
import Left from "./Left";
import Right from "./Right";

const Register = ({setPage}) => {
  return (
    <div className="register-page" style={{display: "flex", height:'100vh'}}>
      <Left></Left>
      <Right setPage={setPage}></Right>
    </div>
  );
};

export default Register;

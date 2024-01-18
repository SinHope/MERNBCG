// This Login page is still in development stage. Lots of bugs still that needs to be fixed //

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "firebase/auth";

import Backgroundimage from "../components/Backgroundimage";
import Navigation from "../components/Navigation";
import axios from "axios";


function RegisterPage() {
  
  const history=useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  
  
const Submit = async (e) => {
  e.preventDefault();
  if (
    password !== confirmPassword) {
    alert("Passwords do not match!");
    return; // Prevent form submission  
    }
  try{

    await axios.post("http://localhost:5000/Register",{name, email,password})

    .then(res=>{
      
        if(res.data==="exist"){
            alert("Email already exists")
        }
        else if(res.data==="notexist"){
          alert("Please check your email and click on the verification link")
            history("/Login",{state:{id:email}})
        }
    })
    .catch(e=>{
        alert("wrong details!!" + e.message)
        console.log(e);
    })

}
catch(e){
    console.log(e);

}

}
  
return (
    <div>
      <Navigation />
      <Backgroundimage />

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-warning customs-loginbox">
            <div className="card-header">Register And Sign Up</div>
            <div className="card-body">
              <form onSubmit={Submit} action="POST">
              <div className="form-group">
                  <label htmlFor="username">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    required
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                    placeholder="Enter Your Name Here"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    placeholder="Enter Your Email Address Here"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    placeholder="Enter Your Password Here"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input
                   type="password"
                   className="form-control"
                   id="confirmPassword"
                   name="confirmPassword"
                   required
                   value={confirmPassword}
                   onChange={(e) => setConfirmPassword(e.target.value)}
                   placeholder="Confirm Your Password"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-dark m-3 custom-login-button"
                  
                  >
                  Submit
                </button>
                

                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  export default RegisterPage;
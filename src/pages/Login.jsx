  // This Login page is still in development stage. Lots of bugs still that needs to be fixed //

  import React, {  useState } from "react"
  import { useNavigate, Link } from "react-router-dom";
  // import "firebase/auth";
  // import GoogleLogin from "react-google-login";
  import Backgroundimage from "../components/Backgroundimage";
  import Navigation from "../components/Navigation";
  import axios from "axios";


  function LoginPage() {
    
    const history=useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
                                           };


    const Submit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post("http://localhost:5000/Login", { email, password });
          
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
    
            // Check the role and redirect accordingly
            const role = response.data.role; // Ensure backend sends this data
            if (role === "admin") {
              history("/AdminPage");
            } else {
              history("/ProfilePage");
            }
    
            alert("You have successfully logged in!");
          } else {
            alert("Email or Password is wrong!");
          }
        } catch (error) {
          console.error("Login error:", error);
          if (error.response && error.response.data.message === "notexist") {
            alert("Email is not registered");
          } else {
            alert("An error occurred during login");
          }
        }
      };

    return (
      <div>
        <Navigation />
        <Backgroundimage />

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card bg-warning customs-loginbox">
              <div className="card-header">Login</div>
              <div className="card-body">
                <form onSubmit={Submit} action="POST">
                  <div className="form-group">
                    <label htmlFor="username">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="username"
                      name="username"
                      required
                      value={email}
                      onChange={(e) => {setEmail(e.target.value) }}
                      placeholder="Enter Your Email Address Here"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="password"
                      name="password"
                      required
                      value={password}
                      onChange={(e) => {setPassword(e.target.value) }}
                      placeholder="Enter Your Password Here"
                    />
                    <button onClick={togglePasswordVisibility} type="button" className="bg-dark text-white">
                    {showPassword ? "Hide" : "Show"} Password 👀
                </button>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark m-3 custom-login-button"
                    >
                    Login
                  </button>
                  <Link to="/register">
                  <button
                    
                    className="btn btn-dark m-3 custom-login-button"
                    >
                    Don't have an account yet? Sign up here!
                  </button>
                  </Link>
                  

                
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default LoginPage;

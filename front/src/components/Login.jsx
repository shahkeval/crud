import React from "react";

const Login =()=>{
   console.log("helllo");
   return(
    <div className="login-form">
    <h2>Login</h2>
    <form>
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login </button>
    </form>
  </div>
   )
}
export default Login;
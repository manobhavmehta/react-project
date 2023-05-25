import React from "react";
import "./Login.css";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";

function Login () {
    return (<div className="login">
        <Navbar />
         <div className="outer">
           
            <div className="inner">

            <form>
            <h1>LOGIN</h1>
             <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                  <input type= "email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
             </div>
             <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type= "password" class="form-control" id="exampleInputPassword1" />
             </div>
             <div className="registerlink"><p>New user?<Link to ="/register">Register</Link></p> </div>
             <button type="submit" className="btn  btn-lg">Login</button>
                    </form>

                </div>
            
         </div>
    </div>
    )
}

export default Login;
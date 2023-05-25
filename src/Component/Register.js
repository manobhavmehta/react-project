import React ,{useState} from "react";
import {Link} from "react-router-dom";

import Navbar from "./Navbar";

function Register ()
{
  const [User,setUser] = useState({
    email : "" , name:"", pass:"", confirmpass:""
  });

  let name , value;
  const handleinput = (e) =>{
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...User, [name]:value});
  }

  

    return (
        <div>
            <Navbar />
            <div className="outer">
           
            <div className="inner">

            <form>
            <h1>REGISTER</h1>
             <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" placeholder="Email">Email</label>
                  <input type= "email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                  value={User.email}
                  onChange={handleinput}
                  />
             </div>
             <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label" placeholder="Password">Name</label>
                    <input type= "Text" name="name" class="form-control" id="exampleInputName"
                    value={User.name}
                    onChange={handleinput}
                    />
             </div>
             <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" placeholder="Enterpass">Enter Password</label>
                  <input type= "password" name="pass" class="form-control" id="exampleInputPassword1" aria-describedby="emailHelp"
                  value={User.pass}
                  onChange={handleinput}
                  />
             </div>
             <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" placeholder="Confirmpass">Confirm Password</label>
                  <input type= "password" name="confirmpass" class="form-control" id="exampleInputPassword2" aria-describedby="emailHelp" 
                  value={User.confirmpass}
                  onChange={handleinput}
                  />
             </div>
             <div className="registerlink"><p>Already have an account? <Link to="/login">Login</Link></p></div>
             <button type="submit" className="btn  btn-lg">Sign Up</button>
             
                    </form>

                </div>
            
         </div>

        </div>
    )
}

export default Register;
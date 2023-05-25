import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import './Navbar.css'

const Navbar = () =>{
  const [showicon , setshowicon] = React.useState(false);
  return( <div className="nav-bar">

<div className="title">
  <h2>🏡House2Home</h2>
</div>


<div className={showicon ? "after-click links" : "links" }>
<ul>
  <li>
  <Link to = '/'>Home</Link>
  </li>

  <li>
  <Link to = '/about'>About</Link>
  </li>

  <li>
  <Link to = '/products'>Products</Link>
  </li>

  <li>
  <Link to = '/login'>Login</Link>
  </li>
</ul>
</div>


<div className="cart">

  <a href="/"><h3><i className="fa-solid fa-cart-arrow-down"></i></h3></a>
  <a onClick={() => setshowicon(!showicon)}><i className="fa-solid fa-bars"></i></a>
  
</div>



  </div>
  
/*<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand">🏡HousetoHome.com</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to ="/">Home </Link>
        </li>
        <li className="nav-item">
          <Link to ="/about" >About </Link>
        </li> 
        {/* <li className="nav-item">
          <Link className="nav-link active"  to ="/">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"  to ="/">SignUp/Login</Link>
        </li> }
        
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">🔍</button>
      </form>
    </div>
  </div>
</nav> */
  ) 
}

export default Navbar;
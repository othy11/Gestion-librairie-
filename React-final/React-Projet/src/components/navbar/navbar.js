import React from "react"; 
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import"bootstrap/dist/js/bootstrap.min.js";
import Nvimg from "../images/Nvimg.png";
import "./Navbar.css";

class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
  <div className="container">
  <Link to="/"  className="navbar-brand"><h6 className="lb"><img className="Nvimg" src={Nvimg} alt="nvimg"/> Les libraires</h6></Link>

    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul className="navbar-nav ml-auto">
      <li  className="navbar-item">
     <Link to="/" className="nav-link">Home</Link>
             </li>
      <li  className="navbar-item">
     <Link to="/liste" className="nav-link">Liste des Achats</Link>
             </li>
             <li className="navbar-item">
     <Link to="/ajout" className="nav-link">Acheter un livre</Link>
             </li>
             <li className="navbar-item">
     <Link to="/Ajoutlivre" className="nav-link">Ajouter un livre </Link>
             </li>
      </ul>
    </div>
  </div>
</nav>
   
        )
    }
}
export default Navbar;
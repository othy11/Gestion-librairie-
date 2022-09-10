import React from "react";
import { BrowserRouter as Router, Redirect, Route, route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import"bootstrap/dist/js/bootstrap.min.js";
import Liste from "./components/liste/liste";
import Ajout from "./components/ajout/ajout";
import Navbar from "./components/navbar/navbar";
import Home from "./components/Home/home";
import AjoutLivre from "./components/ajout_livre/Ajoutlivre";
import Edit from "./components/edit/edit";

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <Router>
          <Route exact path="/">
            <Redirect to="/home"/> :<Liste/>
          </Route>
        <Navbar/>
        <Route path="/home" component={Home}/>
        <Route path= "/liste" component={Liste}/>
        <Route path= "/ajout" component={Ajout}/>
        <Route path="/AjoutLivre" component={AjoutLivre}/>
        <Route path="/edit/:id" component={Edit}/>

        </Router>
      </div>
    )
  }
}

export default App;

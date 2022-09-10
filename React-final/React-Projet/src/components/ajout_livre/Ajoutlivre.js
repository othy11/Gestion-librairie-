import React from 'react';
import axios from 'axios';
import"./ajoutlivre.css"


class AjoutLivre extends React.Component {
    constructor(props){
        super(props);
        this.state={
            nom_livre:'',
            auteur:'',
            editeur:'',
           
            
        }
        this.onChangeNom_livre = this.onChangeNom_livre.bind(this);
        this.onChangeAuteur = this.onChangeAuteur.bind(this);
        this.onChangeEditeur = this.onChangeEditeur.bind(this);
        this.onChangeNom_livre=this.onChangeNom_livre.bind(this);

        
        this.onSubmit = this.onSubmit.bind(this);
        
    }

    
    //chargement tous les departements (Bd en haut) dans le tableau deps
    onChangeNom_livre(e){
        this.setState({
            nom_livre:e.target.value
        })
    }

    onChangeAuteur(e){
        this.setState({
        auteur:e.target.value
        })
    }

    onChangeEditeur(e){
        this.setState({
            editeur:e.target.value
        })
    }


    onSubmit(e){
        e.preventDefault();
        const lst = {
            nom_livre:this.state.nom_livre,
            auteur: this.state.auteur,
            editeur: this.state.editeur,

        }
    
        console.log(lst)
        //générer un POST avec Axios pour les envoyer au Backend
        axios.post('http://192.168.137.1:3427/ajoutLivre', lst)
        .then(res=>console.log(res.data));
        this.setState({
            nom_livre:'',
            auteur:'',
            editeur:'',
            
        })
    }


    render(){
        

return (
    
    <div className="container">
        <h3 className="AjLivre">Ajouter un livre</h3>
        <form onSubmit={this.onSubmit}>

            <div className="form-group">
                <label>Livre:</label>
                <input type="text"
                required
                className="form-control"
                value={this.state.nom_livre}
                onChange={this.onChangeNom_livre}

                />
            </div>

            <div className="form-group">
                <label>Auteur :</label>
                <input type="text"
                required
                className="form-control"
                value={this.state.auteur}
                onChange={this.onChangeAuteur}
                />
            </div>
            <div className="form-group">
                <label>Editeur :</label>
                <input type="text"
                required
                className="form-control"
                value={this.state.editeur}
                onChange={this.onChangeEditeur}

                />
            </div>

            <div className="form-group">
                <input className="btn btn-outline-success btn-block" type="submit" value="Valider" />
            </div>
        </form>
    </div>

)
    }
}
export default AjoutLivre;

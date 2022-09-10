import axios from 'axios';
import React from 'react';
import "./edit.css"

class Edit extends React.Component {
   
    constructor(props){
        super(props);
        this.state={
            nom_livre:'',
            quantite:'',
            nom_acheteur:'',
            prenom_acheteur:'',
            telephone:'',
            email:'',
            livres:[],
            id:'',
         
            } 
        //creation de bound (liaison) entre les méthodes et le mot clé (this)
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeTelephone = this.onChangeTelephone.bind(this);
        this.onChangeNom_livre = this.onChangeNom_livre.bind(this);
        this.onChangeQuantite = this.onChangeQuantite.bind(this);

         //creation de bound (liaison) entre la méthode Onsubmit et le mot clé(this)
         this.onSubmit=this.onSubmit.bind(this); 
    }


    componentDidMount(){
        axios.get('http://192.168.137.1:3427/livres')
        .then(response =>{
            console.log(response.data);
            let livres = (response.data);
                this.setState({
                    livres:livres.map(nom_livre=>nom_livre.nom_livre),
                })                
        })
        .catch((error)=>{
            console.log(error);
        })

        
            console.log(this.props.match.params.id)
            axios.get('http://192.168.137.1:3427/achat/'+ this.props.match.params.id)
            .then(response=>{
                this.setState ({
            nom_acheteur:response.data.nom_acheteur,
            prenom_acheteur:response.data.prenom_acheteur,
            email:response.data.email,
            telephone:response.data.telephone,
            id:this.props.match.params.id,
            nom_livre:response.data.nom_livre,
            quantite:response.data.quantite


        })
            })
            .catch((error)=>{
                console.log(error);
            })
            console.log(this.state.code);
        }
    

        onChangeQuantite(e){
            this.setState({
                quantite:e.target.value
            })
        }
        onChangeEmail(e){
            this.setState({
                email:e.target.value
            })
        }
    
        onChangeNom(e){
            this.setState({
                nom_acheteur:e.target.value
            })
        }
        onChangePrenom(e){
            this.setState({
                prenom_acheteur:e.target.value
            })
        }
    
        onChangeTelephone(e){
            this.setState({
                telephone:e.target.value
            })
        }
    
        onChangeNom_livre(e){
            this.setState({
                nom_livre:e.target.value
            })
        }

 
    //methode pour redireger le client à la page d'utilisateur après Update
    redirect(){
        this.props.history.push('/liste')
      }

      
    //méthode onSubmit pour récupération des données
    onSubmit(e){
        e.preventDefault();
        const util={
            email:this.state.email,
            nom_acheteur:this.state.nom_acheteur,
            prenom_acheteur:this.state.prenom_acheteur,
            telephone:this.state.telephone,
            nom_livre:this.state.nom_livre,
            quantite:this.state.quantite
          
        }
        console.log(util)
        
       
        //générer un POST  avec Axios pour envoyer les nouvelles information au Backend
       axios.post('http://192.168.137.1:3427/upAchat/'+this.props.match.params.id, util)
       //.then(res=>console.log(res.data));
       .then(()=> this.redirect());
        
    }
    
    render(){
        

return (
    <div className="container">
        <h3 className="EAch"> Editer un achat</h3>
        <form onSubmit={this.onSubmit}>   {/* action prévue à la soumission du formulaire */}
        
        <div className="form-group">
                <label> Livres</label>
                <select
                required
                className="form-control"
                onChange={this.onChangeNom_livre} value={this.state.nom_livre}>  
                {
                    this.state.livres.map(function(nom_livre){
                        return <option
                        key={nom_livre}
                        value={nom_livre}>{nom_livre}
                        </option>;
                    })
                } 
                </select>
            </div>
            <div className="form-group">
            <label>Quantité</label>
            <select className="form-select" aria-label="Default select example"
                required
                className="form-control"
                onChange={this.onChangeQuantite} value={this.state.quantite}>
                    
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                 
                </select>
            </div>

                    <div className="form-group">
                        <label>Nom :</label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.nom_acheteur}
                        onChange = {this.onChangeNom}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Prénom :</label>
                        <input type="yext"
                        required
                        className="form-control"
                        value={this.state.prenom_acheteur}
                        onChange={this.onChangePrenom}

                        />
                    </div>

                    <div className="form-group">
                        <label>Téléphone :</label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.telephone}
                        onChange={this.onChangeTelephone}

                        />
                    </div>
                    <div className="form-group">
                        <label>E-mail :</label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}

                        />
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Éditer" className="btn btn-outline-success btn-block"/>
                    </div>
                </form>
                
            </div>
        )
    }
}
export default Edit;

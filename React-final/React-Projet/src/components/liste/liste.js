import React from 'react';
import axios from 'axios';
import Genlist from './GenListe';
import"./liste.css"



class Liste extends React.Component {
    constructor(props){
        super(props);
        
        this.state={
            utilisateurs:[]
        }

        //liason entre this et la methode deleteUtil
        this.deleteUtil = this.deleteUtil.bind(this);
    }

//creation de la methode deleteUtil avec l'id à supprimer en paramètre
deleteUtil(id){
    axios.delete('http://192.168.137.1:3427/delet/'+id)  //Axios génère un DELETE à l’adresse du backend désirée en passant le id en paramètre
    .then(res =>console.log(res.data));
    this.setState({
        utilisateurs:this.state.utilisateurs.filter(el =>el._id !==id)
    })
}


    componentDidMount(){
        //this.setState({utilisateurs:utils})
        axios.get('http://192.168.137.1:3427/achats')
        .then(response =>{
            //console.log(response.data);
            if (response.data.length > 0){
                this.setState({
                    utilisateurs: response.data})
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }


    userList(){
        return this.state.utilisateurs.map(utilCourant=>{

            //return <GenList utilisateur={utilCourant}key={utilCourant.code}/>;
            return <Genlist utilisateur={utilCourant} deleteUtil={this.deleteUtil}key={utilCourant._id}/>;
        })
    }

    render(){
        return (
            <div className="container">
                <h3 className="lst"> Liste des achats</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Livre</th>
                            <th >Quantité</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Téléphone</th>
                            <th>E-mail</th>

                        </tr>
                    </thead>
                <tbody>
                    {this.userList()}
                </tbody>
                </table> 
            </div>

                )
            }
        }
export default Liste;

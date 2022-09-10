import React from 'react';
import {Link} from 'react-router-dom';


class GenList extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.utilisateur.nom_livre}</td>
                <td>{this.props.utilisateur.quantite}</td>
                <td>{this.props.utilisateur.nom_acheteur}</td>
                <td>{this.props.utilisateur.prenom_acheteur}</td>
                <td>{this.props.utilisateur.telephone}</td>
                <td>{this.props.utilisateur.email}</td>


                <td>
                   <Link className="btn btn-success" to={"/edit/" + this.props.utilisateur._id}>Édition</Link> | <a className="btn btn-danger" href="#" onClick={()=>{this.props.deleteUtil(this.props.utilisateur._id)}}>Suppression</a>
                </td>
            </tr>
        )
    }
}
export default GenList;
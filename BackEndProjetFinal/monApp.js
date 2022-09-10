const express = require('express');
const app = express();
const mongoose = require("mongoose");
const connection = mongoose.connection;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const Ach = require('./models/achat');
const Liv = require('./models/livre');

const cors = require('cors');
app.use(cors());


// ------------------Toutes les methodes pour la collection Achat--------------------------------------------//

//Acheter un livre 
app.post('/ajoutAchat',(req,res)=>{

    console.log('data: ',req.body);

    const achat = new Ach(req.body);

    achat.save((err,achat)=>
    {
        if(err)
        {
            return res.status(500).json(err);
        }
        res.status(201).json(achat);
    });
});


//Lire les achats
app.get('/achats',(req,res)=>{
    Ach.find()
    .exec()
    .then(Ach => res.status(200).json(Ach));
});

//lire un achat specifique
app.get('/achat/:id',(req,res)=>{
    Ach.findById(req.params.id)
    .exec()
    .then(Ach => res.status(200).json(Ach));
});

//Supprimer un achat à l'aide de son Id
app.delete('/delet/:id',(req,res)=>{
    const id = req.params.id;
    Ach.findByIdAndDelete(id,(err,Ach)=>{
        if(err)
        {
            return res.status(500).json(err);
        }
        res.status(202).json({msg:'Achat a été bien  supprimé'})
    });
});

//update un achat à l'aide de son id
app.post('/upAchat/:id',(req,res)=>{
    const achat = req.params.id;
    console.log(achat);
    console.log(req.body),
    Ach.findById(achat)
    .then(Ach => {
        Ach.nom_livre = req.body.nom_livre;
        Ach.quantite = req.body.quantite;
        Ach.nom_acheteur = req.body.nom_acheteur;
        Ach.prenom_acheteur = req.body.prenom_acheteur;
        Ach.telephone = req.body.telephone;
        Ach.email = req.body.email;

        Ach.save()
        .then(()=>res.json('Edition reuissie!'))
        .catch(err => res.status(400).json('error: '+err));
    })
    .catch(err => res.status(400).json('error: '+err));
});


//--------------------------Toutes les méthodes pour la collection Livre-----------------------------------------//


//Ajouter un livre à la collection Livres
app.post('/ajoutLivre',(req,res)=>{

    console.log('data: ',req.body);

    const livre = new Liv(req.body);

    livre.save((err,livre)=>
    {
        if(err)
        {
            return res.status(500).json(err);
        }
        res.status(201).json(livre);
    });
});


//Lire les livres ajoutés
app.get('/livres',(req,res)=>{
    Liv.find()
    .exec()
    .then(Liv => res.status(200).json(Liv));
});

//Update un livre
app.post('/upLivre/:id',(req,res)=>{
    const livre = req.params.id;
    console.log(livre);
    console.log(req.body),
    Liv.findById(livre)
    .then(Liv => {
        Liv. nom_livre = req.body. nom_livre;
        Liv.auteur = req.body.auteur;
        Liv.editeur = req.body.editeur;

        Liv.save()
        .then(()=>res.json('Edition dun livre  reuissie !'))
        .catch(err => res.status(400).json('error: '+err));
    })
    .catch(err => res.status(400).json('error: '+err));
});



//---------------------------------La connexion vers mongoDB et mongoDB Atlas et Creation de port---------------------------------------------------------

//connexion mongoose Atlas
mongoose.connect('mongodb+srv://dbUser:dbUser@cluster0.c7aqt.mongodb.net/projetFinal',{  useUnifiedTopology: true ,useNewUrlParser: true });

connection.once('open' , () =>
{
    console.log("connexion réussie")
});

//port
app.listen(3427,()=> {

    console.log("listening to 3427");

});
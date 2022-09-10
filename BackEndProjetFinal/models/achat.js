const mongoose = require('mongoose');

const achatSchema = new mongoose.Schema({
    nom_livre : String,
    quantite :Number,
    nom_acheteur: String,
    prenom_acheteur: String,
    telephone: String,
    email : String,
});
module.exports = mongoose.model('Achat',achatSchema)
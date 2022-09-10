const mongoose = require('mongoose');

const livreSchema = new mongoose.Schema({
    nom_livre : String,
    auteur : String,
    editeur: String
});
module.exports = mongoose.model('Livre',livreSchema)
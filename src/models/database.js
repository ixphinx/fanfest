const mongoose = require('mongoose');
const {Schema} = mongoose;

const Data = new Schema({
   club: String,
   pais: String,
   ciudad: String,
   contacto: String,
   cargo: String,
   email: String,
   evento: String,
   fecha: String,
   score: Number,
   alias: String,
   scorepais: String,
   
    
    
});

module.exports= mongoose.model('Data', Data);

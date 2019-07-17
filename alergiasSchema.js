const mongoose = require("mongoose")
//cada schema equivale 1 collection
var Schema = mongoose.Schema;
var AlergiasSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    tipo: { type:String, required: true }, 
    descricao: { type: String, required: true }
   
})
const alergiasModel = mongoose.model("Alergias", AlergiasSchema);

module.exports = alergiasModel;

const { connect } = require('./alergiasRepository')
const alergiasModel = require('./alergiasSchema')

connect() // para conectar no mongoDB

const getAll = async () => {
  return alergiasModel.find((error, alergias) => {
    return alergias
  })
}

const getById = (id) => {
  return alergiasModel.findById(id) 
}


const add = async (alergias) => {
  const novaAlergia = new alergiasModel(alergias)
  return novaAlergia.save()
}


const remove = async (id) => {
  return alergiasModel.findByIdAndDelete(id)
}

const update = (id, alergias) => {
  return alergiasModel.findByIdAndUpdate(
    id,
    { $set: alergias},
    { new: true }, // RETORNAR A COMIDA JA ATUALIZADA NO CALLBACK
  )
}

module.exports = {
  getAll,
  getById,
  add,
  remove,
  update
}
const Pet = require('../models/pet.model')

const getAllPets = (req, res) => {
  Pet.find().sort({ "type": "asc" }).exec()
    .then(allPets => res.json({ allPets: allPets }))
    .catch(err => res.status(400).json({ errorMessage: err }))
}

// const getOne = ((req, res) => {
//   Pet.findOne({ _id: request.params._id})
//       .then(pet => res.json({ pet: pet }))
//       .catch(err => res.json(err))
// })

const getOne = ((req, res) => {
  Pet.findOne({_id: req.params.id})
  .then((pet) => res.json({pet: pet}))
  .catch((err) => res.json({errorMessage: err}))
})


const addNewPet = (req, res) => {
  const { name, type, description, skill1, skill2, skill3 } = req.body;
  Pet.create({
    name,
    type,
    description,
    skill1,
    skill2,
    skill3
  })
    .then(newPet => res.json({ newPet: newPet }))
    .catch(err => res.status(400).json(err))
}

const deleteExistingPet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then((deletedPet => res.json({ deletedPet: deletedPet })))
    .catch(err => res.status(400).json(err))
}

const updateExistingPet = ((req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.id },
    req.body,
    {
      new: true,
      runValidators: true,
      context: 'query'
    }
  )
    .then((updatedPet) => res.json({ updatedPet: updatedPet }))
    .catch(err => res.status(400).json(err))
})

const getLikes = ((req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.id },
    { $inc: { likes: 1 } },
    {new: true}
  )
    .then((updatedPet) => res.json({ updatedPet: updatedPet }))
    .catch(err => res.status(400).json(err))
})

module.exports = {
  getAllPets,
  getOne,
  addNewPet,
  deleteExistingPet,
  updateExistingPet,
  getLikes,
}

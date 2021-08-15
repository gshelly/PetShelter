const PetController = require('../controllers/pet.controller')

module.exports = function(app) {
  app.get('/api/pet', PetController.getAllPets);
  app.get('/api/pet/:id', PetController.getOne);
  app.post('/api/pet', PetController.addNewPet);
  app.put('/api/pet/edit/:id', PetController.updateExistingPet);
  app.delete('/api/pet/delete/:id', PetController.deleteExistingPet);
  app.put('/api/pet/like/:id', PetController.getLikes);
}
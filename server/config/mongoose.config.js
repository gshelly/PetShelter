const mongoose = require("mongoose")

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb://localhost/petShelter", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Established a connection to the database"))
  .catch(err => console.log("Something went wrong when connecting to the database", err));
import React, { useState } from 'react';
import Main from './views/Main'
import './App.css';
import { Router } from '@reach/router';
import AddEditPet from './components/AddEditPet';
import PetDetails from './components/PetDetails'


function App() {

  const [editPet, setEditPet] = useState("")
  const [petDetails, setPetDetails] = useState("")

  return (
    <div className="App">
      <Router>
        <Main path='/' setEditPet={setEditPet} setPetDetails={setPetDetails} />
        <AddEditPet path='/pets/new' />
        <AddEditPet editPet={editPet} path='/pets/edit/:id' />
        <PetDetails path='/pets/:id' petDetails={petDetails} />
      </Router>
    </div>
  );
}

export default App;

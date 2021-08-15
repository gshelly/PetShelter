import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import '../style/style.css'


const PetshelterHome = (props) => {

  const [petList, setPetList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/pet')
      .then(response => {
        setPetList(response.data.allPets)
      })
      .catch(error => console.log(error))
  })

  const handleEdit = (e, pet) => {

    navigate('/pets/edit/' + pet._id)
    props.setEditPet(pet)
  }

  const showDetails = (e, pet) => {

    navigate('/pets/' + pet._id)
    props.setPetDetails(pet)
  }


  return (
    <div id="wrapper">
      <h1 style={{
        margin: '20px 0px 0px 0px',
        display: "inline-block"
      }}> Pet Shelter </h1>
      <Link style={{
        display: "inline-block",
        float: "right",
        margin: "10px 170px 0px 0px"
      }}
        to={'/pets/new'}> add a pet to the shelter </Link>

      <p style={{ fontSize: "20px", fontWeight: "500" }}> These pets are looking for a good home</p>

      <table id="result-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            petList.length <= 0
              ? <tr>
                <td colSpan="3"> No Pets Available for adoption </td>
              </tr>
              : petList.map((pet, index) => {
                return (
                  <tr key={index}>
                    <td>{pet.name}</td>
                    <td>{pet.type}</td>
                    <td>
                      <button className="edit-delete" onClick={(e) => showDetails(e, pet)}> details </button>
                      |
                      <button className="edit-delete" onClick={(e) => handleEdit(e, pet)} > edit </button>
                    </td>
                  </tr>
                )
              })}
        </tbody>
      </table>
    </div>
  )
}

export default PetshelterHome;
import React, { useState, useEffect } from 'react'
import '../style/style.css'
import axios from 'axios'
import { Link, navigate } from "@reach/router";

const PetDetails = (props) => {
  let { petDetails } = props
  const [displayLikes, setDisplayLikes] = useState(0)

  useEffect(() => {
    setDisplayLikes(petDetails.likes)
  }, [petDetails])

  const handleLikes = () => {

    axios.put('http://localhost:8000/api/pet/like/' + petDetails._id)
      .then(res => {
        console.log(res)
        setDisplayLikes(res.data.updatedPet.likes)
        document.getElementById('like').setAttribute("disabled", "disabled");
        document.getElementById('like').style.backgroundColor = "gray"
      })
      .catch(err => console.log(err))
  }

  const handleAdopt = () => {
    axios.delete('http://localhost:8000/api/pet/delete/' + petDetails._id)
      .then(res => {
        alert("Congratulations for the Adoption !!");
        navigate('/')
      })
      .catch(err => console.log(err))
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
        to={'/'}> back to home </Link>
      <div>
        <p style={{ fontSize: "20px", fontWeight: "500", display: "inline-block" }}> Details about: {petDetails.name} </p>
        <button className="adopt" onClick={handleAdopt} style={{ float: "right", margin: "10px 170px 0px 0px" }}> Adopt {petDetails.name} </button>
      </div>
      <table id="product-details">
        <tbody>
          <tr>
            <td> <b>Pet type: </b> </td>
            <td> {petDetails.type} </td>
          </tr>
          <tr>
            <td> <b>Description: </b></td>
            <td> {petDetails.description} </td>
          </tr>
          <tr>
            <td> <b>Skills:</b> </td>
            <td> {petDetails.skill1}
              <br /> <br /> {petDetails.skill2}
              <br /> <br /> {petDetails.skill3}
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <button id="like" onClick={handleLikes}> Like {petDetails.name} </button>
                <p> {displayLikes} like(s)</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PetDetails
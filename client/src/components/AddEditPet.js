import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { navigate, Link } from "@reach/router";

const AddEditPet = (props) => {

  const { editPet } = props
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [errors, setErrors] = useState([])


  useEffect(() => {
    console.log(editPet);
    if (editPet) {
      setName(editPet.name)
      setType(editPet.type)
      setDescription(editPet.description)
      setSkill1(editPet.skill1)
      setSkill2(editPet.skill2)
      setSkill3(editPet.skill3)
    }
  }, [editPet])

  const addPet = (e) => {
    e.preventDefault()

    axios.post('http://localhost:8000/api/pet', {
      name: name,
      type: type,
      description: description,
      skill1: skill1,
      skill2: skill2,
      skill3: skill3
    })
      .then(res => {
        console.log(res)
        // setAuthor("")
        navigate('/')
      })
      .catch(err => setErrors(err.response.data.errors))
  }

  const handleEditPet = (e) => {
    e.preventDefault()

    axios.put('http://localhost:8000/api/pet/edit/' + editPet._id, {
      name: name,
      type: type,
      description: description,
      skill1: skill1,
      skill2: skill2,
      skill3: skill3
    })
      .then(res => {
        console.log(res)
        // setAuthor("")
        navigate('/')
      })
      .catch(err => setErrors(err.response.data.errors))
  }

  return (
    <div id="form-container">
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

      {!editPet ? <p style={{ fontSize: "20px", fontWeight: "500" }}> Know a pet needing a home? </p>
        : <p style={{ fontSize: "20px", fontWeight: "500" }}> Edit {name} </p>
      }

      <fieldset style={{ border: "2px solid black", padding: '10px 30px 10px 30px', display: "inline-block" }}>
        <form onSubmit={editPet ? handleEditPet : addPet}>

          <div style={{ display: "inline-block" }}>
            <label style={{ display: 'block' }}> Pet Name: </label>
            <input className='contentInput' type="text" onChange={(e) => setName(e.target.value)} value={name} />
            {errors.name ? <p className="error-style"> {errors.name.message} </p> : null}

            <label style={{ display: 'block' }}> Pet Type: </label>
            <input className='contentInput' type="text" onChange={(e) => setType(e.target.value)} value={type} />
            {errors.type ? <p className="error-style"> {errors.type.message} </p> : null}

            <label style={{ display: 'block' }}> Pet Description: </label>
            <input className='contentInput' type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
            {errors.description ? <p className="error-style"> {errors.description.message} </p> : null}
          </div>

          <div style={{ display: "inline-block", marginLeft: "40px", verticalAlign: "top" }}> Skills(Optional):
            <label style={{ display: 'block' }}> Skill1: </label>
            <input className='contentInput' type="text" onChange={(e) => setSkill1(e.target.value)} value={skill1} />

            <label style={{ display: 'block' }}> Skill2: </label>
            <input className='contentInput' type="text" onChange={(e) => setSkill2(e.target.value)} value={skill2} />

            <label style={{ display: 'block' }}> Skill3: </label>
            <input className='contentInput' type="text" onChange={(e) => setSkill3(e.target.value)} value={skill3} />

          </div>

          <input className={editPet ? 'edit' : 'submit'} type="submit" value="" />
        </form>
      </fieldset>
    </div>
  )
}

export default AddEditPet;

// 
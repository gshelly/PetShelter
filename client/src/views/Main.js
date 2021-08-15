import React, {useState, useEffect} from 'react'
import PetshelterHome from '../components/PetshelterHome'

const Main = (props) => {

  const [editPet, setEditPet ] = useState("")
  const [petDetails, setPetDetails ] = useState("")

  useEffect(() => {
    props.setEditPet(editPet)
    props.setPetDetails(petDetails)
    console.log(editPet);
  })

  return (
    <div>
      <PetshelterHome setEditPet={setEditPet} setPetDetails={setPetDetails}/>
    </div>
  )
}

export default Main;
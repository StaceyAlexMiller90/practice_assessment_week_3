import React, { useState } from 'react'

const PatientCard = (props) => {

  const [details, set_details] = useState(false)
  const [buttonLabel, set_buttonLabel] = useState('Show Details')

  const showDetails = () => {
    if(details === false) {
      set_details(true)
      set_buttonLabel('Hide Details')
    } else {
      set_details(false)
      set_buttonLabel('Show Details')
    }
  }

  return (<div>
             <p>Name: {props.firstName} {props.lastName}</p>
             <p>ID: {props.id}</p>
             <p>Date of Birth: {props.dob}</p>
             {details ? <div>
                          <p>Email:{props.email}</p>
                          <p>Phone Number: {props.email}</p>
                          <p>Gender: {props.gender}</p>
                          <ul>Prescriptions: 
                            {props.prescriptions.map((presc, index) => {
                            return <li key={index}>{presc}</li>
                            })}
                          </ul>
                        </div>  
                      : <p></p>}
             <button onClick={showDetails}>{buttonLabel}</button>
          </div>
  )
}

export default PatientCard
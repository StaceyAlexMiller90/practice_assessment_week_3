import React, { useState } from 'react'
import './PatientCard.css'

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

  return (<div className='center mw5 mw6-ns hidden ba mv4'>
             <p className='f4 bg-near-black white mv0 pv2 ph3'>
               Name: {props.firstName} {props.lastName}</p>
              <div className='f6 f5-ns lh-copy measure mv0 pa3 bt'>
             <p className='left'>ID: {props.id}</p>
             <p className='left'>Date of Birth: {props.dob}</p>
             {details ? <div>
                          <p className='left'>Email: {props.email}</p>
                          <p className='left'>Phone Number: {props.phoneNumber}</p>
                          <p className='left'>Gender: {props.gender}</p>
                          <ul className='left'>Prescriptions: 
                            {props.prescriptions.map((presc, index) => {
                            return <li key={index}>{presc}</li>
                            })}
                          </ul>
                        </div>  
                      : <p></p>}
              </div>
             <button onClick={showDetails}>{buttonLabel}</button>
          </div>
  )
}

export default PatientCard
import React, { useState } from 'react'
import SignUpForm from '../components/SignUpForm'

const PatientSignUp = () => {

  const [signupState, setsignupState] = useState('')

  const logNewPatient = (firstName, lastName, email, phone, gender, dob) => {
    
    const newPatient = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phone,
      gender: gender,
      dateOfBirth: dob
    }
    console.log(newPatient)
    setsignupState('Successfully Added!')
  }

  // console.log(props.patients)
  // const [status, set_status] = useState('')

  // const submit = () => {

  // }

  return (
    <div>
        <h1>Patient Sign Up</h1>
        <p>{signupState}</p>
        <SignUpForm log={logNewPatient}/>
    </div>  
  )
}

export default PatientSignUp
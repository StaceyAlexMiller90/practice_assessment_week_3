import React, { useState } from 'react'

const SignUpForm = (props) => {

  const [firstName, set_firstName] = useState('')
  const [lastName, set_lastName] = useState('')
  const [email, set_email] = useState('')
  const [phone, set_phone] = useState('')
  const [gender, set_gender] = useState('')
  const [dob, set_dob] = useState('')

  const submitDetails = (event) => {
    event.preventDefault()
    props.log(firstName, lastName, email, phone, gender, dob)   
  }

  return (
    <div>
      <form onSubmit={submitDetails}>
        <p>First Name: 
        <input name="firstName" 
               type="text"
               placeholder="Enter your first name"
               onChange={e => set_firstName(e.target.value)}
               ></input><br></br>
        </p>
        <p>Last Name:
        <input name="lastName" 
               type="text"
               placeholder="Enter your first name"
               onChange={e => set_lastName(e.target.value)}
               ></input><br></br>
        </p>     
        <p>Email:
        <input name="email" 
               type="email" 
               placeholder="Enter your email"
               onChange={e => set_email(e.target.value)}
               ></input><br></br>
        </p>
        <p>Phone Number: 
        <input name="phone" 
               type="text" 
               placeholder="Enter your phone number"
               onChange={e => set_phone(e.target.value)}
               ></input><br></br>
        </p>
        <p>Gender: 
          <select id="gender" 
                  name="gender"
                  onChange={e => set_gender(e.target.value)}
                  >
            <option value="">Select...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select> <br></br>
        </p>
        <p>Date of Birth: 
        <input name="dob" 
              type="date"
              onChange={e => set_dob(e.target.value)}
              ></input><br></br>
        </p>
        <input type='submit' />
      </form>
    </div>
  )
}

export default SignUpForm
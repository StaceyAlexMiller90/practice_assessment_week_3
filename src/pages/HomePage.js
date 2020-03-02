import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <h1>Welcome to AMS GP's</h1>
        <p>We are Open or Closed</p>
        <p>To make an appointment:</p>
        <p>call: 020 555 5555</p>
        <Link to="/doctorschedule">
          <button>Who is on duty?</button>
        </Link>
        <Link to="/patientsignup">
          <button>I am new patient</button>
        </Link>
    </div>
  )
}

export default HomePage







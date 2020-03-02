import React from 'react'
import { Link } from 'react-router-dom'
import PracticeInfo from '../components/PracticeInfo'

const HomePage = () => {
  return (
    <div>
        <h1>Welcome to AMS GP's</h1>
        <PracticeInfo />
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







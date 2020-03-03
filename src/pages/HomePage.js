import React from 'react'
import { Link } from 'react-router-dom'
import PracticeInfo from '../components/PracticeInfo'
import './HomePage.css'

const HomePage = () => {
  return (
    <div>
        <h1>Welcome to AMS GP's</h1>
        <PracticeInfo />
        <Link to="/doctorschedule">
          <button className='f6 link dim br2 ba ph3 pv2 mb2 dib dark-gray'>Who is on duty?</button>
        </Link>
        <Link to="/patientsignup">
          <button className='f6 link dim br2 ba ph3 pv2 mb2 dib dark-gray'>I am new patient</button>
        </Link>
    </div>
  )
}

export default HomePage







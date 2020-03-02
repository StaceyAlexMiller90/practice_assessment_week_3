import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PracticeInfo from '../components/PracticeInfo'
import DutyTable from '../components/DutyTable'

const DoctorSchedule = () => {

  const [status, set_status] = useState('')
  const [doctors, set_doctors] = useState([])

  useEffect(() => {
    const checkDoctors = async () => {
      set_status('Loading...')
      const response = await axios.get(
        'https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors') 
      set_status('')  
      set_doctors(response.data)
    }
      checkDoctors()
    }, [])


  return (
    <div>
        <h1>Who is on duty?</h1>
        <p>{status}</p>
        <DutyTable
        doctors={doctors}/>
        <PracticeInfo />
    </div>
  )
}

export default DoctorSchedule
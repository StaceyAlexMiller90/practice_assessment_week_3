import React from 'react'
import PracticeInfo from '../components/PracticeInfo'
import DutyTable from '../components/DutyTable'

const DoctorSchedule = (props) => {

  return (
    <div>
        <h1>Who is on duty?</h1>
        <p>{props.status}</p>
        <DutyTable
        doctors={props.doctors}/>
        <PracticeInfo />
    </div>
  )
}

export default DoctorSchedule
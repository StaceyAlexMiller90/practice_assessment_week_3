import React from 'react'
import { useState, useEffect } from 'react'

const PracticeInfo = () => {

const [time, set_time] = useState('')
const [openstatus, set_openstatus] = useState('')

const timer = () => {
  const date = new Date()
  const currentTime = date.getHours() + "." + date.getMinutes()
  set_time(currentTime)
}

useEffect(() => {
  const checkTime = () => {

    timer()
    // Look into addding it to auto update later
    time < 12.30 || time > 16.59 ? set_openstatus('closed')
                                 : set_openstatus('open') 
  }
    checkTime()
  }, [time])

  return (
    <div>
        <p>We are: <strong>{openstatus}</strong></p>
        <p>To make an appointment:</p>
        <p>call: 020 555 5555</p>
    </div>
  )
}

export default PracticeInfo
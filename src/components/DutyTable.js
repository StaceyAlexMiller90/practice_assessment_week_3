import React from 'react'

const DutyTable = (props) => {

  const doctors = props.doctors

  return (
    <div> 
        <table>
          <tr>
            <th>Doctor</th>
            <th>Availability</th>
          </tr>
          {doctors.map(doc => {
            return <tr>
                    <td>{doc.doctor}</td>
                    <td>{doc.onDuty ? 'On Duty' : 'Off Duty'}</td>
                   </tr>
          })}
        </table>
    </div>
  )
}

export default DutyTable
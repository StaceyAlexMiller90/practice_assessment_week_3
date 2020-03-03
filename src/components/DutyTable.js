import React from 'react'

const DutyTable = (props) => {

  const doctors = props.doctors

  return (
    <div> 
        <table>
          <thead>
          <tr>
            <th>Doctor</th>
            <th>Availability</th>
          </tr>
          </thead>
          <tbody>
          {doctors.map(doc => {
            return <tr key={doc.id}>
                    <td>{doc.doctor}</td>
                    <td>{doc.onDuty ? 'On Duty' : 'Off Duty'}</td>
                   </tr>
          })}
          </tbody>
        </table>
    </div>
  )
}

export default DutyTable
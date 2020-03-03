import React from 'react'
import './DutyTable.css'

const DutyTable = (props) => {

  const doctors = props.doctors

  return (
    <div className='pa4'> 
      <div className='overflow-auto'>
        <table className='f6 w-100 mw8 center' cellspacing="0">
          <thead>
          <tr>
            <th className='fw6 bb b--black-20 pb3 pr3 bg-gray'>Doctor</th>
            <th className='fw6 bb b--black-20 pb3 pr3 bg-gray'>Availability</th>
          </tr>
          </thead>
          <tbody className='lh-copy'>
          {doctors.map(doc => {
            return <tr key={doc.id}>
                    <td className='pv3 pr3 bb b--black-20'>{doc.doctor}</td>
                    <td className='pv3 pr3 bb b--black-20'>{doc.onDuty ? 'On Duty' : 'Off Duty'}</td>
                   </tr>
          })}
          </tbody>
        </table>
    </div>
    </div>
  )
}

export default DutyTable
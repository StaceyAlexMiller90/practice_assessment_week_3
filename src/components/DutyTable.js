import React from 'react'

const DutyTable = () => {


  return (
    <div>
        <table>
          <tr>
            <th>Doctor</th>
            <th>Availability</th>
          </tr>
          {/* Map over doctors to return a tr for each */}
          <tr>
            <td>Jill</td>
            <td>Smith</td>
          </tr>
        </table>
    </div>
  )
}

export default DutyTable
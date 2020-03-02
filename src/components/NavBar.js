import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <ul>
      <li>
      <NavLink activeStyle={{fontWeight: "bold",color: "red"}} exact to='/'>Home</NavLink>
      </li>
      <li>
      <NavLink activeStyle={{fontWeight: "bold",color: "red"}} exact to="/doctorschedule">Doctor Schedule</NavLink>
      </li>
      <li>
      <NavLink activeStyle={{fontWeight: "bold",color: "red"}} exact to="/patientsignup/">Patient Sign Up</NavLink>
      </li>
      <li>
      <NavLink activeStyle={{fontWeight: "bold",color: "red"}} exact to="/patientdatabase/">Patient Database</NavLink>
      </li>
    </ul>
  )
}

export default NavBar
import React from 'react';
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

  return (
    <nav className="pa3 pa4-ns">
      <NavLink className='navlink link dim gray f6 f5-ns dib mr3' activeStyle={{fontWeight: "bold",color: "black"}} exact to='/'>Home</NavLink>
      <NavLink className='navlink link dim gray f6 f5-ns dib mr3' activeStyle={{fontWeight: "bold",color: "black"}} exact to="/doctorschedule">Doctor Schedule</NavLink>
      <NavLink className='nalink link dim gray f6 f5-ns dib mr3' activeStyle={{fontWeight: "bold",color: "black"}} exact to="/patientsignup/">Patient Sign Up</NavLink>
      <NavLink className='navlink link dim gray f6 f5-ns dib mr3' activeStyle={{fontWeight: "bold",color: "black"}} exact to="/patientdatabase/">Patient Database</NavLink>
    </nav>
  )
}

export default NavBar
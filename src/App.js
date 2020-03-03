import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import DoctorSchedule from './pages/DoctorSchedule'
import PatientSignUp from './pages/PatientSignUp'
import PatientDatabase from './pages/PatientDatabase'
import axios from 'axios'


function App() {

  const [patients, set_patients] = useState('')

  useEffect(() => {
    const getPatients = async () => {
      const response = await axios.get(
        'https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients')  
      set_patients(response.data)
    }
      getPatients()
    }, [])

    
  const [docStatus, set_docstatus] = useState('')
  const [doctors, set_doctors] = useState([])

  useEffect(() => {
    const checkDoctors = async () => {
      set_docstatus('Loading...')
      const response = await axios.get(
        'https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors') 
      set_docstatus('')  
      set_doctors(response.data)
    }
      checkDoctors()
    }, [])

    // const submit = (firstName, lastName, email, phone, gender, dob) => {
    //   const newPatient = {id: 'tbc', 
    //                       firstName: firstName, 
    //                       lastName: lastName, 
    //                       gender: gender, 
    //                       dateOfBirth: dob, 
    //                       email: email, 
    //                       phoneNumber: phone, 
    //                       prescriptions: [],
    //                       doctorId: 'tbc'}
    //   const updatedPatients =  [[...patients, newPatient]]
    //   console.log(updatedPatients)
    //   set_patients(updatedPatients)
    //   set_patientStatus('Added!')
    // }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/patientdatabase" 
               render={(props) => 
               <PatientDatabase {...props} 
               patients={patients}
               doctors={doctors}/>}
        />
        <Route path="/patientsignup" component={PatientSignUp}/>

        <Route path="/doctorschedule" 
               render={(props) => 
               <DoctorSchedule {...props} 
               doctors={doctors}
               status={docStatus}/>}
        />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

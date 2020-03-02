import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import DoctorSchedule from './pages/DoctorSchedule'
import PatientSignUp from './pages/PatientSignUp'
import PatientDatabase from './pages/PatientDatabase'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/patientdatabase" component={PatientDatabase} />
        <Route path="/patientsignup" component={PatientSignUp} />
        <Route path="/doctorschedule" component={DoctorSchedule} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

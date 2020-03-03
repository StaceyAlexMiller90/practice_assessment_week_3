import React, { useState, useEffect } from 'react'
import PatientCard from '../components/PatientCard'

const PatientDatabase = (props) => {

  const patients = [...props.patients].sort((pat_a, pat_b) => pat_a.lastName.localeCompare(pat_b.lastName))
  const doctors = props.doctors

  const [doctor, set_doctor] = useState('')
  const [patientsForDoc, set_patientsForDoc] = useState([])

  useEffect(() => {
    const filterPatients = () => {
       if (doctor === 'all') {
        set_patientsForDoc(patients)
      } else if(doctor) {
        const filteredPatients = patients.filter(pat => pat.doctorId === Number(doctor))
        set_patientsForDoc(filteredPatients)
      } else {
        set_patientsForDoc([])
      }   
    }
      filterPatients()
    }, [doctor])

  return (
    <div>
        <h1>Patient Database</h1>
        <p>Doctor: 
          <select id="doctor" 
                  name="doctor"
                  onChange={e => set_doctor(e.target.value)}
                  >
            <option value="">Select...</option>
            {doctors.map(doc => {
              return <option key={doc.id}value={doc.id}>{doc.doctor}</option>
            })}
            <option value="all">All</option>        
          </select> <br></br>
        </p>
        {patientsForDoc.map(patient => 
        <PatientCard
          key={patient.id} 
          firstName={patient.firstName}
          lastName={patient.lastName}
          id={patient.id}
          dob={patient.dateOfBirth}
          email={patient.email}
          phoneNumber={patient.phoneNumber}
          gender={patient.gender}
          prescriptions={patient.prescriptions}
        />
        )}
    </div>
  )
}

export default PatientDatabase
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EmployeeData from '../pages/Employee-data'
import NewEmployee from '../pages/New-Employee'

const RoutesURL = () => {
  return (
   <Routes>
    <Route path='/employee-data'  element={ <EmployeeData />}/>
    <Route path='/new-employee'  element={ <NewEmployee />}/>
   </Routes>
  )
}

export default RoutesURL
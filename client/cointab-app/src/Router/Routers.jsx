import React from 'react'
import {Route, Routes} from 'react-router-dom'
import UsersDetailsPage from '../components/UsersDetailsPage'
import HomePage from '../components/HomePage'

function Routers() {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>    
            <Route path="/userDetails" element={<UsersDetailsPage/>}/>    
        </Routes> 
    </>
  )
}

export default Routers

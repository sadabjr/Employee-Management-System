import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
 
    if(loading){
        <div>Loaing...</div>
    }

    return user ? children: <Navigate to="/login"/>
}

export default PrivateRoute
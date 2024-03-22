import React from 'react'
import NavBar from './NavBar'

const Admin = ({Current_user}) => {
  return (
    Current_user === "admin" ?
    <>
    <div>Admin</div>
    </>
    : 
    <>
    <h1>You are not autharized</h1>
    </>
  )
}

export default Admin
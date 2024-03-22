import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
const NavBar = ({Current_user}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/admin" className="nav-link active" aria-current="page">Admin</Link>
        </li>
        <li className="nav-item">
          <Link to="/user" className="nav-link active" aria-current="page">User</Link>
        </li>
      </ul>
      {Current_user}
    </div>
  </div>
</nav>
  )
}

export default NavBar
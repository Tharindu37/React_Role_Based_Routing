import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Admin from './components/Admin'
import User from './components/User'
import NavBar from './components/NavBar'

function App() {

  const Users={
    Registerd:"rigistered",
    Public:"public",
    Admin:"admin"
  }

  const Current_user=Users.Registerd;

  return (
    <BrowserRouter>
    <NavBar Current_user={Current_user}/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/admin' element={<Admin Current_user={Current_user}/>}></Route>
      <Route path='/user' element={<User Current_user={Current_user}/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

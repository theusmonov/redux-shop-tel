
import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Posts from './components/Posts'
import Lognav from './components/Lognav'
import { Route, Routes } from 'react-router'
import ProtectedRoutes from './ProtectedRoutes'

function App() {
  const [user, setUser] = useState(null)
  


  return (
    <div className='continer'>
      <Routes >
         <Route path='/'  element={<Lognav/>}/>
         <Route path='/login' element={<Login setUser={setUser}/>}/>
         <Route path='/postitem'  element={
         <ProtectedRoutes user={user}>
            <Navbar />
            <Posts  user={user}/>
         </ProtectedRoutes>}/>
      </Routes>

    
      <h1 className='welcome'>WELCOME</h1>
    </div>
  )
}

export default App


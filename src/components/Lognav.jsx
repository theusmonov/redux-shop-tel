import React from 'react'
import { Link } from 'react-router-dom'

export default function Lognav() {
  return (
    <div className='lognav'>
         <h2>Telbazar</h2>
       <button className='btnlog'>
        <Link to={'/login'}>
            Login
        </Link>
       </button>
    </div>
    
  )
}

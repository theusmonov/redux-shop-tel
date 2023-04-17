import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router'

export default function Login({setUser}) {






const [name, setName] = useState()
const [password, setPassword] = useState()
const navigate = useNavigate()



const handleSubmit = (e) => {
   e.preventDefault()
   if(!name || !password) return;
   setUser({name: name, password: password})
   navigate('/postitem')

}

  return (
    <div className='login'>
        <form onSubmit={handleSubmit}> 
            <input type="text" placeholder='Name' className='inpname'onChange={(e) => setName(e.target.value)} id='name' />
            <br /> <br />
            {/* <input type="email"  placeholder='Your email' className='inpemail' ref={email}/> */}
            <br />
            <input type="password"  placeholder='Password' className='inppas' onChange={(e) => setPassword(e.target.value)} id='password'/>
            <div className='btns'>
              <br />
              {/* <button  className='btn1'>Sign In</button> */}
              <button type='submit' className='btn2'>Login</button>
            </div>
        </form>
    </div>
  )
}

import React from 'react'
import {useNavigate} from 'react-router-dom'

const Logedin = () => {
    const navigate = useNavigate();
  return (
    <div className='d-flex justify-center'>
        <h1>Logged In Successfully</h1>
        <button onClick={()=>navigate('/login')}>Log Out</button>
    </div>
  )
}

export default Logedin
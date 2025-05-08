import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Email.css'

export default function Email() {
  const [email, setEmail] = useState()
  const [showerrorText, setshowerrorText] = useState(false)
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const Submit = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const correctEmail = emailPattern.test(email)

    if(!correctEmail) {
      setshowerrorText(true)
      return
    }

    navigate('./confirm', {state: {email}} )
  }
  
  return (
    <div className='Email'>
      <label > Email Address </label> <br />
      <input type='email' value={email} onChange={handleEmail} placeholder='email@company.com' />
      {showerrorText && <p> Please enter a correct email address </p>}
      <button onClick={Submit}> Subscribe to monthly newsletter </button>
    </div>
  )
}

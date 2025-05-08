import React from 'react'
import { useLocation } from 'react-router-dom'
import './SecondPage.css'

export default function SecondPage() {
  const location = useLocation()
  const email = location.state?.email;
  
  return (
    <div className='Confirm'>
      <img src='/icon-success.svg' alt='confirmation successful' />
      <h1> Thanks for subscribing!</h1>
      <p> A confirmation email has been sent to <strong> {email} </strong>. Please open it and click the button inside to confirm your subscription  </p>
      <button> Dismiss message </button>
    </div>
  )
}

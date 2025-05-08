import React from 'react'
import "./MainPage.css"
import IndUpdateCard from './Components/IndUpdateCard'
import Email from './Components/Email'

export default function MainPage() {
  return (
    <div className='MainPage'>
      <div className='MainPageDetails'>
        <h1> Stay updated! </h1>
        <p> Join 60,000+ product managers receiving monthly updates on:</p>
        <IndUpdateCard />
        <Email />
      </div>

      <div className='MainPageImage'>
        <div className='Image'></div>
      </div> 
    </div>
  )
}

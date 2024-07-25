import React from 'react'
import { Link } from 'react-router-dom'
import './Mypage.css'

export default function Mypage() {
  return (
    <div>
      <div className='mainclass' style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <img src='https://img.freepik.com/free-vector/thank-you-concept-illustration_114360-12887.jpg?t=st=1720612728~exp=1720616328~hmac=23f10cd90e35a891a3acb2b58401d8d19a0440ffcdbf6688399abea50489c11a&w=740' style={{maxWidth:'300px'}}></img>
        <h1>Thank You! For Your Submission</h1>
      </div>
    </div>
  )
}

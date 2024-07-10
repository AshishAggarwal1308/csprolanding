import React from 'react'
import { Link } from 'react-router-dom'

export default function Mypage() {
  return (
    <div>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <img src='https://img.freepik.com/free-vector/thank-you-concept-illustration_114360-12887.jpg?t=st=1720612728~exp=1720616328~hmac=23f10cd90e35a891a3acb2b58401d8d19a0440ffcdbf6688399abea50489c11a&w=740' style={{maxWidth:'300px'}}></img>
        <h1>Thank You! For Your Submission</h1>
        <button style={{padding:'10px 20px', border:'1px solid #AE1D3C', borderRadius:'8px', backgroundColor:'transparent'}} ><Link to= "https://csprotechnology.com" style={{textDecoration:'none', padding:'20px 20px'}}>Visit Our Website</Link></button>
      </div>
    </div>
  )
}

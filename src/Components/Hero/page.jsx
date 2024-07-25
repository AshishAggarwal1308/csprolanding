import React from 'react'
import './style.css'
import FormPropsTextFields from '../Contact/page'
function HeroSection() {
  return (
    <div className='mainsection'>
      <div className='content'>
        <h1>Transform Your Business with <span style={{ color: '#AE1D3C' }}>CSPRO Technology's </span>Leading IT Services</h1>
        <p>At CSPRO Technology, we specialize in delivering cutting-edge IT services designed to propel your business forward. Our team of experts is dedicated to providing innovative solutions that enhance efficiency, boost productivity, and drive growth.</p>
        <div className='buttongroup'>
          <p><span style={{fontSize:'24px', color: '#AE1D3C', fontWeight:'600'}}>15+ </span><br></br><span style={{fontSize:'16px', color: '#757575'}}>Servives</span></p>
          <p><span style={{fontSize:'24px', color: '#AE1D3C', fontWeight:'600'}}>250+ </span><br></br><span style={{fontSize:'16px', color: '#757575'}}>Clients Worldwide</span></p>
        </div>
      </div>

      <FormPropsTextFields/>


    </div>
  )
}

export default HeroSection
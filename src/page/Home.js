import React from 'react'
import './App.css'
import HeroSection from '../Components/Hero/page'
import QuiltedImageList from '../Components/Whyus/page'
import TickerTape from '../Components/Ticker/page'
import MultiActionAreaCard from '../Components/Service/page'
import Accordion from '../Components/Faqs/page'
import Ticker from '../Components/Certificate/page'

function Home() {


  return (
    <div className='main'>

      <div className='maincontainer'>
        <img src='logo.png' style={{ width: '150px', padding: '20px 0px 0px 40px', borderRadius: '8xpx' }} />
      </div>
      <HeroSection />
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ padding: '40px' }}>Our <span style={{ color: '#AE1D3C' }}>Featured Partners</span></h1>
        <TickerTape />
      </div>

      <div className='grid-why'>
        <div className='why-content'>
          <h1>Why <span style={{ color: '#AE1D3C' }}>Choose US?</span></h1>
          <p>When it comes to IT services, CSPRO Technology stands out as a leader in the industry. Our commitment to excellence, innovative solutions, and customer-centric approach make us the ideal partner for your business.</p>
          <ul>
            <li>Proven Expertise and Experience</li>
            <li>Comprehensive IT Services</li>
            <li>Customer-Centric Approach</li>
            <li>Innovative Solutions</li>
            <li>Cost-Effective Services</li>
          </ul>
        </div>
        <QuiltedImageList />
      </div>
      <MultiActionAreaCard />
      <div style={{ padding: '40px' }}>
        <h1>Our <span style={{ color: '#AE1D3C' }}>Certifications</span></h1>
      </div>
      <Ticker />
      <div className='faqs'>
        <h1>Read Our<span style={{ color: '#AE1D3C' }}>FAQ's</span></h1>
        <p>To help you find the answers you need quickly and easily, we've compiled a comprehensive list of frequently asked questions. From detailed information about our services to insights on how we can help your business grow, our FAQs cover it all.</p>
        <Accordion />
      </div>

    </div>
  )
}

export default Home
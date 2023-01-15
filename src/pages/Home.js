import React from 'react'
import devImg from '../images/4884785.jpg'

function Home() {
  return (
    <div className="alert alert-dark mt-5" role="alert">
    <img src="./profile.png" alt="profile" style={{width:200, borderRadius:'50%'}}/> 
    <p className='mt-2' style={{fontSize:40}}><strong>Wassim abdennadher</strong></p> 
    <p>Hello, my name is <strong>Wassim Abdennadher</strong> and i'am a <strong>FullStack</strong> Web developer</p>
    <img src={devImg} alt="Dev" style={{width:'100%', borderRadius:'5px'}}/>
    </div>
  )
}

export default Home
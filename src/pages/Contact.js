import React from 'react'

function Contact() {
  const contactInfo = {
    mail: 'Wassim.abd@gmail.com',
    phoneNumber: '+216 58 48 48 11',
    adress: 'Route mharza km 3 cité el habib Sfax, Tunisia'
  }
  return (
    <div className='alert alert-secondary mt-5  fw-bold '>
      <div>
        <i className="bi bi-envelope-at"> </i>
        <span>: {contactInfo.mail}</span>
      </div>
      <br />
      <div>
        <i className="bi bi-telephone-x-fill"> </i>
        <span>: {contactInfo.phoneNumber}</span>
      </div>
      <br />
      <div>
        <i className="bi bi-geo-alt-fill"> </i>
        <span>: {contactInfo.adress}</span>
      </div>
    </div>
  )
}

export default Contact
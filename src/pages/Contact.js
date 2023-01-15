import React from 'react'

function Contact() {
  const contactInfo = {
    mail: 'Wassim.abd@gmail.com',
    phoneNumber: '+216 58 48 48 11',
    adress: 'Route mharza km 3 cité el habib sfax, Tunisia'
  }
  return (
    <div className='alert alert-secondary mt-5 fs-5 fw-bold '>
      <div>
        <i className="bi bi-envelope-at"></i>
        <p>: {contactInfo.mail}</p>
      </div>
      <div>
        <i className="bi bi-telephone-x-fill"></i>
        <p>: {contactInfo.phoneNumber}</p>
      </div>
      <div>
        <i className="bi bi-geo-alt-fill">
        </i><p>: {contactInfo.adress}</p>
      </div>
    </div>
  )
}

export default Contact
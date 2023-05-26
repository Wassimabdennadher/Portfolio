import React from 'react'

function Projects() {
  const projects = [
    {
      id: 1,
      pName: 'Business land',
      ghubLink: 'https://wassimabdennadher.github.io/Business-land/',
      description: 'A simple web page created with HTML and CSS '
    },
    {
      id: 2,
      pName: 'Pricing',
      ghubLink: ' https://wassimabdennadher.github.io/pricing/',
      description: 'A simple pricing web page created with HTML and CSS '
    },
    {
      id: 3,
      pName: 'Mercado project',
      ghubLink: 'https://wassim-abdennadher-mercado.vercel.app/items',
      description: 'A full react project with a frontend and backend parts '
    },
    {
      id: 4,
      pName: 'Fashion Model (Text Scramble)',
      ghubLink: 'https://wassimabdennadher.github.io/Fashionmodel',
      description: 'HTML, CSS and Javascript project including scramble text'
    },
    {
      id: 5,
      pName: 'Fashion Model (Text Scramble)',
      ghubLink: 'https://e-commerce-seven-rho.vercel.app/',
      description: 'Create a new E-commerce website'
    }
  ]
  return (
    <div className='row mt-5'>
      {
        projects.map(item => (
          <div class="card col-12 col-lg-6 mt-2 " key={item.id}>
            <div class="card-body ">
              <h5 class="card-title">{item.pName}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{item.pName} project</h6>
              <p class="card-text">{item.description}</p>
              <a href={item.ghubLink} class="card-link" target="_blank" rel="noreferrer">Go check</a>

            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Projects
import React from 'react'
import underConstruction from '../images/under-construction.png'

const Projects = () => (
  <div>
    <h1>Projects</h1>
    <img style={{ height: '100%', width: '100%' }} src={underConstruction} />

    <form name="test" netlify>
      <p>
        <label>Name <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Email <input type="email" name="email" /></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
)

export default Projects

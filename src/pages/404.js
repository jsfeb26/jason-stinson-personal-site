import React from 'react'
import image from '../images/ndt-404.png'

const NotFoundPage = () => (
  <div style={{ textAlign: 'center' }}>
    <img style={{ width: '485px' }} src={image} />
    <h2>WHOAAA!</h2>
    <p>It looks like this page doesn’t exist… in this universe.</p>
  </div>
)

export default NotFoundPage

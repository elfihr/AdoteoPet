import React from 'react'
import Background from '../assets/background.webp'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div className='home' style={{ backgroundImage: `url(${Background})`}}>
     <div className='home-Container' > 
        <h1>Adote um Pet</h1>
        <p>Não é apenas um pet</p>
        <p>mas uma mudança de vida</p>
        <Link to='/about'><button>Conheça</button></Link>
      </div>
    </div>
  )
}

export default home
import React from 'react'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navMenu'>
      <h3 className='logo'>FihrPetLover</h3>
      <input type='checkbox' id='check'></input>
      <label for='check' className='iconMenu' >
        <ReorderIcon id='menu-icon' fontSize='2rem' />
        <CloseIcon id='close-icon'  fontSize='2rem'/>
      </label>
      <div className='navBar'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>Sobre</Link>
        <Link to={'/contact'}>Contato</Link>
      </div>
    </div>
  )
}

export default Navbar
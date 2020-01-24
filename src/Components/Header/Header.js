import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import shelfie from '../../assets/shelfie_icon.png'

export default function Header(props){
  return(
    <header>
      <div className="left-header">
        <div id='shelfie'>
          <img src ={shelfie} id='shelfie-icon' />
          <h1>SHELFIE</h1>
        </div>
        <div>
          <Link to='/' className='header-buttons'>Dashboard</Link>
          <Link to='/form' className='header-buttons'>Create New</Link>
        </div>
      </div>
    </header>
  )
}
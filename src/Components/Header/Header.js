import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'

export default function Header(props){
  return(
    <header>
      <Link to='/'>Dashboard</Link>
      <Link to='/form'>Create New</Link>
    </header>
  )
}
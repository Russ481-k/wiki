import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({title}) {
    console.log(title)
  return (
    <div className='header'>
        <Link to='/'><h2>GlobalKnowledge</h2></Link>
        <h1>About our Contents</h1>
    </div>
  )
}

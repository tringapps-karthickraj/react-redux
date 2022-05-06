import React from 'react'
import '../assets/header.css'
import { useSelector } from 'react-redux'
export default function Header() {
  const name=useSelector((state)=>state.web.name)
  return (
    <div className='header'>
        <div className='headerin'>Welcome {name}</div>
    </div>
  )
}

import React from 'react'
import Navbars from './Navbars'
import { Hero } from './Hero'
import { Github } from './Github'

export const Home = () => {
  return (
    <div >
      <Navbars/>
      <Hero/>
      <Github/>
    </div>
  )
}

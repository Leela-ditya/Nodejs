import React from 'react'
import design from "./login.module.css"
import { Link } from 'react-router-dom'
import style from "./sign.module.css"

const Home = () => {
  return (
    <section id={design.nav}>
        <Link to="/signin">Sign-In</Link>
        <Link to="/signup">Sign-Up</Link>
    </section>
  )
}

export default Home
import React from "react"
import style from "./sign.module.css"
import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const Signin =()=>{

        let [email] = useState()
        let [password] = useState()

        let navigate = useNavigate()


        let login = (e)=>{
            e.preventDefault()
            let data = {email, password}
            axios.post('http://localhost:5000/login',data)
            .then((res)=>{
                if (res.data.status === 200) {
                    alert(res.data.message)
                    navigate('/home')
                } else {
                    alert(res.data.message)
                }
            })
        }
    return(
        <section id={style.signin}>
            {/* <h1>SIGN - IN</h1> */}
            <form action="" className="signinform">
                <label htmlFor="emailId" >Email</label>
                <input type="email" name="emailId" placeholder="Enter Your Email ID" required/> <br />
                <label htmlFor="password" >Password</label>
                <input type="password" id="password" name="password" placeholder="Password" required/> <br />
                <button onClick={login}>Login</button>
                <Link to="/signup">New User</Link>
            </form>
        </section>
    )
}

export default Signin
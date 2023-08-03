import React from "react"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import style from "./sign.module.css"
import { Link } from "react-router-dom"

const Signup =()=>{

    let [firstName, setfirstName] = useState();
    let [lastName, setlastName] = useState();
    let [email, setemail] = useState();
    let [password, setpassword] = useState();
    let [confirmpassword, setconfirmPassword] = useState();

    let firstData = (e)=>{
        setfirstName(e.target.value)
    }
    let lastData = (e)=>{
        setlastName(e.target.value)
    }
    let emailData = (e)=>{
        setemail(e.target.value)
    }
    let passwordData = (e)=>{
        setpassword(e.target.value)
    }
    let confirmpasswordData = (e)=>{
        setconfirmPassword(e.target.value)
    }

    let navigate = useNavigate();

    let submission =(e)=>{
        e.preventDefault()
        let upload = {firstName,lastName,email,password,confirmpassword}
        if (firstName && lastName && email && (password === confirmpassword) ) {
            axios.post('http://localhost:5000/register', upload)
            .then((res)=>{
                alert(res.data.message)
                navigate('/')
            })
        } else {
            alert('Invalid Credentials')
        }
        console.log(upload);
    }

    return(
        <section id={style.signup}>
            {/* <h2>Sign Up</h2> */}
            <form action="" className="signupfrom">
                <label htmlFor="firstName">FirstName</label>
                <input type="text" name="firstName" placeholder="FirstName" required onChange={firstData}/> <br />
                <label htmlFor="lastName">LastName</label>
                <input type="text" name="lastName" placeholder="LastName" required onChange={lastData}/> <br />
                <label htmlFor="emailId">Email</label>
                <input type="email" name="emailId" placeholder="Enter Your Email ID" required onChange={emailData}/> <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" required onChange={passwordData}/> <br />
                <label htmlFor="password"> Confirm Password</label>
                <input type="password" name="password" placeholder=" Confirm Password" required onChange={confirmpasswordData}/> <br />
                <button onClick={submission}>Sign Up</button>
                <Link to="/signin">Already a User</Link>
            </form>
        </section>
    )
}

export default Signup
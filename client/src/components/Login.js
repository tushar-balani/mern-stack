import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'



const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const history = useHistory()

    const loginUser = async (e) =>{
        e.preventDefault()
        const res =  await fetch('/signin', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email,
                password
            })
        })

        const data = res.json()
        if(res.status ===400 || !data ){
            window.alert("Invalid Credentials")
        }
        else {
            window.alert("Login Succesful")
            history.push("/")
        }

    }

    return (
        


        <>
          <section className="signup">
            <div className='container mt-5' >
                <div className = "signup-content">
                    <div className="signup-form">
                        <h2 className= "form-title">
                            Sign up
                        </h2>
                        <form method = "POST" className="register-form" id = "register-form">
                            

                            
                            <div className="form-group">
                                <label htmlFor="email"></label>
                                <input type= "email" name="email" id="email" autoComplete="off"
                                value = {email}
                                onChange ={(e) =>setEmail(e.target.value)} 
                                placeholder = 'Your email'
                                />  
                                
                            </div>
                            
                            
                            <div className="form-group">
                                <label htmlFor="password"></label>
                                <input type= "password" name="password" id="password" autoComplete="off"
                                value = {password}
                                onChange = { (e)=> setPassword(e.target.value)}
                                placeholder = 'Your password'
                                />
                                
                            </div>
                            
                                
                           
                            <div className= "form-group form-button">
                                <input type ="Submit" name="signin" id="signin" className="form-submit" 
                                value = "Log in " 
                                onClick = {loginUser} />
                            </div>
                            <div className = "center-align">
                                <NavLink to = "/signup">I am new here</NavLink>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
          </section>
        </>
    )
}

export default Login

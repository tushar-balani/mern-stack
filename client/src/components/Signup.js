import React , {useState} from 'react'
import { NavLink , useHistory } from 'react-router-dom'

const Signup = () => {

    const history = useHistory()

    const [user,setUser] = useState({
        name:"",email:"",phone:"",work:"", password:"",cpassword:""
    })

    let name,value

    const handleInputs = (e)=>{
        console.log(e)
        name = e.target.name
        value = e.target.value

        console.log(name)
        console.log(value)

        setUser({...user,[name]:value})
    }

    const PostData = async (e) =>{
        e.preventDefault();
        const {name,email,phone,work, password,cpassword} =user
        const res = await  fetch("/register" , {
            method :"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name,email,phone,work, password,cpassword
            })

            
            
        })

        const data = await res.json()

        if(res.status === 422 || !data){
            window.alert("Invalid Registration")
            console.log("Invalid Registration")
        }else {
            window.alert("Registration successful")
            console.log("Registration successful")

            history.push("/login")
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
                        <form method= "POST" className="register-form" id = "register-form">
                            <div className="form-group">
                                <label htmlFor="name"></label>
                                <input type= "text" name="name" id="name" autoComplete="off" 
                                value = {user.name}
                                onChange = {handleInputs}
                                placeholder = 'Your name'
                                />

                            </div>
                            <div className="form-group">
                                <label htmlFor="email"></label>
                                <input type= "email" name="email" id="email" autoComplete="off" 
                                value = {user.email}
                                onChange = {handleInputs}
                                placeholder = 'Your email'
                                />
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone"></label>
                                <input type= "number" name="phone" id="phone" autoComplete="off" 
                                value = {user.phone}
                                onChange = {handleInputs}
                                placeholder = 'Your phone'
                                />
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="work"></label>
                                <input type= "text" name="work" id="work" autoComplete="off" 
                                value = {user.work}
                                onChange = {handleInputs}
                                placeholder = 'Your Proffesion'
                                />
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"></label>
                                <input type= "password" name="password" id="password" autoComplete="off" 
                                value = {user.password}
                                onChange = {handleInputs}
                                placeholder = 'Your password'
                                />
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpassword"></label>
                                <input type= "password" name="cpassword" id="password" autoComplete="off" 
                                value = {user.cpassword}
                                onChange = {handleInputs}
                                placeholder = 'Confirm Your password'
                                />
                                
                            </div>
                            <div className= "form-group form-button">
                                <input type ="Submit" name="signup" id="signup" className="form-submit" 
                                value = "register"
                                onClick ={PostData} />
                            </div>
                            <div className = "center-align">
                                <NavLink to = "/login">I am alredy registered</NavLink>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
          </section>
        </>
    )
}

export default Signup

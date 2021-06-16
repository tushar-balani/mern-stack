import React , {useEffect} from 'react'
// import { useHistory } from 'react-router-dom'

import doge from '../images/doge.jpg'

const About = () => {
    
    // const history = useHistory();



    const callAboutPage = async () =>{

        try{
            const res = await fetch('/about',{
                method : "GET",
                headers :{
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            })

            const data = await res.json()
            console.log(data)
            console.log(res.data);
            console.log(res);
 
            if( res.status !== 200){
                const error = new Error(res.error)
                
                throw error
                
            }
        }catch(e){
            console.log(e)
             
            // history.push('/signup')
        }

    }

    useEffect(() => {
        callAboutPage();
       
    }, [])



    return (
            


        <>
        <div className = "container carousel">
        <div className= "col-md-4">
                        <img className="img-box" src={doge} alt = "profile" ></img>
                    </div>
            <form method = "GET">
                <div >
                    
                    <div >
                        <div>
                            <h5 className= "center-align">
                                Tushar Balani
                            </h5>
                            <h6 className = "center-align">
                                   Student 
                            </h6>
                            <p></p>
                            <p></p>
                            <div >
                                <div id = "home"  aria-labelledby="hemlo">
                                    <div >
                                        <div className = "center-align text-style" >
                                            <label > User Id</label>
                                        </div>

                                        <div className = "center-align ">
                                            <p>4563579298462</p>
                                        </div>
                                        <p></p>

                                        
                                        <div className = "center-align text-style">
                                            <label >Name</label>
                                        </div>

                                        <div className = "center-align ">
                                            <p>Tushar Balani</p>
                                        </div>
                                        <p></p>
                                        <div className = "center-align text-style">
                                            <label > Email</label>
                                        </div>

                                        <div className = "center-align ">
                                            <p>tusharbalani@gmail.com</p>
                                        </div>
                                        <p></p>

                                        <div className = "center-align text-style">
                                            <label > Phone</label>
                                        </div>

                                        <div className = "center-align ">
                                            <p>4563579298462</p>
                                        </div>
                                        <p></p>
                                        <div className = "center-align text-style">
                                            <label > Proffesion</label>
                                        </div>

                                        <div className = "center-align ">
                                            <p>student</p>
                                        </div>
                                        <p></p>

                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    

                </div>
            </form>
        </div>

        </>
    )
}

export default About

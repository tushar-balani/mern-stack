import React from 'react'

const Contact = () => {
    return (
        <>
           <section className="signup">
            <div className='container mt-5' >
                <div className = "signup-content">
                    <div className="signup-form">
                        <h2 className= "form-title">
                            Contact us
                        </h2>
                        <form className="register-form" id = "register-form">
                            <div className="form-group">
                                <label htmlFor="name"></label>
                                <input type= "text"  id="contact_form_name" autoComplete="off"
                                placeholder = 'Your name' required = "true"
                                />

                            </div>
                            <div className="form-group">
                                <label htmlFor="email"></label>
                                <input type= "email"  id="contact_form_email" autoComplete="off"
                                placeholder = 'Your email' required="true"
                                />
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone"></label>
                                <input type= "number" name="contact_form_phone" id="phone" autoComplete="off"
                                placeholder = 'Your phone'
                                required = "true"
                                />
                                
                            </div>
                            <div className="form-group">
                                <textarea placeholder=" Message..." cols = "30" rows="10" >

                                </textarea>
                                </div>
                                
                           
                            <div className= "form-group form-button">
                                <input type ="Submit" name="signup" id="signup" className="form-submit" 
                                value = "Send" />
                            </div>
                            
                        </form>


                    </div>
                </div>

            </div>
          </section>
        </>
    )
}

export default Contact

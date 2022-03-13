import React from 'react'
import './Contact.css'
import emailIcon from "../../assets/icons8-gmail-logo.gif"

const Contact = () => {
    return (
        <div className="main-container">
            
            <div className="inner-container">

                <div className="mail-icon-container">
                    <img src={emailIcon}/>
                </div>

                <div className="form-container">
                    <form autoComplete='off' action="">
                    <h2>GET IN TOUCH!
                       {" "} <i className="fas fa-lg fa-heart"></i>
                    </h2>
                    <input name="name" type="text" placeholder='Name' />
                    <input name="email" type="text" placeholder='Email' />
                    <input name="subject" type="text" placeholder='Subject' />
                    <textarea style={{resize: "none", overflow: "auto"}} placeholder='Message' name="message" cols="30" rows="5"></textarea>
                    <input type="submit" value="Submit" />
                    </form>
                </div>
                
            </div>

        </div>
    )
}

export default Contact

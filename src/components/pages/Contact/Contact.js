import React, {useState}from "react";
import emailjs from 'emailjs-com';
import './Contact.css'

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit= () =>{
        if(name && email && message){
            const serviceId = 'service_brosef'
            const templateId= 'template_auvkyma'
            const userId = 'user_wPJsSRY6sSVEriRwfqSGk'
            const templateParams = {
                name, email, message
            }
            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(res => console.log(res))
                .then(err => console.log(err));

            setName('')
            setEmail('')
            setMessage('')
            setEmailSent(true);
        }else{
            alert('Please fill in all fields correctly');
        }
    }

    const isValidEmail = (email) =>{
        const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        ;

        return regex.test(String(email).toLowerCase());
    }


    return (
        <div id='contact-me'>
            <input id='messageName' className='row' type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
            <input id='messageEmail'className='row' type="email" placeholder="Your email address" value={email} onChange={e => isValidEmail(e.target.value)? setEmail(e.target.value) : setEmail(undefined)} />
            <textarea id='message' className='row' placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <button id='messageBtn' className='row' onClick={submit}>Send Message</button>

            <span id='messageConfirm' className='row'>{emailSent? 'Thank you for your message, we will be in touch in no time!': null}</span>
        </div>
    );
}

export default Contact
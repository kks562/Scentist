import React from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "6d7e43d6-68e7-4fe7-88a8-d003f1d1e083");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };

    const navigate = useNavigate();

    const home = () => {
        navigate('/');
    };

    return (
        <div>
            <section className="contact">
                <ion-icon 
                    name="arrow-back" 
                    style={{ fontSize: '50px', position: 'absolute', left: '10px', top: '10px' }} 
                    onClick={home}
                />
                <form onSubmit={onSubmit}>
                    <h2>Contact Form</h2>
                    <div className="input-box1">
                        <label>Full Name</label>
                        <input type="text" className="field" placeholder='Enter Name' name='name' required />
                    </div>
                    <div className="input-box1">
                        <label>Email Address</label>
                        <input type="email" className="field" placeholder='Enter Email' name='email' required />
                    </div>
                    <div className="input-box1">
                        <label>Your Message</label>
                        <textarea name="message" className="field mess" placeholder='Enter Message' required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </section>
        </div>
    );
};

export default Contact;

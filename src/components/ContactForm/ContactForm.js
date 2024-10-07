import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { db } from '../../firebase'; // Go up two directories to reach firebase.js

const ContactForm = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator());

    const changeHandler = (e) => {
        setForms({ ...forms, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();

            // Save the form data to Firestore
            try {
                await db.collection('contactFormSubmissions').add(forms);
                alert('Your message has been sent successfully!');
                
                // Reset the form
                setForms({
                    name: '',
                    email: '',
                    subject: '',
                    phone: '',
                    message: ''
                });
            } catch (error) {
                console.error('Error saving data to Firestore:', error);
            }
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={submitHandler} className="contact-validation-active">
            <div>
                <input
                    type="text"
                    name="name"
                    value={forms.name}
                    onChange={changeHandler}
                    placeholder="Your Name"
                />
                {validator.message('name', forms.name, 'required|alpha_space')}
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    value={forms.email}
                    onChange={changeHandler}
                    placeholder="Your Email"
                />
                {validator.message('email', forms.email, 'required|email')}
            </div>
            <div>
                <input
                    type="phone"
                    name="phone"
                    value={forms.phone}
                    onChange={changeHandler}
                    placeholder="Your Phone"
                />
                {validator.message('phone', forms.phone, 'required|phone')}
            </div>
            <div>
                <select
                    name="subject"
                    value={forms.subject}
                    onChange={changeHandler}
                >
                    <option value="">Select a Service</option>
                    <option value="Dental Care">Dental Care</option>
                    <option value="Pharmacology">Pharmacology</option>
                    <option value="Orthopedic">Orthopedic</option>
                </select>
                {validator.message('subject', forms.subject, 'required')}
            </div>
            <div>
                <textarea
                    name="message"
                    value={forms.message}
                    onChange={changeHandler}
                    placeholder="Message"
                ></textarea>
                {validator.message('message', forms.message, 'required')}
            </div>
            <button type="submit">Get in Touch</button>
        </form>
    );
};

export default ContactForm;

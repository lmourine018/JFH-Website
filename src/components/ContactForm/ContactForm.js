// src/components/ContactForm/ContactForm.js

import React, { useState } from 'react';
import { db } from '../firebase'; // Adjust the path if necessary

// Import Firestore functions
import { collection, addDoc } from 'firebase/firestore';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Reference to the 'contacts' collection
      const contactsCollection = collection(db, "contacts");

      // Add a new document with form data
      const docRef = await addDoc(contactsCollection, formData);

      // Success feedback
      alert("Form submitted successfully!");
      setFormData({ name: '', email: '', message: '' });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error saving data to Firestore: ", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
      />
      
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
      ></textarea>
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;

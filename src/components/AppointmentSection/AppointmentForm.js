// src/components/AppointmentForm/AppointmentForm.js

import React, { useState } from 'react';
import { db } from '../firebase'; // Adjust the path if necessary

// Import Firestore functions
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '', // You can rename this to 'appointmentDetails' if preferred
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validate({ [name]: value });
  };

  // Validate form fields
  const validate = (fieldValues = formData) => {
    let tempErrors = { ...errors };

    if ('name' in fieldValues)
      tempErrors.name = fieldValues.name ? '' : 'Name is required';
    if ('email' in fieldValues) {
      tempErrors.email = fieldValues.email ? '' : 'Email is required';
      if (fieldValues.email)
        tempErrors.email = /\S+@\S+\.\S+/.test(fieldValues.email)
          ? ''
          : 'Email address is invalid';
    }
    if ('message' in fieldValues)
      tempErrors.message = fieldValues.message ? '' : 'Message is required';

    setErrors(tempErrors);

    // Check if all fields are valid
    return Object.values(tempErrors).every((x) => x === '');
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setSubmissionError(null);

    if (validate()) {
      try {
        // Reference to the 'appointments' collection
        const appointmentsCollection = collection(db, "appointments");

        // Add a new document with form data
        const docRef = await addDoc(appointmentsCollection, {
          ...formData,
          timestamp: serverTimestamp(),
        });

        // Success feedback
        setSubmitted(true);
        handleReset();
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error saving data to Firestore: ", error);
        setSubmissionError("There was an error submitting the form. Please try again.");
      }
    }
  };

  // Reset form fields
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="wrapper">
        {/* Name Field */}
        <div className="form_item">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="form_item">
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Message Field */}
        <div className="form_item">
          <label>Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="form_item">
          <button type="submit">Submit</button>
        </div>

        {/* Submission Feedback */}
        {submitted && <div className="success_message">Form submitted successfully!</div>}
        {submissionError && <div className="error_message">{submissionError}</div>}
      </div>
    </form>
  );
};

export default AppointmentForm;

import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}))
  }

  const validate = () => {
    let validateErrors = {};

    if (!formData.username) validateErrors.username = 'Username is Required';
    if (!formData.email) validateErrors.email = 'Email is Required';
    if (!formData.password) validateErrors.password = 'Password is Required';

    return validateErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validate();

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    } else {
      console.log('Form Data: ', formData);
      
    }
  }

  
  return (
    <div className='signup-container'>
      <h2>Sign up Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>UserName</label>
          <input
            type='text'
            name='username'
            value={FormData.username}
            onChange={handleChange}
            placeholder='Enter Your Username' 
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            type='email'
            name='email'
            value={FormData.email}
            onChange={handleChange}
            placeholder='Enter Your Email' 
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            name='password'
            value={FormData.password}
            onChange={handleChange}
            placeholder='Enter Your Password' 
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignupForm

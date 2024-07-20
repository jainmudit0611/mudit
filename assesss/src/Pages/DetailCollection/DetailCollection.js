import React, { useState } from 'react';

const DetailCollection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [contact, setContact] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        newErrors.email = 'Email is not valid';
      }
    }

    if (contact && (contact.length !== 10 || isNaN(contact))) {
      newErrors.contact = 'Contact number must be a 10-digit number';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log({
        name,
        email,
        dateOfBirth,
        contact
      });
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className='d-flex flex-column align-items-center w-75'>
        <div className="card-body w-100">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputName1">1. Name*</label>
              <input
                type="text"
                className="form-control placeholder-color"
                id="exampleInputName1"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {errors.name && <small className="text-danger">{errors.name}</small>}
            </div>
            <div className="form-group mt-3">
              <label htmlFor="exampleInputEmail1">2. Email*</label>
              <input
                type="email"
                className="form-control placeholder-color"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <small className="text-danger">{errors.email}</small>}
            </div>
            <div className="form-group mt-3 w-50">
              <label htmlFor="exampleInputDate1">3. Date of Birth</label>
              <input
                type="date"
                className="form-control placeholder-color"
                id="exampleInputDate1"
                aria-describedby="emailHelp"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
            <div className="form-group mt-3 mb-4">
              <label htmlFor="exampleInputContact1">4. Contact no.</label>
              <input
                type="text"
                className="form-control placeholder-color"
                id="exampleInputContact1"
                aria-describedby="emailHelp"
                placeholder="Enter your 10 digit number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                maxLength="10"
              />
              {errors.contact && <small className="text-danger">{errors.contact}</small>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DetailCollection;

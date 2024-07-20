import React, { useState } from 'react';
import './InterviewAvailability.css';
import SearchIcon from '@mui/icons-material/Search';

const InterviewAvailability = () => {
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [interviewDate, setInterviewDate] = useState('');
  const [interviewTime, setInterviewTime] = useState('12:00');
  const [timeZone, setTimeZone] = useState('');
  const [interviewMedium, setInterviewMedium] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        newErrors.email = 'Email is not valid';
      }
    }

    if (!timeZone) {
      newErrors.timeZone = 'Time zone is required';
    }

    if (!interviewMedium) {
      newErrors.interviewMedium = 'Interview medium is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log({
        email,
        location,
        interviewDate,
        interviewTime,
        timeZone,
        interviewMedium,
      });
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className='d-flex flex-column align-items-center w-75'>
        <div className="card-body w-100">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">1. Email*</label>
              <input
                type="email"
                className="form-control placeholder-color"
                id="exampleInputEmail1"
                placeholder="Example - userid@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <small className="text-danger">{errors.email}</small>}
            </div>
            <div className="form-group mt-3">
              <label htmlFor="exampleInputLocation">2. Location</label>
              <div className="input-group">
                <span className="input-group-text"><SearchIcon /></span>
                <input
                  type="text"
                  className="form-control placeholder-color"
                  id="exampleInputLocation"
                  placeholder="Search or enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group mt-3 w-50">
              <label htmlFor="exampleInputDate1">3. Interview Date</label>
              <input
                type="date"
                className="form-control placeholder-color"
                id="exampleInputDate1"
                value={interviewDate}
                onChange={(e) => setInterviewDate(e.target.value)}
              />
            </div>
            <div className="form-group mt-3 w-50">
              <label htmlFor="exampleInputTime1">4. Interview Time</label>
              <input
                type="time"
                className="form-control placeholder-color"
                id="exampleInputTime1"
                value={interviewTime}
                onChange={(e) => setInterviewTime(e.target.value)}
              />
            </div>
            <div className="form-group mt-3 mb-4">
              <label htmlFor="time-zone">5. Time Zone</label>
              <select
                name="time-zone"
                id="time-zone"
                className="form-control placeholder-color"
                value={timeZone}
                onChange={(e) => setTimeZone(e.target.value)}
                required
              >
                <option value="" disabled>Select your time zone</option>
                <option value="kolkata">Kolkata</option>
                <option value="japan">Japan</option>
                <option value="london">London</option>
                <option value="china">China</option>
              </select>
              {errors.timeZone && <small className="text-danger">{errors.timeZone}</small>}
            </div>
            <div className="form-group mt-3 mb-4">
              <label htmlFor="interview-medium">6. Interview Medium</label>
              <select
                name="interview-medium"
                id="interview-medium"
                className="form-control placeholder-color"
                value={interviewMedium}
                onChange={(e) => setInterviewMedium(e.target.value)}
                required
              >
                <option value="" disabled>Select medium of interview</option>
                <option value="hindi">Hindi</option>
                <option value="english">English</option>
                <option value="marathi">Marathi</option>
                <option value="telgu">Telgu</option>
              </select>
              {errors.interviewMedium && <small className="text-danger">{errors.interviewMedium}</small>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InterviewAvailability;

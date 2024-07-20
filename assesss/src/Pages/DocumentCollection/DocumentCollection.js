import React, { useState } from 'react';
import './DocumentCollection.css';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

const DocumentCollection = () => {
  const [files, setFiles] = useState({
    tenthMarksheet: null,
    twelfthMarksheet: null,
    graduationMarksheet: null,
    postGraduationMarksheet: null,
    offerLetter: null,
    salarySlips: null,
    bankStatement: null,
    incrementLetter: null,
    others: null,
  });

  const [errors, setErrors] = useState({});

  const handleFileChange = (event, key) => {
    const file = event.target.files[0];
    if (file && file.size > 5120) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [key]: 'File size should not exceed 5KB',
      }));
      return;
    }
    setErrors(prevErrors => ({ ...prevErrors, [key]: null }));
    setFiles(prevFiles => ({ ...prevFiles, [key]: file }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const hasErrors = Object.values(errors).some(error => error !== null);
    if (!hasErrors) {
      console.log(files);
    } else {
      alert('Please fix the errors before submitting the form.');
    }
  };

  const documentFields = {
    tenthMarksheet: '10th Marksheet*',
    twelfthMarksheet: '12th Marksheet*',
    graduationMarksheet: 'Graduation Marksheet*',
    postGraduationMarksheet: 'Post Graduation Marksheet',
    offerLetter: 'Offer Letter*',
    salarySlips: 'Salary Slips*',
    bankStatement: 'Bank Statement*',
    incrementLetter: 'Increment Letter (if any)',
    others: 'Others (if any)',
  };

  return (
    <div className="container d-flex justify-content-start">
      <div className='d-flex flex-column align-items-start w-50'>
        <div className="card-body w-100">
          <form onSubmit={handleSubmit}>
            {Object.entries(documentFields).map(([key, label], index) => (
              <div className="form-group mt-3" key={index}>
                <label htmlFor={`fileInput${index}`}>{label}</label>
                <div className='upload'>
                  <button type='button' className='upload-button'>
                    <span className="icon"><FileUploadOutlinedIcon /></span>Attach file up to 5KB
                    <input
                      type='file'
                      id={`fileInput${index}`}
                      onChange={(e) => handleFileChange(e, key)}
                      accept="application/pdf,image/*"
                    />
                  </button>
                </div>
                {errors[key] && <small className="text-danger">{errors[key]}</small>}
              </div>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DocumentCollection;

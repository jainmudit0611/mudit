import React, { useState } from 'react';
import './StatementOfPurpose.css';

const StatementOfPurpose = () => {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
  });

  const wordLimit = 300;
  const charLimit = 1500;

  const handleChange = (e, key) => {
    const { value } = e.target;
    const limitedValue = enforceWordLimit(value, wordLimit);
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [key]: limitedValue,
    }));
  };

  const enforceWordLimit = (text, limit) => {
    const words = text.split(/\s+/).slice(0, limit);
    return words.join(' ');
  };

  const getWordCount = (text) => {
    return text.trim().split(/\s+/).length;
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className='d-flex flex-column align-items-center box-size'>
        <div className="card-body w-100">
          <form>

            <div className="form-group mb-5">
              <label htmlFor="question1">1. Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?</label>
              <input type="textarea" className="form-control placeholder-color py-4" maxLength={charLimit} id="question1" value={answers.question1} onChange={(e) => handleChange(e, 'question1')} placeholder="Enter a description for a long answer" rows="4" />
              <div className='word-limit'>
                <p>{getWordCount(answers.question1) > wordLimit ? 'Word limit exceeded!' : `Word limit: ${wordLimit}`}</p>
                <p>{answers.question1.length > charLimit ? 'Character limit exceeded!' : `Character limit: ${charLimit}`}</p>
              </div>
            </div>

            <div className="form-group mb-5">
              <label htmlFor="question2">2. Tell me about the last time something significant didn't go according to plan at work. What was your role? What was the outcome?</label>
              <input type="textarea" className="form-control placeholder-color py-4" maxLength={charLimit} id="question2" value={answers.question2} onChange={(e) => handleChange(e, 'question2')} placeholder="Enter a description for a long answer" rows="4" />
              <div className='word-limit'>
                <p>{getWordCount(answers.question2) > wordLimit ? 'Word limit exceeded!' : `Word limit: ${wordLimit}`}</p>
                <p>{answers.question2.length > charLimit ? 'Character limit exceeded!' : `Character limit: ${charLimit}`}</p>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="question3">3. What are the three things that are most important to you in a job?</label>
              <input type="textarea" className="form-control placeholder-color py-4" maxLength={charLimit} id="question3" value={answers.question3} onChange={(e) => handleChange(e, 'question3')} placeholder="Enter a description for a long answer" rows="4" />
              <div className='word-limit'>
                <p>{getWordCount(answers.question3) > wordLimit ? 'Word limit exceeded!' : `Word limit: ${wordLimit}`}</p>
                <p>{answers.question3.length > charLimit ? 'Character limit exceeded!' : `Character limit: ${charLimit}`}</p>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default StatementOfPurpose;


import React, { createContext, useState, useContext } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Details Collection', 'Document Collection', 'Statement of Purpose', 'Interview Availability'];

    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            alert('Form submitted');
            setActiveStep(0)
        } else {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep(prevStep => prevStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const getNextPath = () => {
        switch (activeStep) {
            case 0:
                return "/documentcollection";
            case 1:
                return "/statementofpurpose";
            case 2:
                return "/interviewavailability";
            default:
                return "/";
        }
    };

    const isStepOptional = (step) => step === 1; // Adjust based on your needs

    const isStepSkipped = (step) => false; // Adjust based on your needs

    return (
        <NavigationContext.Provider value={{ activeStep, handleNext, handleBack, handleReset, getNextPath, isStepOptional, isStepSkipped }}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => useContext(NavigationContext);

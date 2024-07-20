import React from 'react';
import './Header.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useNavigation } from '../../NavigationContext/NavigationContext';
import ClearIcon from '@mui/icons-material/Clear';

const steps = ['Details Collection', 'Document Collection', 'Statement of Purpose', 'Interview Availability'];

const Header = () => {
    const { activeStep, handleReset } = useNavigation();

    const handleClearClick = () => {
        handleReset();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm p-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box
                sx={{
                    width: '80%', 
                    maxWidth: '900px', 
                    mx: 'auto', 
                }}
            >
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={index}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>

            <div>
                <ClearIcon onClick={handleClearClick} style={{ cursor: 'pointer' }} />
            </div>
        </nav>
    );
};

export default Header;

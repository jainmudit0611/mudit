import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import { useNavigation } from '../../NavigationContext/NavigationContext'; 

const Footer = () => {
    const { handleNext, getNextPath } = useNavigation(); // Use context hook
    const navigate = useNavigate();

    const handleClick = () => {
        handleNext();
        navigate(getNextPath());
    };

    return (
        <footer>
            <div className="container d-flex justify-content-end align-items-end shadow-top">
                <div className="p-2">
                    <button type="button" className="btn btn-primary btn-outline button-direction" onClick={handleClick}>
                        Next
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

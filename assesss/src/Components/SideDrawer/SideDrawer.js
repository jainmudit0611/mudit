import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './SideDrawer.css';

const SideDrawer = React.memo(() => {
    return (
        <div className="side-drawer">
            <div className="row h-100 w-100">
                <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                    <div className="container element-box p-2 my-2 mt-4">
                        <div className='inner-box '></div>
                        <div className='text-box ml-2'>
                            <h5 className='mb-0'>New Form</h5>
                            <span>Start creating a new form with the wide options of fields available</span>
                        </div>
                    </div>

                    <div className="container side-head p-0 mt-3 mb-0">
                        <p>Explore the following templates :</p>
                    </div>

                    <NavLink to="/" className="container element-box p-2 mb-2" activeClassName="active">
                        <div className='inner-box px-2'></div>
                        <div className='text-box ml-2'>
                            <h5 className='mb-0'>Details Collection</h5>
                            <span>Collect information from Candidates on their education, work experience, contact no, etc</span>
                        </div>
                    </NavLink>

                    <NavLink to="/documentcollection" className="container element-box p-2 my-2" activeClassName="active">
                        <div className='inner-box px-3'></div>
                        <div className='text-box ml-2'>
                            <h5 className='mb-0'>Document Collection</h5>
                            <span>Save time and efforts. Explore this template to find a set of questions required for document collection</span>
                        </div>
                    </NavLink>

                    <NavLink to="/statementofpurpose" className="container element-box p-2 my-2" activeClassName="active">
                        <div className='inner-box '></div>
                        <div className='text-box ml-2'>
                            <h5 className='mb-0'>Statement of Purpose</h5>
                            <span>Start creating a new form with the wide options of fields available</span>
                        </div>
                    </NavLink>

                    <NavLink to="/interviewavailability" className="container element-box p-2 my-2 mb-4" activeClassName="active">
                        <div className='inner-box '></div>
                        <div className='text-box ml-2'>
                            <h5 className='mb-0'>Interview Availability</h5>
                            <span>Start creating a new form with the wide options of fields available</span>
                        </div>
                    </NavLink>
                </div>

                <div className="col-9  d-flex flex-column justify-content-center align-items-start p-5">
                    <div className="container d-flex justify-content-center">
                        <div className='d-flex flex-column align-items-center w-100'>
                            <div className="container d-flex flex-column align-items-start w-75">
                                <div className='content-heading mb-3'>
                                    <h5 className='mb-0'>Preview</h5>
                                    <span>You will be able to customize fields in the later stage</span>
                                </div>

                                <div className="card w-100 h-100">
                                    <div className='content-box card-img-top'>
                                        <h5 className='mb-0 d-flex align-items-center'>Name of the Enquiry Form</h5>
                                        <p className='mb-3'>One line description of the form</p>
                                        <p>Provide the following information to process your application</p>
                                    </div>

                                    <div className="content-area w-100 mt-4">
                                        <Outlet />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default SideDrawer;

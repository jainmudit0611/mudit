import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import { NavigationProvider } from './NavigationContext/NavigationContext';

const DetailCollection = lazy(() => import('./Pages/DetailCollection/DetailCollection'));
const DocumentCollection = lazy(() => import('./Pages/DocumentCollection/DocumentCollection'));
const StatementOfPurpose = lazy(() => import('./Pages/StatementOfPurpose/StatementOfPurpose'));
const InterviewAvailability = lazy(() => import('./Pages/InterviewAvailability/InterviewAvailability'));

const App = () => {
    return (
        <Router>
            <NavigationProvider>
                <div className='app-container'>
                    <Header />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<SideDrawer />}>
                                <Route index element={<DetailCollection />} />
                                <Route path="documentcollection" element={<DocumentCollection />} />
                                <Route path="statementofpurpose" element={<StatementOfPurpose />} />
                                <Route path="interviewavailability" element={<InterviewAvailability />} />
                            </Route>
                        </Routes>
                    </Suspense>
                    <Footer />
                </div>
            </NavigationProvider>
        </Router>
    );
};

export default App;

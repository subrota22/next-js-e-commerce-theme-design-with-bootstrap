import Footer from '@/pages/shares/Footer/Footer';
import React from 'react';

const ErrorThree = () => {
    return (
        <>
<br /><br /><br />
            <div id="layoutError">
                <div id="layoutError_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="text-center mt-4">
                                        <h1 className="display-1">500</h1>
                                        <p className="lead">Internal Server Error</p>
                                        <a href="/">
                                            <i className="fas fa-arrow-left me-1"></i>
                                            Return to Dashboard
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <br /> <br /> <br />   <br />  <br /> 
           <br /> <br /> <br />   <br />   <br /> <br />
                <div id="layoutError_footer">
               <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default ErrorThree;
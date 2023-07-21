import Footer from '@/pages/shares/Footer/Footer';
import React from 'react';

const ResetPassword = () => {
    return (
        <>
         <section className="bg-primary">
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Password Recovery</h3></div>
                                    <div className="card-body">
                                        <div className="small mb-3 text-muted">Enter your email address and we will send you a link to reset your password.</div>
                                        <form>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                                <label for="inputEmail">Email address</label>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a className="small" href="/dashboard/login">Return to login</a>
                                                <a className="btn btn-primary" href="/dashboard/login">Reset Password</a>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center py-3">
                                        <div className="small"><a href="/dashboard/register">Need an account? Sign up!</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <br /> <br /> <br />   <br />
            <div id="layoutAuthentication_footer">
              <Footer></Footer>
            </div>
        </div>
    </section>   
        </>
    );
};

export default ResetPassword;
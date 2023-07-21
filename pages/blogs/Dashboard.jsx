import React, { useState } from 'react';
import SideNav from '../shares/SideNav/SideNav';
import AreaChartComponent from '@/components/AreaChartComponent';
import BarChartComponent from '@/components/BarChartComponent';
import AppleEmployeDataTable from '../shares/DataTable/AppleEmployeDataTable';

const Dashboard = () => {
    const [display, setDisplay] = useState(true);
    return (
        <>

            <section className="sb-nav-fixed">
                <nav className="sb-topnav sb-nav-fixed navbar navbar-expand navbar-dark bg-dark">
                    <a className="navbar-brand ps-3" href="/">Start Bootstrap</a>
                    {display && <button onClick={() => setDisplay(false)} className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="/"><i className="fas fa-bars"></i></button>}
                    {!display && <button onClick={() => setDisplay(true)} className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="/"><i className="fas fa-bars"></i></button>}
                    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                            <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                        </div>
                    </form>

                    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">Settings</a></li>
                                <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <div className='d-flex flex-sm-column flex-md-row'>
                    {display && <SideNav></SideNav>}
                    <div id="layoutSidenav_content" className='w-100'>
                        <main>
                            <br />   <br />
                            <div className="container-fluid px-4">
                                <h1 className="mt-4">Dashboard</h1>
                                <ol className="breadcrumb mb-4">
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                                <div className="row">
                                    <div className="col-xl-3 col-md-6">
                                        <div className="card bg-primary text-white mb-4">
                                            <div className="card-body">Primary Card</div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <a className="small text-white stretched-link" href="#">View Details</a>
                                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="card bg-warning text-white mb-4">
                                            <div className="card-body">Warning Card</div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <a className="small text-white stretched-link" href="#">View Details</a>
                                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="card bg-success text-white mb-4">
                                            <div className="card-body">Success Card</div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <a className="small text-white stretched-link" href="#">View Details</a>
                                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="card bg-danger text-white mb-4">
                                            <div className="card-body">Danger Card</div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <a className="small text-white stretched-link" href="#">View Details</a>
                                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="card mb-4">
                                            <div className="card-header">
                                                <i className="fas fa-chart-area me-1"></i>
                                                Area Chart Example
                                            </div>
                                            <div className="card-body">
                                       <AreaChartComponent></AreaChartComponent>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card mb-4">
                                            <div className="card-header">
                                                <i className="fas fa-chart-bar me-1"></i>
                                                Bar Chart Example
                                            </div>
                                            <div className="card-body">
                                                <BarChartComponent></BarChartComponent>
                                            
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-table me-1"></i>
                                        DataTable Example
                                    </div>
                                    <div className="card-body">
                                       <AppleEmployeDataTable></AppleEmployeDataTable>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <footer className="py-4 bg-light mt-auto">
                            <div className="container-fluid px-4">
                                <div className="d-flex align-items-center justify-content-between small">
                                    <div className="text-muted">Copyright &copy; Your Website 2023</div>
                                    <div>
                                        <a href="#">Privacy Policy</a>
                                        &middot;
                                        <a href="#">Terms &amp; Conditions</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Dashboard;
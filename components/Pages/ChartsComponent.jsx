
import React, { useState } from 'react';
import SideNav from '@/pages/shares/SideNav/SideNav';
import AreaChartComponent from '../AreaChartComponent';
import BarChartComponent from '../BarChartComponent';
import PieChartComponent from '../PieChartComponent';
import Footer from '@/pages/shares/Footer/Footer';

const ChartsComponent = () => {
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

                    <div id="layoutSidenav_content" className='w-100 row'>
                        <main>
                            <div className="container-fluid px-4">
                                <br /><br />
                                <h1 className="mt-4">Charts</h1>
                                <ol className="breadcrumb mb-4">
                                    <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                                    <li className="breadcrumb-item active">Charts</li>
                                </ol>
                                <div className="card mb-4">
                                    <div className="card-body">
                                        Chart.js is a third party plugin that is used to generate the charts in this template. The charts below have been customized - for further customization options, please visit the official
                                        <a target="_blank" href="https://www.chartjs.org/docs/latest/">Chart.js documentation</a>
                                        .
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-chart-area me-1"></i>
                                        Area Chart Example
                                    </div>
                                    <div className="card-body">
                                        <AreaChartComponent></AreaChartComponent>
                                    </div>
                                    <div className="card-footer small text-muted">Updated yesterday at 11:39 PM</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="card mb-4">
                                            <div className="card-header">
                                                <i className="fas fa-chart-bar me-1"></i>
                                                Bar Chart Example
                                            </div>
                                            <div className="card-body">
                                                <BarChartComponent></BarChartComponent>
                                            </div>
                                            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="card mb-4">
                                            <div className="card-header">
                                                <i className="fas fa-chart-pie me-1"></i>
                                                Pie Chart Example
                                            </div>
                                            <div className="card-body">
                                                <PieChartComponent></PieChartComponent>
                                            </div>
                                            <div className="card-footer small text-muted">Updated yesterday at 11:50 PM</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                       <div>
                       <Footer></Footer>
                       </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChartsComponent;
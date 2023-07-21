import React, { useState } from 'react';
import SideNav from '@/pages/shares/SideNav/SideNav';
import EmployeDataTable from '@/pages/shares/DataTable/EmployeDataTable';
import Footer from '@/pages/shares/Footer/Footer';
const Tables = () => {
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
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid px-4">
                            <br /><br />
                                <h1 className="mt-4">Tables</h1>
                                <ol className="breadcrumb mb-4">
                                    <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                                    <li className="breadcrumb-item active">Tables</li>
                                </ol>
                                <div className="card mb-4">
                                    <div className="card-body">
                                        DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
                                        <a target="_blank" href="https://datatables.net/">official DataTables documentation</a>
                                        .
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-table me-1"></i>
                                        DataTable Example
                                    </div>
                                    <div className="card-body">
                                    <EmployeDataTable></EmployeDataTable>
                                    </div>
                                </div>
                            </div>
                        </main>
                      <Footer></Footer>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Tables;
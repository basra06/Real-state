import React from 'react'
import "../sass/footer.css"
import a from "../images/2.jpg"

export const Footer = () => {
    return (
        <>

           
                <div className="container w-100 ">

                    <footer className="text-center text-lg-start text-white fw-bold">

                        <div className="container p-4">

                            <div className="row my-4">

                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                                    <div className="rounded-circle  shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{
                                        width: '150px',
                                        height: '150px'
                                    }}>
                                        <img style={{ borderRadius: '50%' }} src={a} height="100" weight="100" alt=""
                                            loading="lazy" />
                                    </div>

                                    <p className="text-center">Homless animal shelter The budgetary unit of the Capital City of Warsaw</p>

                                    <ul className="list-unstyled d-flex flex-row justify-content-center">
                                        <li>
                                            <a className="text-white px-2" href="#!">
                                                <i className="fa fa-facebook text-primary "></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-white px-2" href="#!">
                                                <i className="fa fa-instagram text-danger"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-white ps-2" href="#!">
                                                <i className="fa fa-youtube"></i>
                                            </a>
                                        </li>
                                    </ul>

                                </div>

                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <h5 className="text-dark">Home</h5>

                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <a href="#!" className="text-white">When your pet is missing</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="#!" className="text-white">Recently found</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="#!" className="text-white">How to adopt?</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="#!" className="text-white">Pets for adoption</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="#!" className="text-white">Material gifts</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="#!" className="text-white">Help with walks</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="#!" className="text-white">Volunteer activities</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <h5 className="text-uppercase mb-4 text-dark fw-bold">About</h5>

                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <a href="#!" className="text-white">General information</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="#!" className="text-white">About the shelter</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="#!" className="text-white">Statistic data</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="#!" className="text-white">Job</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="#!" className="text-white">Tenders</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="#!" className="text-white">Contact</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <h5 className="text-uppercase text-dark mb-4 fw-bold">Contact</h5>

                                    <ul className="list-unstyled">
                                        <li>
                                            <p><i className="fa fa-map-marker text-primary pe-2"></i>Warsaw, 57 Street, Poland</p>
                                        </li>
                                        <li>
                                            <p><i className="fa fa-phone pe-2 text-success"></i>+ 01 234 567 89</p>
                                        </li>
                                        <li>
                                            <p><i className="fa fa-envelope pe-2 mb-0 text-successs"></i>contact@example.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="text-center p-3" >
                            © 2020 Copyright:
                            <a className="text-white" href="#">MDBootstrap.com</a>
                        </div>

                    </footer>

                </div>
          



        </>
    )
}

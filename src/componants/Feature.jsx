import React from 'react'
import  aa from "../images/7.png"
import "../sass/feature.scss"

export const Feature = () => {
  return (
    <>


  <div className="feature mt-5 mb-3">
    <div className="container mt-4">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
               <div className="image p-3">
                <img src={aa} className="image-fluid" />
               </div>
            </div>







            <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                   <div className="text">
                       <button className='butto'>About Us</button>
                       <h2>The Leading Real Estate Rental Marketplace.</h2>
                        <p>Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services</p>
                   
                        <div className="row">

                            <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                                <div>
                                    <i class="fa fa-home"/> <span>  Smart Home Design</span>
                                </div>
                            </div>


                            <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                                <div>
                                    <i class="fa fa-home"/> <span>  Smart Home Design</span>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                                <div class="padd">
                                    <i class="fa fa-home"/> <span>  Smart Home Design</span>
                                </div>
                            </div>


                            <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                                <div>
                                    <i class="fa fa-home"/> <span >  Smart Home Design</span>
                                </div>
                            </div>


                        </div>



                        <div className="para mt-5 mb-4">
                            <p>"Enimad minim veniam quis nostrud exercitation
                               llamco laboris. Lorem ipsum dolor sit amet"</p>
                        </div>

                        <div className="butt mt-3">
                            <button>Our Services</button>
                        </div>
                   
                   </div>
                </div>


        </div>
    </div>
  </div>

    </>
  )
}

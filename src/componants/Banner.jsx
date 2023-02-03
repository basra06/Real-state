import React from 'react'
import a from "../images/21.png"
import "../sass/slider.scss"

export const Banner = () => {


  return (
    <>
 

 
   <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div className="carousel-inner ">
    <div className="carousel-item active">
      <div className="slide  ">
        <div className="container mt-2">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                    <div className="name">
                        <i className='fa fa-home' /><span>Real State Egency</span> 
                        <h2>Find  Your Dream House By Us </h2>
                        <p>  Lorem ipsum dolor sit ametquasi labore,  voluptates asperiores quo quos  voluptates asperiores quo quos sequi, recusandae quam.</p>
                        <button ><a href="#">Make An Enquiry</a></button> <span className='text-center'><i className="fa fa-play-circle " /></span>
                    </div>
                </div>

                 <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                        <div className="image">
                            <img src={a} className='image-fluid w-100 h-auto'  />
                        </div>
                    </div> 
            </div>
        </div>
      </div>
        
    </div>




    <div className="carousel-item ">
      <div className="slide  ">
        <div className="container mt-2">
            <div className="row">
                

                 <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                        <div className="image">
                            <img src={a} className='image-fluid w-100 h-auto'  />
                        </div>
                    </div> 

                    <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                    <div className="name">
                        <i className='fa fa-home' /><span>Real State Egency</span> 
                        <h2>Find  Your Dream House By Us </h2>
                        <p>  Lorem ipsum dolor sit ametquasi labore,  voluptates asperiores quo quos  voluptates asperiores quo quos sequi, recusandae quam.</p>
                        <button ><a href="#">Make An Enquiry</a></button> <span className='text-center'></span>
                    </div>
                </div>
            </div>
        </div>
      </div>
        
    </div>









    








    
    
  
  </div>
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="fa fa-angle-left " aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="fa fa-angle-right" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   

 
    </> 
  )
}

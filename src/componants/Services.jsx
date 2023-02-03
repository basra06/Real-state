import React from 'react'
import a from "../images/21 (1).png"
import aa from "../images/22.png"
import ab from "../images/23.png"
import "../sass/services.css"
export const Services = () => {
  return (
    <>

     
        <div className="container mt-5 mb-5">
          <div className="row">

            <div className="bu mt-4 mb-4 text-center">
              <button>Our Services</button>
              <h3>Our Main Focus</h3>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
              <div className="car" >
                <img src={a} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Buy A Home</h5>
                  <p className="card-text">over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                  <div className="go text-center  mb-3 p-4">
                    <a href="#" className='text-center' >Buy Now  <span><i className='	fa fa-arrow-circle-right'></i></span></a>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
              <div className="car" >
                <img src={aa} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Rent a home</h5>
                  <p className="card-text">over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                  <div className="go text-center  mb-3 p-4">
                    <a href="#" className='text-center' >Buy Now  <span><i className='	fa fa-arrow-circle-right'></i></span></a>
                  </div>
                </div>
              </div>
            </div>



            <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
              <div className="car" >
                <img src={ab} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Sell a home</h5>
                  <p className="card-text">over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                  <div  className="go text-center  mb-3 p-4">
                    <a href="#" className='text-center' >Buy Now  <span><i className='	fa fa-arrow-circle-right'></i></span></a>
                  </div>

                </div>


              </div>
            </div>











          </div>
        </div>
    


    </>
  )
}

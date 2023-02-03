import React from 'react'
import "../sass/properties.css"
import Slider from "react-slick";
import a from "../images/1.jpg"
import aa from "../images/3.jpg"
import b from "../images/2 (1).jpg"
import bb from "../images/4.jpg"
import c from "../images/5.jpg"
import cc from "../images/2 (1).jpg"

export const Properties = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    };
    return (
        <>

            <div className="properties">
                <div className="container">
                    <div className="row">

                        <div className="tex mb-5">
                            <button >Properties</button>
                            <h3 className='hes'>Featured Listings</h3>
                        </div>



                        <div>

                            <Slider {...settings}>
                                <div className='p-2 m-2'>
                                    <div className="card" >
                                        <img src={a} className="card-img-top" />
                                        <button className='tt' >For Sale</button>
                                        <div className="card-body">
                                            <h4>$ 34900 /Month</h4>
                                            <h5 className="card-title">Luxury Home</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <div className='st'>
                                                <div className="be">
                                                    <p>3 <i className='fa fa-bed'></i> <br></br>Bedrooms</p>
                                                </div>
                                                <div className="bb">
                                                    <p>2  <i className='	fa fa-address-book'></i><br></br>Bath</p>
                                                </div>
                                                <div className="sq">
                                                    <p>3440 <i className='	fa fa-arrows-h'></i> <br></br>squarefoot</p>
                                                </div>




                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='p-2 m-2'>
                                    <div className="card" style={{ width: '100%;' }}>
                                        <img src={cc} className="card-img-top" alt="..." />
                                        <button className='tt' >For Sale</button>
                                        <div className="card-body">
                                            <h4>$ 34900 /Month</h4>
                                            <h5 className="card-title">Luxury Home</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <div className='st'>
                                                <div className="be">
                                                    <p>3 <i className='fa fa-bed'></i> <br></br>Bedrooms</p>
                                                </div>
                                                <div className="bb">
                                                    <p>2  <i className='	fa fa-address-book'></i><br></br>Bath</p>
                                                </div>
                                                <div className="sq">
                                                    <p>3440 <i className='	fa fa-arrows-h'></i> <br></br>squarefoot</p>
                                                </div>




                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className='p-2 m-2'>
                                    <div className="card" style={{ width: '100%;' }}>
                                        <img src={aa} className="card-img-top" alt="..." />
                                        <button className='tt' >For Sale</button>
                                        <div className="card-body">
                                            <h4>$ 34900 /Month</h4>
                                            <h5 className="card-title">Luxury Home</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <div className='st'>
                                                <div className="be">
                                                    <p>3 <i className='fa fa-bed'></i> <br></br>Bedrooms</p>
                                                </div>
                                                <div className="bb">
                                                    <p>2  <i className='	fa fa-address-book'></i><br></br>Bath</p>
                                                </div>
                                                <div className="sq">
                                                    <p>3440 <i className='	fa fa-arrows-h'></i> <br></br>squarefoot</p>
                                                </div>




                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='p-2 m-2'>
                                    <div className="card" style={{ width: '100%;' }}>
                                        <img src={b} className="card-img-top" alt="..." />
                                        <button className='tt' >For Sale</button>
                                        <div className="card-body">
                                            <h4>$ 34900 /Month</h4>
                                            <h5 className="card-title">Luxury Home</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <div className='st'>
                                                <div className="be">
                                                    <p>3 <i className='fa fa-bed'></i> <br></br>Bedrooms</p>
                                                </div>
                                                <div className="bb">
                                                    <p>2  <i className='	fa fa-address-book'></i><br></br>Bath</p>
                                                </div>
                                                <div className="sq">
                                                    <p>3440 <i className='	fa fa-arrows-h'></i> <br></br>squarefoot</p>
                                                </div>




                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className='p-2 m-2'>
                                    <div className="card" style={{ width: '100%;' }}>
                                        <img src={bb} className="card-img-top" alt="..." />
                                        <button className='tt' >For Sale</button>
                                        <div className="card-body">
                                            <h4>$ 34900 /Month</h4>
                                            <h5 className="card-title">Luxury Home</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <div className='st'>
                                                <div className="be">
                                                    <p>3 <i className='fa fa-bed'></i> <br></br>Bedrooms</p>
                                                </div>
                                                <div className="bb">
                                                    <p>2  <i className='	fa fa-address-book'></i><br></br>Bath</p>
                                                </div>
                                                <div className="sq">
                                                    <p>3440 <i className='	fa fa-arrows-h'></i> <br></br>squarefoot</p>
                                                </div>




                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className='p-2 m-2'>
                                    <div className="card" style={{ width: '100%;' }}>
                                        <img src={c} className="card-img-top" alt="..." />
                                        <button className='tt' >For Sale</button>
                                        <div className="card-body">
                                            <h4>$ 34900 /Month</h4>
                                            <h5 className="card-title">Luxury Home</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <div className='st'>
                                                <div className="be">
                                                    <p>3 <i className='fa fa-bed'></i> <br></br>Bedrooms</p>
                                                </div>
                                                <div className="bb">
                                                    <p>2  <i className='	fa fa-address-book'></i><br></br>Bath</p>
                                                </div>
                                                <div className="sq">
                                                    <p>3440 <i className='	fa fa-arrows-h'></i> <br></br>squarefoot</p>
                                                </div>




                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='p-2 m-2'>
                                    <div className="card" style={{ width: '100%;' }}>
                                        <img src={aa} className="card-img-top" alt="..." />
                                        <button className='tt' >For Sale</button>
                                        <div className="card-body">
                                            <h4>$ 34900 /Month</h4>
                                            <h5 className="card-title">Luxury Home</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <div className='st'>
                                                <div className="be">
                                                    <p>3 <i className='fa fa-bed'></i> <br></br>Bedrooms</p>
                                                </div>
                                                <div className="bb">
                                                    <p>2  <i className='	fa fa-address-book'></i><br></br>Bath</p>
                                                </div>
                                                <div className="sq">
                                                    <p>3440 <i className='	fa fa-arrows-h'></i> <br></br>squarefoot</p>
                                                </div>




                                            </div>
                                        </div>
                                    </div>
                                </div>





                            </Slider>
                        </div>




                    </div>
                </div>
            </div>

        </>
    )
}

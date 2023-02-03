import React from 'react'
import "../sass/News.css"
import Slider from "react-slick";
import a from "../images/1.jpg"
import aa from "../images/3.jpg"
import b from "../images/2 (1).jpg"
import bb from "../images/4.jpg"
import c from "../images/5.jpg"
import cc from "../images/2 (1).jpg"

export const News = () => {

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
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
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
          
                <div className="container mt-5 mb-5">
                   <div className="row">
                   <div className="tex mb-5">
                        <button >News & Blogs</button>
                        <h3 className='hes'>Leatest News Feeds</h3>
                    </div>


                    <div>

<Slider {...settings}>

    <div className='p-2 m-2'>
        <div className="card" >
            <img src={a} className="card-img-top" />
            <div className="card-body">
                <div className='st mt-3 '>
                    <div className="be">
                        <p><i className='fa fa-user'></i> Admin</p>
                    </div>
                    <div className="bb">
                        <p><i className='fa fa-pencil'></i> Interior</p>
                    </div>
                    <div className="sq">
                        <p><i className='fa fa-home'></i> Interior</p>
                    </div>




                </div>
                <h5 className="card-title">Luxury Home</h5>
                <div className='stt'>
                    <div className="date">
                        <p><i className='fa fa-calendar'></i>  18jan2023</p>
                    </div>
                    <div className="more">
                        <p><a href='#'>Read More</a> <i className='fa fa-arrow-right'></i></p>
                    </div>
                    




                </div>
            </div>
        </div>
    </div>




    <div className='p-2 m-2'>
        <div className="card" >
            <img src={aa} className="card-img-top" />
            <div className="card-body">
                <div className='st mt-3 '>
                    <div className="be">
                        <p><i className='fa fa-user'></i> Admin</p>
                    </div>
                    <div className="bb">
                        <p><i className='fa fa-pencil'></i> Interior</p>
                    </div>
                    <div className="sq">
                        <p><i className='fa fa-home'></i> Interior</p>
                    </div>




                </div>
                <h5 className="card-title">Luxury Home</h5>
                <div className='stt'>
                    <div className="date">
                        <p><i className='fa fa-calendar'></i>  18jan2023</p>
                    </div>
                    <div className="more">
                        <p><a href='#'>Read More</a> <i className='fa fa-arrow-right'></i></p>
                    </div>
                    




                </div>
            </div>
        </div>
    </div>




    <div className='p-2 m-2'>
        <div className="card" >
            <img src={cc} className="card-img-top" />
            <div className="card-body">
                <div className='st mt-3 '>
                    <div className="be">
                        <p><i className='fa fa-user'></i> Admin</p>
                    </div>
                    <div className="bb">
                        <p><i className='fa fa-pencil'></i> Interior</p>
                    </div>
                    <div className="sq">
                        <p><i className='fa fa-home'></i> Interior</p>
                    </div>




                </div>
                <h5 className="card-title">Luxury Home</h5>
                <div className='stt'>
                    <div className="date">
                        <p><i className='fa fa-calendar'></i>  18jan2023</p>
                    </div>
                    <div className="more">
                        <p><a href='#'>Read More</a> <i className='fa fa-arrow-right'></i></p>
                    </div>
                    




                </div>
            </div>
        </div>
    </div>




    <div className='p-2 m-2'>
        <div className="card" >
            <img src={a} className="card-img-top" />
            <div className="card-body">
                <div className='st mt-3 '>
                    <div className="be">
                        <p><i className='fa fa-user'></i> Admin</p>
                    </div>
                    <div className="bb">
                        <p><i className='fa fa-pencil'></i> Interior</p>
                    </div>
                    <div className="sq">
                        <p><i className='fa fa-home'></i> Interior</p>
                    </div>




                </div>
                <h5 className="card-title">Luxury Home</h5>
                <div className='stt'>
                    <div className="date">
                        <p><i className='fa fa-calendar'></i>  18jan2023</p>
                    </div>
                    <div className="more">
                        <p><a href='#'>Read More</a> <i className='fa fa-arrow-right'></i></p>
                    </div>
                    




                </div>
            </div>
        </div>
    </div>




    <div className='p-2 m-2'>
        <div className="card" >
            <img src={a} className="card-img-top" />
            <div className="card-body">
                <div className='st mt-3 '>
                    <div className="be">
                        <p><i className='fa fa-user'></i> Admin</p>
                    </div>
                    <div className="bb">
                        <p><i className='fa fa-pencil'></i> Interior</p>
                    </div>
                    <div className="sq">
                        <p><i className='fa fa-home'></i> Interior</p>
                    </div>




                </div>
                <h5 className="card-title">Luxury Home</h5>
                <div className='stt'>
                    <div className="date">
                        <p><i className='fa fa-calendar'></i>  18jan2023</p>
                    </div>
                    <div className="more">
                        <p><a href='#'>Read More</a> <i className='fa fa-arrow-right'></i></p>
                    </div>
                    




                </div>
            </div>
        </div>
    </div>









  



    


    





</Slider>
</div>


                   </div>
                </div>
          


        </>
    )
}

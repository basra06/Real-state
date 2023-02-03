import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import a from "../images/1.jpg"
// import aa from "../images/3.jpg"
// import b from "../images/2 (1).jpg"
// import bb from "../images/4.jpg"
// import c from "../images/5.jpg"
// import cc from "../images/2 (1).jpg"
import "../sass/test.css"
import axios from 'axios';
export const Testnomial = () => {

    const[comment,setcomment]=useState([]);
    

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            console.log(response.data);
            setcomment(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[])


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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
        ]
    };
    return (
        <>


            <div className="testsection">
                <div className="container p-4">
                    <div className="row py-5">

                        <div className="textdat">
                            <button >Our Testnoonial</button>
                            <h3 className='hes'>Clients Feedback</h3>
                        </div>



                        <div >
                            <Slider {...settings}>


                                {comment.map((val,ind)=>{
                                    if(ind<=10){
                                        return(
                                            <>

                                   <div className=' m-2 p-2' key={ind}>
                                    <div className="card" >
                                        <div className="card-body">
                                            <p className="card-text"> <b style={{ fontSize: '20px' }}>"</b> {val.body}
                                                 <b style={{ fontSize: '20px' }}>"</b></p>
                                            <div className='detail'>
                                                <div className="im">
                                                    <img src={a} />
                                                </div>
                                                <div className="tex">
                                                    {/* <h6>{val.name}</h6> */}
                                                    <h6 className='mt-3'> {val.email}</h6>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                            </>
                                        )
                                    }
                                })}
                                


                               




                                






                                <div className='p-2 m-2'>
                                    <div className="card" >
                                        <div className="card-body">
                                            <p className="card-text"> <b style={{ fontSize: '20px' }}>"</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum impedit veniam dicta quidem perspiciatis unde quaerat beatae tempora sunt! Aut voluptatibus deleniti
                                                aliquid modi obcaecati, ent.  aliquid modi obcaecati, ent. <b style={{ fontSize: '20px' }}>"</b></p>
                                            <div className='detail'>
                                                <div className="im">
                                                    <img src={a} />
                                                </div>
                                                <div className="tex">
                                                    <h6> Hamza</h6>
                                                    <p>Lorem ipsum dolor sit</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>




                                <div className='p-2 m-2'>
                                    <div className="card" >
                                        <div className="card-body">
                                            <p className="card-text"> <b style={{ fontSize: '20px' }}>"</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum impedit veniam dicta quidem perspiciatis unde quaerat beatae tempora sunt! Aut voluptatibus deleniti
                                                aliquid modi obcaecati, ent.  aliquid modi obcaecati, ent. <b style={{ fontSize: '20px' }}>"</b></p>
                                            <div className='detail'>
                                                <div className="im">
                                                    <img src={a} />
                                                </div>
                                                <div className="tex">
                                                    <h6> Hamza</h6>
                                                    <p>Lorem ipsum dolor sit</p>
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

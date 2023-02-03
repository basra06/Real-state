import { click } from '@testing-library/user-event/dist/click'
import React, { useEffect, useState,useRef } from 'react'
import { Animate } from '../componants/Animate'
import { Banner } from '../componants/Banner'
import { Custom } from '../componants/Custom'
import { Feature } from '../componants/Feature'
import { Footer } from '../componants/Footer'
import { Header } from '../componants/Header'
import { Navbar } from '../componants/Navbar'
import { News } from '../componants/News'
import { Properties } from '../componants/Properties'
import { Scr } from '../componants/Scr'
import { Scroll } from '../componants/Scroll'
import { Services } from '../componants/Services'
import { Testnomial } from '../componants/Testnomial'


export const Home = () => {



 
 
  return (
    <>



     <div className="header" id="mybutton">
     <Header/>
     </div>
    
     <div className="navbarsection" >
    <Navbar/>
    </div>

    <div className="slider w-100">
    <Banner/>
    </div>


    <div className="">
    <Feature/>
    </div>


    <div className="services ">
    <Services/>
    </div>


 

    <div className="properties">
    <Properties/>
    </div>


    <div className="animate mt-5 mb-5">
    <Animate/>
    </div>


    <div className="testsection">
    <Testnomial/>
     </div>


     <div className="news">
     <News/>
     </div>


     <div className="end">
     <Footer/>
     </div>
     



     <Scr/>
    
     

   
     
       
     
     
     

    
    
    </>
  )
}


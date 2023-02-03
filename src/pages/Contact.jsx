import React, { useEffect, useState } from 'react'
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
export const Contact = () => {
    const[active,setactive]=useState(false);
    useEffect(()=>{
      window.addEventListener('scroll',lictenscroll);
      return()=> window.removeEventListener('scroll',lictenscroll)
     })
    
     const lictenscroll=()=>{
      const win=document.body.scrollTop || document.documentElement.scrollTop;
    
      if(win>=60){
          setactive(true);
      }   
      else{
          setactive(false);
      }
    }
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



    <div className="news">
     <News/>
     </div>

    <div className="animate mt-5 mb-5">
    <Animate/>
    </div>


    <div className="testsection">
    <Testnomial/>
     </div>




     <div className="end">
     <Footer/>
     </div>
     

     {active? <>
     <div  style={{position:'fixed',bottom:15,right:20}} > 
       <a  href='#mybutton'>
       <Custom/>
       </a>
     
     </div>
     </>:""}
    
     

    </>
  )
}

import React, { useEffect, useState } from 'react'
import { Animate } from '../componants/Animate'
import { Custom } from '../componants/Custom'
import { Feature } from '../componants/Feature'
import { Footer } from '../componants/Footer'
import { Header } from '../componants/Header'
import { Navbar } from '../componants/Navbar'
import { News } from '../componants/News'
import { Properties } from '../componants/Properties'
import { Services } from '../componants/Services'
import { Testnomial } from '../componants/Testnomial'

export const About = () => {
    
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

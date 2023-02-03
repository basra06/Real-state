import React, { useEffect, useState } from 'react'


export const Scr = () => {
     const[active,setactive]=useState(false)

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
    const topscreen=()=>{
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
          });
          
        // window.scrollTo({top:0,left:0,behavior:"smooth"});
    }
    
   
  
  return (
    <>
    

       {active? 
        <div style={{position:'fixed',bottom:15,right:20}} onClick={topscreen}> 
          <div className="btn btn-danger">
            <i className='fa fa-angle-up'/>
          </div>
          </div> 
       :""} 
      
 
      
       

     
   
    </>
  )
}

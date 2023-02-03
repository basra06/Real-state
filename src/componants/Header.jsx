import React from 'react'
import "../sass/header.scss"
export const Header = () => {
  return (
    <>
    
     <div className="header">
        <div className="container ">
               <div className="chk ">                 
               <div className="left text-white ">             
                   <div className="sec">
                   <p><i className='fa fa-envelope'></i> <span className='px-2'><a href="#">info @gmail.com </a></span> </p>
                   </div>
                   <div id="del" className="sec">
                   <p><i className='fa fa-map-marker'></i>  <span className='px-2'><a href="#">15/A, Nest Tower, NYC</a></span> </p>
                   </div>              
            </div>
            
            <div className="right">
           <div className="icon">
            <p>
            <i className='fa fa-facebook m-2'/>
            <i className='fa fa-whatsapp m-2'/>
            <i className='fa fa-linkedin m-2'/>
            </p>
           </div>

           <div  className="icon">
            <button className='butt btn-lg ' ><a href="#">Add Listing</a></button>
           </div>
            
            </div>

               </div>
        </div>
     </div>

    </>
  )
}

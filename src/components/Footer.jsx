import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div style={{width:'100%', height:'300px'}} className='d-flex justify-content-center align-items-center flex-column mt-5 bg-primary'>
        <div className='d-flex justify-content-evenly align-items-center mb-5 w-100' style={{color:'white'}}>
            <div style={{width:'400px'}}>
                <h4> <i style={{color:'white'}} class="fa-solid fa-cart-plus fa-bounce me-3"></i>E-KART</h4>
                <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius corporis fugit expedita est debitis explicabo accusantium adipisci! 
                    Fuga pariatur cum a in saepe accusamus corrupti harum tenetur, nam incidunt animi.</p>
            </div>
            <div className='d-flex flex-column'>
                <h4>Links</h4>
                <Link to='/' style={{textDecoration:'none', color:'white' }}>Home</Link>
                <Link to='/cart' style={{textDecoration:'none', color:'white' }}>Cart</Link>
                <Link to='/wishlist' style={{textDecoration:'none', color:'white' }}>Wishlist</Link>
            </div>
            <div className='d-flex flex-column' >
                <h4>Guides</h4>
                <Link to={'https://react.dev/'} style={{color:'white',textDecoration:'none'}}>React</Link>
                <Link  to={'https://react.dev/'} style={{color:'white',textDecoration:'none'}}>React Bootstrap</Link>
                <Link  to={'https://react.dev/'}style={{color:'white',textDecoration:'none'}}>Boots watch</Link>
            </div>
            <div >
                <h4>Contact</h4>
                <div className='d-flex'>
                    <input type="text" className='form-control' placeholder='Enter Email Id' />
                    <button className='btn btn-warning ms-2'>Subscribe</button>
                </div>
                <div className=' d-flex justify-content-evenly mt-2' >
           <Link style={{textDecoration:'none', color:'orange'}}>
           <i class="fa-brands fa-square-instagram fa-2x"></i>
           </Link>
           <Link style={{textDecoration:'none', color:'orange'}}>
          <i class="fa-brands fa-facebook fa-2x"></i>
          </Link>
          <Link style={{textDecoration:'none', color:'orange'}}>
          <i class="fa-brands fa-twitter fa-2x"></i>
          </Link>
          <Link style={{textDecoration:'none', color:'orange'}}>
          <i class="fa-brands fa-reddit fa-2x"></i>
          </Link>
                </div>
            </div>
        </div>
        <p style={{color:'white'}}>Copyright 2024 E-Kart built with react redux</p>
    </div>
    </>
  )
}

export default Footer
import React from 'react'
import '../app.css';
import {Link} from 'react-router-dom';

export default function More() {
return (
    <>
    <hr />
    <br />
    <Link to='/openview' style={{textDecoration:"none",color:"black"}}>
    <div className='d-flex align-items-center bst'>
        <div className='picl1 pdd'></div>
        <div className='pdd'>
            <h5>Society – The soil in which we grow</h5>
            <h5>Connecting to Care</h5>
            <span className='font-weight-light fs-6'>
            The soil is all important. Everything grows in the soil. If the soil is good and you have the right amount of sunshine and water everything takes care of itself. 
            </span><br /><br /><br />
            <footer className='blockquote-footer mb-0 mr-0 fs-5'>Meghagowda@yil</footer>
        </div>
    </div></Link>
    <br />
    
    </>
)
}

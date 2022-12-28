import React from 'react'
import '../index.css'
import '../app.css'
import {Link} from 'react-router-dom';

export default function More1() {
return (
    <>
    <hr />
    <br />
    <Link to='/openview' style={{textDecoration:"none",color:"black"}}>
    <div className='d-flex align-items-center'>
        <div className='picl11 pdd1'></div>
        <div className='pdd1'>
            <h6>Flowers gives birth</h6>
            <span className='font-weight-light' style={{fontSize:"10px"}}>
            Open your senses to the natural wonders around you and let yourself.
            </span><br /><br /><br />
            <footer className='blockquote-footer mb-0 mr-0 fs-7'>Megha gowda@yil</footer>
        </div>
    </div></Link>
    <br />
    </>
)
}

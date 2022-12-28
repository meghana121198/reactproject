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
            <h5>Flowers gives birth to a fresh and to a open mind set</h5>
            <h5>Loved the view</h5>
            <span className='font-weight-light fs-6'>
            Open your senses to the natural wonders around you and let yourself become immersed in the superb beauty and splendor of flowers, and the wonders of Scared Geometry.
            </span><br /><br /><br />
            <footer className='blockquote-footer mb-0 mr-0 fs-5'>$anjay Pering@yil</footer>
        </div>
    </div></Link>
    <br />
    
    </>
)
}

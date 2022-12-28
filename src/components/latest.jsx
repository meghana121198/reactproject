import React from 'react'
import '../index.css'
import '../app.css'
import {Link} from 'react-router-dom'

export default function Latest() {
return (
    <Link to='/openview' style={{textDecoration:"none",color:"black"}}>
    <div className='latest'>
        <div className='picl'></div>
        <br/>
        <div className='pad'>
            <h4>Love the nature</h4>
            <h4>It has the power of healing</h4>
            <span className='font-weight-light small'>Nine-year-old Sylvia lives in the country and has a strong connection to animals and nature. One day a young man, a hunter, comes through the area and stays with Sylvia and her grandmother. He is looking for a rare heron to add to his collection.</span>
        </div>
    </div></Link>
)
}

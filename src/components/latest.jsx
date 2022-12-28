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
            <h4>Nature is a teacher</h4>
            <h4>A deeper nature experience</h4>
            <span className='font-weight-light small'>As I sit outside under an old plane tree that I know very well, I get the sense that summer is slowly coming to a close.Time marches on. The seasons change. Spring becomes summer, summer becomes autumn and finally autumn becomes winter. </span>
        </div>
    </div></Link>
)
}

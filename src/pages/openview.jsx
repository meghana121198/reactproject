import React from 'react'
import '../app.css'
import '../index.css'
import Latest from '../components/latest'
import clap from '../img/clap.png'
import share from '../img/share.png'
import img11 from '../img/11.jpg'
import dp1 from '../img/dpimg.png'
import Dpblck from '../components/dpblck'

export default function Openview() {
return (
    <>
    <div className='hde'><br/>
    <span className='lft'>
    <p className='rtt'>The</p>
        <span className='fs-1'>Nature in Mind</span>
    </span>
    <button className='gta'>Click for More</button>
    </div>
    <div className='mrg d-flex flex-row'>
        <div className='offf'  style={{width:"200%"}} >
            <span className="cp"><img src={clap} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.9k
            <br/><br/><img src={share} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;share this article</span>
        </div>  
        <div>  
        <br/><br/>
        <h1 style={{color:"black"}}>Reconnecting with life</h1><br/>
        <div className='icc'></div>
        <br/><br/>
        <div className='bgt'>With Earth Day coming up April 22, people tend to start thinking and talking about nature conservation more and more at this time of year. But our goal is to encourage people to embrace the beauty of nature and wildlife all year around. So when some of our blogging friends discussed having a monthly themed blog carnival, we immediately volunteered to host a Nature Travel round-up this month to draw more attention to the joys of ecotourism.</div>

        <br/><br/>
        <img className='nmn' src={img11} alt=""/><br/><br/><hr/>
        <div className='grid-container'>
        <div>
        <img className='dp' src={dp1} alt=""/>
        </div>
        <div>
            <span className='hhh'>
            <b>Meghana V Gowda</b><br/>
            <span>whole of nature and its beauty.</span></span>
        </div>
        </div>

        
    </div>
    </div><br /><br/><hr></hr><br/><br/>
    <div className='d-flex justify-content-between bggg gfh '>
    <Latest /><Latest /><Latest />
    </div><br />
    <div id='bch11'>
    <div className='d-flex justify-content-between bggg' id='bch'>
        <Dpblck/><Dpblck/><Dpblck/>
    </div></div><br /><br/><br/>
    </>
)
}

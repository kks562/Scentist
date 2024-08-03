import React, { useEffect, useState } from 'react'
import img1 from '../assets/i5.jpg';
import img2 from '../assets/i8.jpg';
import img3 from '../assets/h.jpg';
import video from '../assets/pern2.mp4';

const Background = ({play,count,setCount}) => {
      

      useEffect(()=>{
        const interval=setInterval(()=>{
            setCount((prev)=>prev===2?0:prev+1);
        },3000)

        return()=>clearInterval(interval);
      },[]) 
    
       if(play)
       {
        return(
        <video className='background' autoPlay loop muted>
            <source src={video} type='video/mp4'/>
        </video>
       
    );
}
else if(count===0)
{
    return <img src={img1}></img>
}
else if(count===1)
{
    return <img src={img2}></img>
}
else if(count===2)
{
    return <img src={img3}></img>
}
}

export default Background
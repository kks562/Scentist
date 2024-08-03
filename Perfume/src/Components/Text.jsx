import React from 'react'
import './Text.css';

const Text = ({play,count,data,setCount,setPlay}) => {
    

  return (
    <><h1>{data.text1}</h1>
    <br></br>
    <h1>{data.text2}</h1></>
        
    
  )
}

export default Text
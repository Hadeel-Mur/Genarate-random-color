import React from 'react'
import { useState, useEffect } from 'react';

function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000')

    function randomColorUtility(length){
        return Math.floor(Math.random()* length)
    }

    function createRandomHexColor(){
       const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
       let hexColor = "#";

       for (let i =0; i< 6; i++){
        hexColor += hex[randomColorUtility(hex.length)]
       }
    }

    function createRandomRgbColor(){
        
    }

  return (
    <div 
     style ={{
        width: "100vw",
        height: "100vh",
        background: color,
     }}
    >
        <button onClick={()=> setTypeOfColor('hex')} >Create HEX Color</button>
        <button onClick={()=> setTypeOfColor('rgb')} >Create RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? createRandomHexColor : createRandomRgbColor} >Create HEX Color</button>
    </div>
  )
}

export default RandomColor;
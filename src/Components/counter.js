import React from "react"
import { useState,useRef } from "react";

let Counter=()=>{
let [count1,setcount1]=useState(1);
let count2=useRef(100);
console.log(count2)
    return(
        <div>
            <h1>{count1}</h1>
            <h1>{count2.current}</h1>
            <button onClick={()=>setcount1(count1+1)}>increasecount1</button>
            <button onClick={()=>
            {
                count2.current=count2.current+1;
            }}>increasecount2</button>
        </div>
    )
}

export default Counter;
import React from "react";
import { useState,useRef } from "react";

const From=()=>{
let [userdata,setuserdata]=useState("")
let userinput=useRef("")
return(
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault();
            setuserdata(userinput.current);
           userinput.current=""
        }}>
            <input type="text" onChange={(e)=>{
                userinput.current=e.target.value;
            }} ></input>
            <button>submit</button>
            
        </form>
        <h3>userinput   {userdata}</h3>
    </div>
)
}


export default From;
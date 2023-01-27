import React,{useState} from "react";

export const Contador = ()=>{

    const [count,setCount]= useState(0);

    return(
        <div>
            <p>Has hecho click {count}</p>
            <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
    )
}
import BarraNav from "./BarraNav";
import { useState } from "react";


export default function Deportes(){
    let deportes = ["https://placeimg.com/200/200/sport","https://placeimg.com/200/200/sport"]
    let array = deportes.map(datos =>(


        <img src={datos}/>
    ));
    const[count,setCount]= useState(0);

    let contenedor;

    if(count%2==0){
        contenedor = <p style={{color:'green'}}>HOLAA A TODOS </p>
    }else{
        contenedor = <p style={{color:'red'}}>HOLAA A TODOS </p>
    }

    return(
        <>
        <BarraNav></BarraNav>
        <div>{array}</div>
        {contenedor}
        <button onClick={()=>setCount(count+1)}>Pinchar</button>
        </>
    )
}
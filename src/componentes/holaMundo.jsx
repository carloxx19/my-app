function HolaMundo(){
    return(
        <div>hola mundo</div>
    )
}

export default HolaMundo;

/*
export const HolaMundo = ()=>{
    return(
        <div>Hola mundo</div>
    )
}

*/

export const Variable = ()=> {
    let text = "hola";
    return(
        <h1>{text}</h1>
    )
}

export const Variable2 = ()=> {
    let persona = {
        nombre: "aa",
        apellido: "ddd"
    }
        

    return(
        <h1>{persona.nombre}</h1>
    )
}
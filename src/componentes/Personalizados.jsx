import styled from "styled-components";
import PropTypes from "prop-types";

export const StyledButton = styled.button`
color:black;
border: 2px solid black;
background-color: yellow;
margin:20px;
`;

export const StyledDiv = styled.div`
width:50%;
height: 200px;
border: 3px dotted black;
background-color:Black;
`;

export function Contenedor(){
    return(
    <>
    <StyledDiv></StyledDiv>
    <StyledButton>botn</StyledButton>
    </>
    )
}

export function Button(props){
    return(
        <>
        <StyledButton>{props.texto}</StyledButton>
        <p>{props.subtitulos}</p>
        </>
    )
}

Button.propTypes ={
    texto:PropTypes.string,
    subtitulos:PropTypes.string.isRequired,
}

Button.defaultProps ={
    subtitulos:"asfsafsdfsdf",

}


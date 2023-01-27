import logo from './logo.svg';
import './App.css';
import HolaMundo from './componentes/holaMundo';
import { Variable } from './componentes/holaMundo';
import { Variable2 } from './componentes/holaMundo';
//import { StyledButton } from './componentes/Personalizados';
//import { StyledDiv } from './componentes/Personalizados';
import { Contenedor,Button} from './componentes/Personalizados';
import { Contador } from './ContadorUserState';

function App() {
  return (
   <>
   { /*<HolaMundo/>*/}
   <Contenedor/>
   
   <h1>titulof</h1>
   <Variable/>
   <Variable2/>
   <Contador/>



<Button texto="hola" subtitulos="esto es algo"></Button>

   </>
  );
}

//cortado de app
//<StyledDiv> asf</StyledDiv>
//<StyledButton>pincha</StyledButton>

export default App;

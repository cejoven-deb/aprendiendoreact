import logo from './logo.svg';
import './App.css';
function Holamundo(nombre){
  return nombre;
  var presentacion = <h2>Hola, me llamo {nombre}</h2>
  return presentacion; /* Para que me devuelva los valores de la variable presentación*/


}

function App() {
  var nombre ="Carlos Eduardo Joven Garcia";
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Este es el primer curso de react desde cero
        </p>
        {Holamundo((nombre))}
        {alert("Hola Mundo con React")}
        <a
       
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

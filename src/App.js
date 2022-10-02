import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor'>

        <h1>Esto es lo que dicen nuestros alumnos de FreeCodeCamp</h1>

        <Testimonio 
        nombre="Ernesto Benedictino"
        ocupacion="Youtuber famoso"
        imagen="1"
        />

        <Testimonio
        nombre="Patricia Bonwikz"
        ocupacion="Analista de datos"
        imagen="2"
        />

        <Testimonio
        nombre="Emma Stalone"
        ocupacion="Ingeniera de Software"
        imagen="3"
        />

      </div>
      
    </div>
  );
}

export default App;

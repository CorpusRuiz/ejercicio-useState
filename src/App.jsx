import { useState } from 'react'
import cocretainc from './assets/cocretainc.jpg'
/*import lodearriba from './top'*/
import './App.css'

function App() {
  let [numberOne, setNumberOne] = useState()
  let [numberTwo, setNumberTwo] = useState()
  let [result, setResult] = useState(0)
  // const [count, setCount] = useState(0)
  // const [agrupar, sumarMas] = useState(1)
  // const [contabilizar, quitar] = useState(0)

    var movidas = [
      { name: 'Juan', lastName: 'Perez', hobbies: ['fútbol', 'lectura'], age: 25 },
      { name: 'María', lastName: 'González', hobbies: ['pintura', 'música'], age: 30 },
      { name: 'Pedro', lastName: 'López', hobbies: ['senderismo', 'cine'], age: 28 },
      { name: 'Ana', lastName: 'Martínez', hobbies: ['baile', 'viajar'], age: 22 },
      { name: 'Carlos', lastName: 'Sánchez', hobbies: ['cocina', 'videojuegos'], age: 35 },
      { name: 'Sofía', lastName: 'Ruiz', hobbies: ['natación', 'teatro'], age: 29 },
      { name: 'Luis', lastName: 'Hernández', hobbies: ['jardinería', 'patinar'], age: 31 },
      { name: 'Elena', lastName: 'Díaz', hobbies: ['fotografía', 'montañismo'], age: 27 },
      { name: 'Javier', lastName: 'Torres', hobbies: ['ajedrez', 'surf'], age: 33 },
      { name: 'Laura', lastName: 'Romero', hobbies: ['yoga', 'ciclismo'], age: 26 },
      { name: 'David', lastName: 'Gómez', hobbies: ['escritura', 'musculación'], age: 34 },
      { name: 'Isabel', lastName: 'Jiménez', hobbies: ['piano', 'voleibol'], age: 23 },
      { name: 'Miguel', lastName: 'Alvarez', hobbies: ['cocina', 'pintura'], age: 37 },
      { name: 'Carmen', lastName: 'Moreno', hobbies: ['jardinería', 'cine'], age: 24 },
      { name: 'Alejandro', lastName: 'Dominguez', hobbies: ['viajar', 'fotografía'], age: 30 },
      { name: 'Rosa', lastName: 'Ortega', hobbies: ['bailar', 'leer'], age: 32 },
      { name: 'Francisco', lastName: 'Vargas', hobbies: ['música', 'senderismo'], age: 28 },
      { name: 'Lucía', lastName: 'Ramos', hobbies: ['gimnasia', 'ciclismo'], age: 26 },
      { name: 'Antonio', lastName: 'Castillo', hobbies: ['cocinar', 'pintura'], age: 29 },
      { name: 'Eva', lastName: 'Iglesias', hobbies: ['cine', 'teatro'], age: 31 },
      { name: 'José', lastName: 'Fernández', hobbies: ['fútbol', 'baloncesto'], age: 27 },
      { name: 'Teresa', lastName: 'Serrano', hobbies: ['pintura', 'música'], age: 33 },
      { name: 'Manuel', lastName: 'Garrido', hobbies: ['cocina', 'fotografía'], age: 30 },
      { name: 'Rocío', lastName: 'Cortés', hobbies: ['patinar', 'leer'], age: 28 },
      { name: 'Pablo', lastName: 'Marín', hobbies: ['surf', 'senderismo'], age: 25 },
      { name: 'Beatriz', lastName: 'Luna', hobbies: ['piano', 'yoga'], age: 29 },
      { name: 'Diego', lastName: 'Ibáñez', hobbies: ['ciclismo', 'música'], age: 34 },
      { name: 'Nuria', lastName: 'Gil', hobbies: ['teatro', 'cocina'], age: 27 },
      { name: 'Rubén', lastName: 'Sanz', hobbies: ['fútbol', 'lectura'], age: 32 },
      { name: 'Cristina', lastName: 'Herrero', hobbies: ['bailar', 'pintura'], age: 26 }
    ];
  
    function suma (a, b) {      
      setResult(parseInt(numberOne) + parseInt(numberTwo))      
    }
    
    function resta (a, b) {
      setResult(parseInt(numberOne) - parseInt(numberTwo)) 
    }
    
    function  multiplicacion(a, b){
      setResult(parseInt(numberOne) * parseInt(numberTwo)) 
    }    

    function division (a, b) {
      setResult(parseInt(numberOne) / parseInt(numberTwo)) 
    }

    var almacenamiento = [];
    for (var i = 0; i < movidas.length; i++) {
      almacenamiento.push(
        <div key={i}>
          <p>Nombre: {movidas[i].name}</p>
          <p>Apellidos: {movidas[i].lastName}</p>
          <p>Hobbies: {movidas[i].hobbies.join(', ')}</p>
          <p>Edad: {movidas[i].age}</p>
        </div>
      );
    }

  return (  
    <div className="envoltura">
      <img src={cocretainc} className="logo" alt="Logo" />
      {almacenamiento}
      <h2>Resultado:{result}</h2>
      <form onSubmit={(e) => {
            e.preventDefault();
        }}>
        <input 
          type='number'
          value={numberOne}
          onChange={(e) => setNumberOne(e.target.value)}
          placeholder='add a number'
        />
        <input 
          type='number'
          value={numberTwo}
          onChange={(e) => setNumberTwo(e.target.value)}
          placeholder='add a number'
        />

        
        <button type="button" onClick={suma}>Sumar</button>
        <button type="button" onClick={resta}>Restar</button>
        <button type="button" onClick={multiplicacion}>Multiplicar</button>
        <button type="button" onClick={division}>Dividir</button>
        </form>
            
        <div className='footer'>
          <ul>
            <li>Todos los derechos reservados.</li>
            <li>Coquetas INC ©</li>
            <li>Dirección: Simancas (Madriz)</li>
            <li>Teléfono: 917335673 - 635444912</li>
            <li>Email: croquetasINC@hotmail.com</li>
          </ul>
        </div>
    </div>
  )
}

export default App

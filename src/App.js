import * as React from 'react';
import  { useEffect } from 'react';

import './App.css';
import {ResponsiveAppBar} from './components/Barraprincipal'
import {RecipeReviewCard} from './components/Card'
import {Whatssap} from './components/Whatssap'
import { useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/material/styles';




function App() {


  const isMobile = useMediaQuery('(max-width:600px)');
  const moldes =
  [{id:1,nombre:" Molde Tipo laja",url:"https://ingyanez144.github.io/imprerenta/imagenes/moldes/cuadros.jpeg",precio:300,desc:"Molde tipo laja para todo tipo de pisos."},
  {id:2,nombre:" Molde Tipo laja cuadro 30CM ",url:"https://ingyanez144.github.io/imprerenta/imagenes/moldes/cuadrosbonitos.jpeg",precio:300,desc:"Molde tipo laja para todo tipo de pisos."},
  {id:3,nombre:"Molde Tipo duela 15x20cm ",url:"https://ingyanez144.github.io/imprerenta/imagenes/moldes/duela.jpeg",precio:300,desc:"Molde tipo laja para todo tipo de pisos."},
  {id:4,nombre:"Molde pata de elefante",url:"https://ingyanez144.github.io/imprerenta/imagenes/moldes/elefante.jpeg",precio:300,desc:"Molde tipo laja para todo tipo de pisos."},
  {id:5,nombre:"Molde tipo ladrillo",url:"https://ingyanez144.github.io/imprerenta/imagenes/moldes/ladrillo.jpeg",precio:300,desc:"Molde tipo laja para todo tipo de pisos."},
  {id:6,nombre:"Molde pata de elefante",url:"https://ingyanez144.github.io/imprerenta/imagenes/moldes/piedra.jpeg",precio:300,desc:"Molde tipo laja para todo tipo de pisos."}];

  const [carrito, setCarrito] = React.useState([]);
  const [productos, setProductos] = React.useState([]);

  useEffect(() => {
    console.log("Nuevo estado del carrito:", carrito);
    setProductos(carrito.length)
    console.log(carrito.length)
  }, [carrito]);

  const addItem =async (newItem) => {
    try {
        setCarrito(prevCarrito  => (
          [  ...prevCarrito,newItem]));
      console.log("se imprime carrito")
       console.log(carrito)
    } catch (error) {
      console.log('Error al agregar item:', error);
    }
  };

  return (
    <div className="App">
      <header className='marginbottom'>
        <ResponsiveAppBar products={productos}/>
        </header>
        <body >
          <div className="marginbody">
              <div className={isMobile?'conteineritemMovil':'conteineritem'}>
            {moldes.map((itemMolde)=>(
              <RecipeReviewCard key={itemMolde.id} molde={itemMolde} setCar={addItem} />
            ))}    
            </div>
          </div>
        </body>
      <body>
        <Whatssap esMovil={isMobile}></Whatssap>
      </body>
    </div>
  );
}

export default App;

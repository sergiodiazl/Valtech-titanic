/**
 * Se desea obtener una tabla que contenga el listado de personas que viajaron al titanic.
 * En la tabla se debe imprimir el nombre de la persona, la edad y el sexo.
 * Se requiere un campo de texto para poder filtrar las personas por nombre
 * Se requiere un filtro slider para rango de edades. Se debe poder controlar minimo y maximo de rango con el slider.
 * Se requieren dos checkbox para filtrar hombres y mujeres.
 * La misma tabla debe estar paginada. Opciones de 5, 15, 20 resultados.
 * Se debe poder navegar entre cada pagina de la tabla con dos botones.
 * Aplicar una UI a gusto.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

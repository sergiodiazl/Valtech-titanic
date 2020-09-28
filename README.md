# Valtech Challenge -Titanic
## Indice
* [Introduccion](#introduccion)
* [Tecnologia](#tecnologia)
* [Instalacion](#instalacion)
* [Vista Previa](#vista-previa)
* [Opinion](#opinion)


## Introducción
Este es un desafio técnico propuesto por Valtech para el rol de react dev. Consiste en programar una aplicación que cumpla los siguientes requisitos:
 * Se desea obtener una tabla que contenga el listado de personas que viajaron al titanic.
 * En la tabla se debe imprimir el nombre de la persona, la edad y el sexo.
 * Se requiere un campo de texto para poder filtrar las personas por nombre
 * Se requiere un filtro slider para rango de edades. Se debe poder controlar mínimo y máximo de rango con el slider.
 * Se requieren dos checkbox para filtrar hombres y mujeres.
 * La misma tabla debe estar paginada. Opciones de 5, 15, 20 resultados.
 * Se debe poder navegar entre cada pagina de la tabla con dos botones.
 * Aplicar una UI a gusto.
	
## Tecnología
Trate de usar la menor cantidad de dependencias para el proyecto
* React 
* Styled components para escribir el css a partir de JavaScript
* Fuentes de Google fonts
*Configuración de proyecto y código boilerplate a partir de create-react-app

La UI se ajusta a las pantallas , cumple con los criterios de accesibilidad .La auditoria con Google Lighthouse dio [puntuaciones muy altas en todas las categorías ](#vista-previa)

	
## Instalación
Para Correr la instalación en modo dev ,primero hay que clonar el repositorio y ejecutar 
```
$ yarn install
$ yarn start
```
Para  crear los archivos de build que pueden ser servidos
```
$ yarn build
```
## Vista Previa

Captura de pantalla en Google Chrome,a la izquierda se pueden ver los resultados de la auditoria Lighthouse de Chrome.La auditoria se hizo a partir de los archivos de build en un navegador en modo incognito con extensiones desactivadas

![screenshot](/screenshot.png?raw=true  "Optional title")
 ## Opinion

Los requisitos me parecieron justos . Lo más difícil fue  el slider, porque no recuerdo haber escrito un componente similar en vez de usar alguna librería.

El slider nativo solo soporta un valor, para tener un valor máximo y mínimo use dos sliders que tienen la misma posición y les quite el estilo asi el div que los contiene da la sensación de ser una barra donde se mueven los indicadores, con React se pueden detectar los cambios en los valores y ajustar los indicadores para que estos funcionen de la manera esperada(el indicador de mínimo nunca apuntara a un valor mayor que el indicador de máximo).Creo que esta parte consumió mas tiempo que el resto del proyecto combinado . 

Un detalle que casi se me pasa fue el de ajustar el el numero de la tabla de información cuando se cambia la paginación y no solo mostrar la cantidad de elementos correspondiente.Pude solucionar ese problema  gracias a recordar un comentario que me hizo Cristian,una de las personas que me entrevistó,respecto al hook useRef de React para almancenar valores .

Ejemplo

 Pagina:3 paginación :5 por pagina personas de 10 a 14(10,11,12,13,14)
 => Cambio paginación a 10 por pagina
 => El punto de inicio sigue siendo 10 pero la pagina ahora cambia a 2

Espero que les guste

Saludos,Sergio
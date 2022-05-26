
# Automatizacion Web December labs

Proyecto de automatizacion web para el formulario careers 

## Pre-Requisitos

Tener NodeJS instalado 


## Instalacion

Install my-project with npm

```bash
  npm install
```
## Flujos automatizados

Se automatiza el flujo de completar el formulario Join us con los campos requeridos y otro flujo con todos los campos disponibles incluida la subida de un archivo de ejemplo


## Descripcion de la solucion

Se realiza un unico archivo de test llamado webTest.js donde estan alojados los flujos automatizados, ademas tenemos las carpetas Data y Selectos donde se va a guardar informacion correspondiente a los mismos

Selectors: contiene los JSON con los selectores a modo de Repositorio para en caso de que cambien los id o los diferentes datos de los elementos solo haya que modificar ese archivo y no los test y asi reducir el tiempo de mantenibilidad.

Data: Se espera que contenga datos que sean relevantes para los test pero puedan ser cambiados, en este caso el archivo de ejemplo pdf que se sube en el formulario



## Running Tests

Para ejecutar los test en los navegadores chrome y firefox el comando es:

```bash
  npx nightwatch webTest.js --env chrome,firefox
```


## Authors

- [@MarcosManicera](https://www.github.com/mmanicera)


## Mejoras a futuro

- Falta flujo "negativo" donde se chequea mensaje de error en caso de no enviar los campos requeridos.

- Agregar testing visual para reforzar pruebas de cara al usuario


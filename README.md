# DashboardCOVID19
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Software necesario para la ejecución
    - node.js
    - npm

## Como ejecutar aplicación en ambiente local

Ir a la carpeta raiz del proyecto y ejecutar el comando `npm run start`. Luego se abrirá automáticamente en un browser la url del sitio fucionando.

## Asunciones y Premisas

Pude verificar ni bien probé las apis de referencia que algunas de ellas tenian bloqueado el acceso desde el localhost (no tenian configurado CORS) y por mas que ponga la configuración pertinente en el header de mis llamados eso no hace nada debido a que el bloquedo también debe sacarse del lado del servidor donde están dichas apis. Así que armé un pequeño backend con node.js y express el cual utilizo básicamente de proxy para poder operar con los servicios en cuestión. Los servicios que no tenian problemas de CORS no los agregué al proxy comentado.

El servidor node que agregué se levanta junto con la web Angular al ejecutar el comando del punto anterior.

Al ver que toda la info que se pedía en el enunciado no me los proporcionaban las apis de referencia tuve que buscar alguna otra api que me dé el país donde estoy ejecutando la aplicación y datos de dicho pais (capital, moneda e idioma)

Noté que los distintos servicios de las distintas apis tenían tiempos bastante diferentes de respuesta así que el diseño del sitio lo pensé teniendo en cuenta esto poniendo en distintas cards los distintos datos con loadings individuales en cada uno para que estos se puedan ir cargando a medida que los servicios responden así de esa forma no penalizar a los servicios más rápidos.

Por cuestiones de tiempo, no he realizado algunas cosas que me hubiera gustado agregar como por ej. Segurizar el sitio con SSL, y configurar todo para poder dejar una versión productiva lista para ser subida a un servidor. Y el servidor de node que armé también está algo elemental, se podría dejar un poco mas robusto para que escale en el caso de que esta app crezca.


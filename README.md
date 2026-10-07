1. Portada, nombre del proyecto, integrantes del equipo y descripción breve.

2. Explicación y documentación: qué framework CSS usaron, cómo fluye el login hacia el sistema, cómo se pasa el nombre de usuario del login al navbar, cuáles son los métodos principales.

3.Proceso de creación, paso a paso de cómo armaron el login, el sidebar, el navbar con el usuario, el número de control y el modal, con capturas.

4. Capturas de pantalla del flujo completo funcionando.

# Actividad cinco - Creación de un login funcional con acceso a un sistema simulado.
## Se va a crear un login con funcionalidades de la utilería creada con anterioridad.
Todo lo anterior se va a documentar en GitHub (en un README) y se publicara en Pages siguiendo la siguiente estructura:
***
#### Elaborado por: David Efraín José Ramos NL 19  y Álvarez Mora Jordi Moisés.
![Diseño de la estructura](img/prueba3.png)
## Descripción breve:

***
### Explicación y documentación:
#### Creación del login (con capturas):
Para empezar, el login se creó a partir de una sección principal y se dividió en dos secciones. Un panel derecho y un panel izquierdo con sus respectivas clases en la hoja de estilos, llamadas:
Principal: auth-layout
Panel izquierdo: brand-panel
Panel derecho: form-panel

![principal](img/principal.png)

Esta declarado de la siguiente manera desde el HTML:

![html1](img/html1.png)

Sus formatos en la hoja de estilos son:

![css1](img/css1.png)
![css2](img/css2.png)
![css3](img/css3.png)

Con esta parte del código podemos poner un espacio publicitario estático en el panel izquierdo:

![html2](img/html2.png)

En nuestro caso pusimos:

![Panel izquierdo](img/imagen1.png)

Con este otro div pusimos una pequeña señal:

![html3](img/html3.png)

Así se ve en el panel izquierdo:

![xd](img/Img2.png)

Todo en conjunto en el panel izquierdo se ve así:

![Panel izquierdo](img/imagen3.png)

Ahora vamos con el panel derecho:

![Panel derecho](img/imagen4.png)

Este tiene un pequeño logo el cual al inicio no funcionaba porque estaba muy desfazado. 

Este esta declarado en el HTML de esta manera y tiene formato en la hoja de estilos.



Ahora continuamos con las etiquetas principales del panel izquierdo, las cuales están declaradas de la siguiente manera en el HTML:

![html5](img/html5.png)

Se ve de la siguiente manera:

![Panel derecho](img/imagen5.png)

La siguiente parte es crucial ya que envía una verificación para saber qué información será mostrada en la pantalla:

![html5](img/html5.png)

Como se puede mostrar son dos botones los cuales tienen estilos y muestra diferente información.
Se ven de la siguiente manera:

![Panel derecho](img/imagen6.png)

La siguiente parte es el formulario que cuenta con tres conjuntos como de cuadros de texto para enviar la información a un js y ejecutar funciones:

![html6](img/html6.png)

Es importante mencionar que en el apartado de contraseña declare un hipervínculo que simula la situación de cuando alguien olvida su contraseña.

![Panel derecho](img/imagen7.png)

Abajo solo le añadí un texto con dos hipervínculos.

![Panel derecho](img/imagen8.png)

La otra parte crucial de lo que yo hice fueron las validaciones en JavaScript. Me encargue de validar que el correo electrónico fuera correcto, que la contraseña tuviera máximo ocho caracteres con al menos un carácter especial y que en el nombre no pudiera meter números. Igual desde el JavaScript hice el cambio dinámico entre registrarse e iniciar sesión.

Las validaciones que yo añadí de mi utilería fueron las siguientes:

![js2](img/js2.png)
![js3](img/js3.png)

Así se ven los ejemplos desde consola:

![consola1](img/consola1.png)

La siguiente parte del código es la que se encarga de validar los datos dados desde el HTML y devuelven un span.

![js4](img/js4.png)

Se ve de la siguiente manera:

![General](img/imagen9.png)

Por último, cree un nabar en el index. Apenas lo modificare:

![General](img/imagen10.png)

Esta parte fue declarada de la siguiente manera y fue modificada desde la hoja de estilos:

![html7](img/html7.png)


#### Creación del sidebar (con capturas):
#### Creación del navar con el usuario, el número de control y el modal (con capturas):
 
### Capturas de pantalla del flujo completo funcionando:


#### Elaborado por: David Efraín José Ramos NL 19

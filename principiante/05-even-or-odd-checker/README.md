# Ejercicio 5: Even Or Odd Checker (Verificador Par o Impar)

## 📝 Descripción

Construir una pequeña utilidad que permita al usuario ingresar un número en un campo de texto. Al presionar un botón, la aplicación determinará si el número es par o impar y mostrará el resultado en la pantalla.

## 🎯 Objetivos de Aprendizaje

* **Manejo de Eventos de Clic:** Capturar la interacción del usuario con un botón para ejecutar una acción.
* **Lógica Condicional:** Aplicar una estructura `if/else` o un operador ternario para tomar una decisión basada en el estado.
* **Renderizado Condicional:** Mostrar un mensaje u otro dependiendo del resultado de una evaluación lógica.
* **Validación de Entrada:** (Opcional) Asegurarse de que el valor introducido es realmente un número.

## ⚙️ Instrucciones

1.  **Estructura Visual (Los Componentes):**
    * Un elemento `<input type="number">` para que el usuario ingrese el número.
    * Un `<button>` con el texto "Verificar".
    * Un elemento de texto (ej. `<p>`) donde se mostrará el resultado ("Es Par", "Es Impar" o un mensaje inicial).

2.  **Lógica de Estado (El "Cerebro"):**
    * Necesitarás una variable de estado para el número ingresado, `numeroInput`.
    * También necesitarás una variable de estado para el resultado, `resultadoTexto`, que almacenará el mensaje a mostrar.

3.  **Flujo de Interacción (La "Magia"):**
    * El valor del `input` debe estar vinculado a la variable de estado `numeroInput`.
    * Añade un manejador de eventos de clic al botón "Verificar".
    * Cuando se hace clic en el botón:
        1.  Lee el valor actual de `numeroInput`.
        2.  Conviértelo a un número entero.
        3.  Usa el operador módulo (`%`) para verificar si es par.
        4.  Actualiza la variable `resultadoTexto` a "Es Par" o "Es Impar" según corresponda.
    * El cambio en `resultadoTexto` hará que la interfaz se actualice y muestre el mensaje correcto.

## 💡 Recomendaciones

* **Operador Módulo:** El operador `%` es clave aquí. Devuelve el residuo de una división. Un número es par si el residuo de dividirlo por 2 es 0.
* **Vanilla JS:** Mantén el valor del input y el resultado en variables. Añade un `event listener` de `'click'` al botón. En el callback, lee el valor del input, haz el cálculo, y actualiza el `innerText` del elemento de resultado.
* **React/Vue/Angular:** Usa un estado para el valor del input (`numeroInput`) y otro para el resultado (`resultadoTexto`). El `onChange` del input actualiza `numeroInput`. El `onClick` del botón ejecuta la lógica y actualiza `resultadoTexto` usando su función `set`. El elemento de resultado simplemente renderiza el valor de `resultadoTexto`.

## 🎬 Resultado Esperado

![Video de demostración](./05-even-or-odd-checker.gif)

# Ejercicio 1: Input Sumator (Sumador con Entradas)

## 📝 Descripción

Crear una interfaz de usuario simple que contenga dos campos de entrada (`input`) numéricos. A medida que el usuario escribe en ellos, el sistema debe calcular la suma de ambos números y mostrar el resultado en tiempo real en la pantalla.

## 🎯 Objetivos de Aprendizaje

* **Manejo de Estado:** Aprender a gestionar y sincronizar el valor de múltiples fuentes de entrada (los dos inputs).
* **Manejo de Eventos:** Capturar el evento de cambio (`onChange`, `onInput`) en los campos de texto para disparar una actualización.
* **Renderizado de Datos:** Mostrar en la UI el resultado de un cálculo derivado del estado actual.
* **Conversión de Tipos:** Entender la necesidad de convertir los valores de los inputs (que son `string` por defecto) a números (`number`) para poder realizar operaciones matemáticas.

## ⚙️ Instrucciones

1.  **Estructura Visual (Los Componentes):**
    * Necesitarás dos elementos `<input type="number">` para que el usuario ingrese las cifras.
    * Un elemento de texto (como un `<span>`, `<p>` o `<h1>`) para mostrar el resultado de la suma.

2.  **Lógica de Estado (El "Cerebro"):**
    * Debes mantener dos variables de estado, por ejemplo `numero1` y `numero2`, que almacenen los valores actuales de cada `input`. Inicialízalas en `0`.
    * Crea una tercera variable (o un cálculo derivado) que represente la `suma`. Esta será simplemente `numero1 + numero2`.

3.  **Flujo de Interacción (La "Magia"):**
    * Asocia un manejador de eventos a cada `input`. Este evento se activará cada vez que el usuario escriba algo.
    * Dentro del manejador de eventos, lee el valor del `input`, conviértelo a un número y actualiza la variable de estado correspondiente (`numero1` o `numero2`).
    * El cambio en el estado provocará que la interfaz se vuelva a renderizar (automáticamente en frameworks, manualmente en Vanilla JS), mostrando el nuevo valor de la `suma`.

## 💡 Recomendaciones

* **Parseo de Números:** Recuerda que el valor de un `input` es siempre un `string`. Usa `parseInt()` o `parseFloat()` para convertirlo a un número antes de sumar. Considera manejar el caso de que el `input` esté vacío (podrías interpretarlo como `0`).
* **Vanilla JS:** Selecciona los inputs y el elemento de resultado con `document.querySelector`. Añade un `event listener` (`'input'`) a cada input. Dentro del callback, lee los valores de ambos inputs, súmalos y actualiza el `innerText` del elemento de resultado.
* **React/Vue/Angular:** Utiliza variables de estado (ej. `useState` en React) para `numero1` y `numero2`. Vincula estas variables a los `value` de los inputs y usa sus funciones de `onChange` para actualizar el estado. El resultado se puede renderizar directamente en el JSX/template como `{numero1 + numero2}`.

## 🎬 Resultado Esperado

![Video de demostración](./01-input-sumator.gif)

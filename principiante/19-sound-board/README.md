# Ejercicio 19: Sound Board (Tablero de Sonidos)

## 📝 Descripción

Crear una interfaz con una serie de botones, donde cada botón, al ser presionado, reproduce un sonido diferente.

## 🎯 Objetivos de Aprendizaje

* **Interacción con APIs del Navegador:** Aprender a controlar la reproducción de audio a través de la API de Audio de HTML5.
* **Manejo de Eventos:** Reaccionar a eventos de clic del usuario para disparar acciones.
* **Mapeo de Datos a UI:** Asociar un conjunto de datos (una lista de sonidos) a un conjunto de elementos visuales (botones).
* **Gestión de Efectos de Sonido:** Implementar lógica para manejar la reproducción de audio.

## ⚙️ Instrucciones

1.  **Estructura Visual y de Datos:**
    * **Datos:** Define un array `sounds` con los nombres de tus archivos de sonido.
    * **`SoundButton`:** Un componente para un botón individual.
    * **`Soundboard`:** Renderiza una lista de `SoundButton`.
    * **Elementos de Audio:** Incluye una etiqueta `<audio>` por cada sonido, cada una con un `id` único y el `src` correspondiente.

2.  **Lógica de Estado (El "Cerebro"):**
    * Para la funcionalidad básica, no se necesita un estado complejo. La lógica es imperativa.
    * Para una funcionalidad más avanzada, podrías tener una variable `nowPlaying` que guarde una referencia al audio en reproducción.

3.  **Flujo de Interacción (La "Magia"):**
    * El `Soundboard` renderiza un `SoundButton` por cada sonido.
    * Cada `SoundButton` tiene un manejador de eventos `onClick`.
    * **Al hacer clic:**
        1.  La función de manejo (`playSound`) identifica qué sonido reproducir.
        2.  Encuentra el elemento `<audio>` correspondiente en el DOM (usando su `id`).
        3.  **Lógica Opcional:** Si hay un `nowPlaying`, se le pausa (`nowPlaying.pause(); nowPlaying.currentTime = 0;`).
        4.  Se llama al método `.play()` en el nuevo elemento de audio.
        5.  Se actualiza la referencia de `nowPlaying`.

## 💡 Recomendaciones

* **HTML5 `<audio>`:** La etiqueta `<audio>` es suficiente y fácil de usar para este ejercicio.
* **Web Audio API:** Para un control más avanzado (efectos, visualizadores), investiga la **Web Audio API**.
* **Vanilla JS:** Añadirías un `event listener` a cada botón. Dentro del callback, usarías un `id` o un `data-attribute` del botón para encontrar el `<audio>` correspondiente y controlar su reproducción.
* **React/Vue/Angular:** Puedes crear un componente `SoundButton` que reciba el nombre del sonido como prop. Dentro, podrías tener una referencia a su elemento `<audio>` (con `useRef` o `ref`) o llamar a una función global que gestione la reproducción.

## 🎬 Resultado Esperado

![Video de demostración](./19-soundboard.gif)
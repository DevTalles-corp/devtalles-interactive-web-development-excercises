# Ejercicio 16: Character Counter (Contador de Caracteres)

## 📝 Descripción

Crear un componente que consiste en un área de texto (como `<textarea>`) y un contador que muestra en tiempo real cuántos caracteres ha escrito el usuario, y opcionalmente, cuántos le quedan hasta un límite máximo.

## 🎯 Objetivos de Aprendizaje

* **Formularios Controlados:** Entender el patrón de vincular el valor de un campo de entrada a una variable de estado.
* **Manejo de Eventos de Formulario:** Capturar la entrada del usuario en tiempo real (evento `input` o `change`).
* **Estado Derivado:** Calcular valores (caracteres restantes) a partir de una fuente de estado principal sin necesidad de crear más estado.
* **Retroalimentación al Usuario:** Proveer información útil y contextual al usuario mientras interactúa con la aplicación.

## ⚙️ Instrucciones

1.  **Estructura Visual (Los Componentes):**
    * Un campo de texto, preferiblemente un `<textarea>`.
    * Un elemento de texto para mostrar el contador (ej. `<span>` o `<p>`).

2.  **Lógica de Estado (El "Cerebro"):**
    * La única pieza de estado que necesitas gestionar es el contenido del área de texto. Define una variable de estado, `userInput`, inicializada como un string vacío `''`.
    * Define una constante para el límite de caracteres, ej. `const CHAR_LIMIT = 150;`.

3.  **Flujo de Interacción (La "Magia"):**
    * **Vinculación Bidireccional (Two-way Data Binding):**
        1.  El valor del `<textarea>` debe estar vinculado al estado `userInput`.
        2.  Cuando el usuario escribe en el `<textarea>`, se debe disparar un evento que actualice el estado `userInput`.
    * **Cálculo del Contador (Estado Derivado):**
        * El número de caracteres actual se calcula en cada renderizado: `const charCount = userInput.length;`.
        * Los caracteres restantes son: `const remainingChars = CHAR_LIMIT - charCount;`.
    * Muestra estos valores calculados en el elemento contador de la UI.

## 💡 Recomendaciones

* **Componente Controlado:** Este patrón, donde el estado del framework es la "única fuente de la verdad", se llama "componente controlado" (controlled component) y es el enfoque estándar en frameworks como React.
* **Vanilla JS:** Escucharías el evento `input` del textarea. En el callback, obtendrías `textarea.value`, calcularías la longitud y actualizarías manualmente el `textContent` del contador.
* **React:** Usarías el hook `useState` para `userInput`. El `<textarea>` tendría `value={userInput}` y `onChange={(e) => setUserInput(e.target.value)}`.
* **Vue/Angular:** Usarías las directivas `v-model` o `[(ngModel)]` para lograr la vinculación bidireccional de forma mucho más concisa.

## 🎬 Resultado Esperado

![Video de demostración](./16-character-counter.gif)
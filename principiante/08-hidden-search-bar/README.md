# Ejercicio 8: Barra de Búsqueda Oculta

## 📝 Descripción

Crear un componente de búsqueda que inicialmente solo muestra un ícono. Al hacer clic en el ícono, se expande suavemente para revelar un campo de texto (input) y se enfoca para que el usuario pueda escribir inmediatamente. Un segundo clic contrae la barra a su estado inicial.

## 🎯 Objetivos de Aprendizaje

* **Gestión de Estado Booleano:** Utilizar una variable de estado (ej. `isActive`) para controlar si la barra de búsqueda está visible o no.
* **Manejo de Eventos de Clic:** Activar la lógica para mostrar u ocultar el componente mediante un evento de clic.
* **Manipulación de Clases CSS:** Añadir o quitar clases dinámicamente para alterar la apariencia de los elementos.
* **Uso de Transiciones CSS:** Implementar una animación fluida en la propiedad `width` para crear un efecto de expansión y contracción profesional.
* **Manipulación del DOM:** Aprender a enfocar (`focus`) un campo de texto programáticamente para mejorar la experiencia de usuario.

## ✨ ¿Por qué es útil este ejercicio?

Este patrón de UI es un clásico del diseño web moderno, ideal para interfaces minimalistas o con espacio limitado (como barras de navegación).

* **Ahorro de Espacio:** Mantiene la interfaz limpia, mostrando la funcionalidad de búsqueda solo cuando se solicita.
* **Mejora la UX:** La animación suave y el enfoque automático hacen que la interacción se sienta intuitiva y pulida.
* **Combinación de Tecnologías:** Es un ejercicio perfecto que demuestra cómo JavaScript (lógica de estado) y CSS (estilos y animaciones) deben trabajar en conjunto.

## ⚙️ Instrucciones

1.  **Estructura Visual (Los Componentes):**
    * Un contenedor principal (`<div class="search">`).
    * Un campo de texto (`<input type="text" class="input">`) para la búsqueda.
    * Un botón (`<button class="btn">`) que contendrá el ícono de búsqueda (ej: 🔍 o un ícono de Font Awesome).

2.  **Lógica de Estado (El "Cerebro"):**
    * Necesitarás una única variable de estado booleana, `isActive`, que representará si la barra de búsqueda está expandida. Su valor inicial debe ser `false`.

3.  **Flujo de Interacción (La "Magia"):**
    * Asocia una función `handleToggle` al evento de clic del `SearchButton`.
    * **Función `handleToggle`:**
        1.  Invierte el valor del estado `isActive` (de `false` a `true` o viceversa).
        2.  Cuando el estado cambie a `true`, programa una acción para poner el foco en el `SearchInput`.
    * La UI debe reaccionar al cambio de estado, principalmente añadiendo o quitando una clase `"active"` del contenedor `<div class="search">`.
    * **La Lógica CSS:**
        * Por defecto, el `div.search` tiene un ancho pequeño y el `input.input` tiene un ancho de `0` o es casi invisible.
        * Cuando el contenedor tiene la clase `div.search.active`, su ancho se expande.
        * De manera similar, el `input.input` dentro de un `.active` también se expande a su ancho completo.
        * La clave es usar la propiedad `transition: width 0.3s ease;` tanto en el contenedor como en el input para que el cambio de tamaño sea una animación suave.

## 💡 Recomendaciones

* **Transiciones en CSS:** La animación no debe ser manejada por JavaScript. JS solo "enciende el interruptor" (la clase CSS). La transición en la propiedad `width` es la que crea el efecto visual. ¡Es más eficiente y mantiene la separación de responsabilidades!
* **Vanilla JS:**
    * Selecciona los elementos con `document.querySelector('.search')`, `document.querySelector('.btn')`, etc.
    * Añade un `addEventListener('click', ...)` al botón.
    * Dentro del manejador de evento, usa `searchContainer.classList.toggle('active')` para alternar la clase.
    * Justo después de activar, puedes llamar a `inputElement.focus()` para colocar el cursor en el campo de texto.
* **React/Vue/Angular:**
    * Usa una variable de estado: `const [isActive, setIsActive] = useState(false);`.
    * Aplica la clase condicionalmente: `className={\`search \${isActive ? 'active' : ''}\`}` (en React) o `:class="{ 'active': isActive }"` (en Vue).
    * Para el `focus`, necesitarás una referencia al elemento del DOM (ej. `useRef` en React). Usa un `useEffect` o una lógica similar que se dispare cuando `isActive` se vuelva `true` para llamar al método `.focus()` sobre la referencia del input.

## 🎬 Resultado Esperado

![Video de demostración](./08-hidden-search-bar.gif)
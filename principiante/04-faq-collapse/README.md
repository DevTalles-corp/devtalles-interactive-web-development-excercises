# Ejercicio 4: FAQ Collapse (Acordeón de Preguntas)

## 📝 Descripción

Crear un componente de preguntas frecuentes (FAQ) donde una lista de preguntas es visible, y al hacer clic en una de ellas, se revela su respuesta. Nos centraremos en el patrón "acordeón", donde solo una respuesta puede estar visible a la vez.

## 🎯 Objetivos de Aprendizaje

* **Gestión de Estado de una Colección:** Manejar el estado de "abierto/cerrado" para una lista de elementos.
* **Paso de Datos y Funciones (Props):** Entender cómo un componente padre puede pasar datos y funciones a sus hijos.
* **Renderizado Condicional:** Mostrar u ocultar un bloque de contenido (la respuesta) basándose en una condición de estado.
* **Accesibilidad (ARIA):** Implementar atributos ARIA para que el componente sea usable con lectores de pantalla.

## ⚙️ Instrucciones

1.  **Estructura Visual (Los Componentes):**
    * **`FaqItem`:** Un componente que representa un par de pregunta y respuesta.
    * **`FaqContainer`:** Renderiza la lista de componentes `FaqItem`.

2.  **Lógica de Estado (El "Cerebro"):**
    * El `FaqContainer` es el dueño del estado. Define una variable de estado, `openItemId`, para guardar el `id` del `FaqItem` que está actualmente abierto. Su valor puede ser `null` si todos están cerrados.
    * Los datos (preguntas/respuestas) deben estar en un array, donde cada objeto tiene `id`, `question`, y `answer`.

3.  **Flujo de Interacción (La "Magia"):**
    * El `FaqContainer` renderiza un `FaqItem` por cada objeto en el array de datos.
    * A cada `FaqItem` le pasa: un booleano `isOpen` (que es `true` si su `id` es igual al `openItemId` del estado) y una función `onToggle`.
    * El `FaqItem` usa `isOpen` para mostrar u ocultar el contenido de la respuesta.
    * Cuando el usuario hace clic en un `FaqItem`, este llama a la función `onToggle` pasándole su propio `id`.
    * La función en el `FaqContainer` recibe el `id` y actualiza el estado `openItemId`.

## 💡 Recomendaciones

* **Animación:** La transición de abrir/cerrar debe manejarse con CSS, animando la propiedad `max-height`.
* **Accesibilidad:** Es crucial. El botón debe tener `aria-expanded` (vinculado al estado `isOpen`). El panel de la respuesta debe tener un `id` y el botón debe apuntar a él con `aria-controls`.
* **Vanilla JS:** Seleccionarías todos los elementos de pregunta. Al hacer clic, buscarías el panel de respuesta asociado y le añadirías/quitarías una clase `.open`. Para el modo acordeón, tendrías que cerrar todos los demás paneles primero.
* **React/Vue/Angular:** Este es un caso de uso clásico para "levantar el estado" (`lifting state up`). El estado vive en el padre y los hijos son componentes de presentación que reflejan las propiedades que reciben.

## 🎬 Resultado Esperado

![Video de demostración](./04-faq-collapse.gif)
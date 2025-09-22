# Ejercicio 2: Type Ahead / Autocomplete

## 📝 Descripción

Crear un campo de búsqueda que, a medida que el usuario escribe, muestra una lista de sugerencias relevantes debajo del campo a medida que el usuario escribe. Las sugerencias pueden venir de una API o de una lista local.

Incluye optimizaciones clave como **debouncing** para evitar peticiones excesivas, **cancelación de peticiones** para prevenir race conditions y un **manejo de estado y errores detallado** para una experiencia de usuario fluida.

## 🎯 Objetivos de Aprendizaje

* **Búsqueda en Tiempo Real:** Implementar una funcionalidad que reacciona a cada pulsación de tecla del usuario.
* **Debouncing:** Aprender a optimizar el manejo de eventos de alta frecuencia para evitar un número excesivo de llamadas a funciones o a una API.
* **Manejo de Estado Asíncrono:** Gestionar los diferentes estados del ciclo de vida de una petición: inactivo, cargando, éxito y error.
* **Cancelación de Peticiones:** Implementar un mecanismo para cancelar búsquedas en curso y prevenir que resultados antiguos sobrescriban a los nuevos (race conditions).
* **Manejo de Errores Detallado:** Distinguir entre una búsqueda sin resultados y un error real del servidor, mostrando mensajes apropiados para cada escenario.

## ⚙️ Instrucciones

1.  **Estructura Visual (Los Componentes):**
    * **`TypeAhead`:** El componente principal que encapsula toda la funcionalidad.
    * **`SearchInput`:** El campo de texto donde el usuario escribe. Debería poder mostrar un indicador visual cuando una búsqueda está en progreso.
    * **`SuggestionsList`:** Una lista que se muestra condicionalmente debajo del input y que contiene los ítems de sugerencia.

2.  **Lógica de Estado (El "Cerebro"):**
    * **`inputValue`:** El valor actual del campo de texto.
    * **`suggestions`:** Un array con los resultados de la búsqueda para mostrar en la lista.
    * **`status`:** Un indicador del estado actual de la búsqueda. Puede ser:
        * `'idle'`: Estado inicial o inactivo.
        * `'loading'`: Hay una búsqueda en curso.
        * `'success'`: La búsqueda terminó con éxito (incluso si no hay resultados).
        * `'error'`: La búsqueda falló por un problema de red o del servidor.

3.  **Flujo de Interacción y Efectos (La "Magia"):**
    * El usuario escribe en el `SearchInput`, actualizando el estado `inputValue`.
    * Se debe utilizar un **mecanismo de debounce** para ejecutar la lógica de búsqueda solo cuando el usuario ha dejado de escribir por un momento (ej. 300-500ms).
    * Una vez que el debounce se activa:
        * Si el `inputValue` está vacío, se limpia el array `suggestions`.
        * Si hay texto, se cambia el `status` a `'loading'`.
        * Se debe implementar un **mecanismo para cancelar cualquier búsqueda anterior** que aún esté en curso.
        * Se ejecuta la búsqueda (filtrando un array local o llamando a una API).
    * Cuando se recibe la respuesta:
        * **Éxito:** Se actualiza `suggestions` con los datos recibidos y el `status` cambia a `'success'`.
        * **Fallo:** Se actualiza el `status` a `'error'`.

4. **Flujo de Selección (Cuando el usuario elige una opción)**:
    1.  El usuario hace clic en un ítem de la `SuggestionsList`.
    2.  El `inputValue` se actualiza con el valor de la sugerencia seleccionada.
    3.  La lista de sugerencias se oculta (se vacía el array `suggestions`).
    4.  **Importante:** La lógica debe asegurar que la actualización del `inputValue` en este paso **no dispare una nueva búsqueda**.

## 💡 Recomendaciones

* **Debouncing es Clave:** Es una utilidad fundamental en el desarrollo frontend. `debounce` es la parte más importante de este ejercicio para asegurar un buen rendimiento y no sobrecargar la API.
* **Cancelación de Peticiones:** Para las llamadas a una API, investiga sobre `AbortController`. Es la herramienta nativa de JavaScript para cancelar peticiones `fetch`.
* **Fuente de Datos:** Puedes empezar con un gran array local de datos (ej. una lista de países o ciudades) para centrarte en la lógica del frontend antes de añadir la complejidad de una API.
* **Vanilla JS:** Implementar `debounce` requiere un `setTimeout` y `clearTimeout`. La lógica para mostrar/ocultar y poblar la lista de sugerencias sería manual.
* **Frameworks (React, Vue, Svelte, etc.):**
    * La lógica de estado y los efectos secundarios se adaptan bien a las herramientas de cada framework (hooks en React, composables en Vue, etc.).
    * Para evitar la búsqueda tras la selección, se puede usar una variable de bandera simple. En frameworks como React, un `ref` es ideal para esto, ya que su valor persiste entre renders sin provocarlos.

## 🎬 Resultado Esperado

![Video de demostración](./02-type-ahead-autocomplete.gif)
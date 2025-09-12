# Ejercicio 22: Create List Items (Creación de Elementos en Lista)

## 📝 Descripción

Crear una interfaz simple con un campo de texto y un botón para permitir al usuario añadir elementos a una lista que se muestra en pantalla. Es el fundamento de cualquier aplicación tipo "To-Do List".

## 🎯 Objetivos de Aprendizaje

* **Actualización de Estado (Arrays):** Aprender a añadir nuevos elementos a un array en el estado de forma inmutable.
* **Formularios Controlados:** Capturar la entrada del usuario desde un campo de texto.
* **Renderizado de Listas:** Renderizar una lista de componentes a partir de un array.
* **Identificadores Únicos (`key`):** Entender la importancia de asignar una clave única a cada elemento en una lista.

## ⚙️ Instrucciones

1.  **Estructura Visual (Los Componentes):**
    * **`ItemForm`:** Contiene un `<input type="text">` y un `<button type="submit">`.
    * **`ItemList`:** (ej. `<ul>`) que mostrará los elementos.

2.  **Lógica de Estado (El "Cerebro"):**
    * **`items`:** Un array de objetos. Cada objeto debe tener `id` (único) y `text`.
    * **`newItemText`:** El estado de tipo string para el input controlado.

3.  **Flujo de Interacción (La "Magia"):**
    * El `<input>` está vinculado al estado `newItemText`.
    * La `ItemList` se renderiza mapeando el array de estado `items`.
    * Al enviar el formulario:
        1.  Se previene el comportamiento por defecto.
        2.  Se crea un nuevo objeto para el ítem con un `id` único y el `text` del estado `newItemText`.
        3.  Se actualiza el estado `items` creando un **nuevo array** (`[...items, newItem]`).
        4.  Se resetea el estado `newItemText` a un string vacío.

## 💡 Recomendaciones

* **Inmutabilidad:** Siempre crea una nueva copia del array al actualizar el estado. `setItems([...items, newItem])` es la forma estándar. Esto garantiza que los frameworks detecten el cambio.
* **Keys Únicas:** Al renderizar una lista en React/Vue, cada elemento debe tener un prop `key` único (ej. `<li key={item.id}>`). Esto ayuda al framework a optimizar el renderizado.
* **Vanilla JS:** Crearías un nuevo `<li>` con `document.createElement('li')`, le asignarías el texto y lo añadirías al `<ul>` con `appendChild()`.
* **React/Vue/Angular:** La actualización del estado del array es todo lo que necesitas para que el framework re-renderice la lista automáticamente.

## 🎬 Resultado Esperado

![Video de demostración](./22-create-list-items.gif)
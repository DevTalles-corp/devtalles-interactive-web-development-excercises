# Ejercicio 18: Mostrar/Ocultar Contraseña

## 📝 Descripción

Mejorar la experiencia de usuario en un campo de contraseña añadiendo un icono o botón que permita al usuario alternar la visibilidad del texto que está escribiendo.

## 🎯 Objetivos de Aprendizaje

* **Manipulación de Atributos:** Cambiar dinámicamente el atributo de un elemento HTML (`type`).
* **Gestión de Múltiples Estados Relacionados:** Manejar el valor de un campo de texto y su estado de visibilidad.
* **Componentización:** Encapsular una lógica de UI específica en un componente reutilizable.
* **Retroalimentación Visual al Usuario:** Cambiar la apariencia de un control (el icono) para reflejar el estado actual.

## ⚙️ Instrucciones

1.  **Estructura Visual (Los Componentes):**
    * Un componente **`PasswordInput`** que encapsula un `<input>` y un `<button>` con un icono.

2.  **Lógica de Estado (El "Cerebro"):**
    * **`passwordValue`:** Un string que almacena el texto actual del input.
    * **`isVisible`:** Un booleano (`true`/`false`) que determina si la contraseña debe mostrarse. Se inicializa en `false`.

3.  **Flujo de Interacción (La "Magia"):**
    * El atributo `value` del `<input>` está vinculado al estado `passwordValue`.
    * El atributo `type` del `<input>` está **vinculado condicionalmente** al estado `isVisible`. Será `'text'` si `isVisible` es `true`, y `'password'` si es `false`.
    * El botón/icono tiene un `onClick` que llama a una función `toggleVisibility`.
    * La función `toggleVisibility` simplemente invierte el valor booleano del estado `isVisible`.
    * Opcional: El icono mismo puede cambiar (ej. de un ojo abierto a un ojo tachado) basándose en `isVisible`.

## 💡 Recomendaciones

* **Componente Reutilizable:** Diseña esto como un componente autónomo (`<PasswordInput />`) que puedas usar en cualquier formulario.
* **Accesibilidad:** El botón debe tener un `aria-label` que describa la acción y cambie con el estado. Por ejemplo: `aria-label={isVisible ? 'Hide password' : 'Show password'}`.
* **Vanilla JS:** Escucharías el evento de clic en el icono. El callback comprobará el `type` actual del input y lo cambiará a "text" o "password" usando `setAttribute()`.
* **React/Vue/Angular:** Se usan dos variables de estado. La plantilla (JSX, template) declarativamente vincularía los atributos del input y el icono del botón a estas variables de estado.

## 🎬 Resultado Esperado

![Video de demostración](./18-show-hide-password.gif)
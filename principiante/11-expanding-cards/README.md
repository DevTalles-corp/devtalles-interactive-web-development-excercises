# Ejercicio 11: Expanding Cards (Tarjetas Expansibles)

## 📝 Descripción

Crear una serie de paneles o tarjetas, una al lado de la otra, que se expanden al hacer clic en ellas, mostrando más contenido o una imagen más grande mientras las demás se contraen. Es un efecto visual muy popular en galerías de imágenes y secciones de características de productos.

## 🎯 Objetivos de Aprendizaje

* **Gestión de Estado:** Aprender a manejar cuál es el elemento "activo" dentro de una colección.
* **Manejo de Eventos:** Capturar la interacción del usuario (clic) para disparar cambios de estado.
* **Renderizado Condicional:** Modificar la apariencia de los componentes basado en su estado (activo o inactivo).
* **Comunicación entre Componentes:** Entender el patrón donde un componente hijo (panel) informa a un padre (contenedor) sobre una interacción.

## ⚙️ Instrucciones

1.  **Estructura Visual (Los Componentes):**
    * **`Panel`:** Un componente que representa una tarjeta individual. Debe ser capaz de recibir un estado (ej. `isActive`) y aplicar un estilo diferente si está activo.
    * **`PanelContainer`:** Un componente que renderiza una lista de `Panel`.

2.  **Lógica de Estado (El "Cerebro"):**
    * El `PanelContainer` debe mantener una variable de estado, por ejemplo `activePanelId`, que almacene una referencia (como el índice o un ID único) del panel que está actualmente expandido.

3.  **Flujo de Interacción (La "Magia"):**
    * Cada `Panel` debe tener un manejador de eventos de clic.
    * Al hacer clic en un `Panel`, este debe invocar una función (`handlePanelClick`) que actualice el estado en el `PanelContainer`, estableciendo su propio identificador como el nuevo "panel activo".
    * Cuando el estado en el `PanelContainer` cambia, el sistema de renderizado debe volver a dibujar los paneles, aplicando la apariencia "activa" al panel correcto y la "inactiva" a todos los demás.

## 💡 Recomendaciones

* **CSS:** La lógica de la animación debe residir principalmente en CSS usando la propiedad `transition` sobre `flex-grow` o `width`. Tu lógica de JavaScript/Framework solo debe encargarse de cambiar el estado que resulta en la aplicación de una clase `.active`.
* **Vanilla JS:** Lograrás esto seleccionando los elementos del DOM y añadiendo/quitando una clase `.active` manualmente.
* **React/Vue/Angular:** El estado del panel activo debe vivir en el componente padre. La clase `.active` se aplica condicionalmente: `className={isActive ? 'panel active' : 'panel'}` (sintaxis de React como ejemplo). El hijo notifica al padre del clic a través de una función pasada como *prop*.

## 🎬 Resultado Esperado

![Video de demostración](./11-expanding-cards.gif)
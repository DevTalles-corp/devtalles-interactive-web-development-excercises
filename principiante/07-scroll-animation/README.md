# Ejercicio 7: Scroll Animation (Animación al Desplazar)

## 📝 Descripción

Crear un efecto visual donde los elementos de contenido (cajas, tarjetas, etc.) aparecen en la pantalla con una animación (ej. un fundido o un deslizamiento) a medida que el usuario se desplaza hacia abajo por la página.

## 🎯 Objetivos de Aprendizaje

* **Manejo de Eventos del Navegador:** Capturar eventos globales como el `scroll` de la ventana.
* **Cálculo de Posiciones en el DOM:** Determinar si un elemento ha entrado en la ventana visible (`viewport`).
* **Renderizado Condicional:** Aplicar estilos para "mostrar" un componente cuando cumple una condición de visibilidad.
* **Optimización y Ciclo de Vida:** Entender la importancia de registrar y limpiar eventos globales.

## ⚙️ Instrucciones

1.  **Estructura Visual (Los Componentes):**
    * Una página o componente principal que contenga una lista de componentes hijos (llamémoslos **`ContentBox`**).
    * Cada `ContentBox` debe tener dos estados visuales: "oculto" y "visible".

2.  **Lógica de Estado y Referencias (El "Cerebro"):**
    * Este ejercicio depende de **referencias** a los elementos visuales (`ContentBox`) para poder medir su posición en la página.
    * Cada `ContentBox` necesita un estado booleano implícito o explícito: `isVisible`.

3.  **Flujo de Interacción y Efectos (La "Magia"):**
    * **Al montar el componente principal:** Se debe añadir un `listener` al evento `scroll` del objeto `window`.
    * **Función de manejo del `scroll`:**
        1.  Determinar un punto de activación en la pantalla (ej. el 80% de la altura de la ventana).
        2.  Iterar sobre cada `ContentBox`.
        3.  Para cada caja, obtener su posición (`getBoundingClientRect().top`).
        4.  Si la posición de la caja es menor que el punto de activación, se le aplica el estado/clase "visible" (ej. `.show`).
    * **Al desmontar el componente:** Se debe **eliminar** el `listener` del evento `scroll`.

## 💡 Recomendaciones

* **La Mejor Práctica: `Intersection Observer` API:** La forma moderna y mucho más eficiente de resolver este problema es usando la `Intersection Observer API`. Está diseñada para detectar cuándo un elemento entra o sale del viewport, es mucho mejor para el rendimiento.
* **CSS:** El efecto de "aparecer" debe ser manejado por CSS. Por defecto, las cajas pueden tener `opacity: 0`. Una clase `.show` cambiaría esto a `opacity: 1` con una `transition` suave.
* **Optimización (Throttle/Debounce):** Si usas el evento `scroll`, la función de manejo debería ser optimizada usando `throttle` o `debounce` para limitar la cantidad de veces que se ejecuta.
* **React/Vue/Angular:** Las referencias a los elementos se manejan con `useRef` (React) o `ref` (Vue). La lógica del listener o del `IntersectionObserver` se encapsula en un `useEffect` (React) o en ganchos de ciclo de vida equivalentes para gestionar la creación y limpieza.

## 🎬 Resultado Esperado

![Video de demostración](./07-scroll-animation.gif)
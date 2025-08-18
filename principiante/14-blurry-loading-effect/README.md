# Ejercicio 14: Blurry Loading Effect (Efecto de Carga Borrosa)

## 📝 Descripción

Crear un efecto visual que simula la carga de una página o imagen. Mientras un contador de porcentaje va de 0 a 100, una imagen de fondo pasa de estar muy borrosa a nítida, y el texto del porcentaje se desvanece.

## 🎯 Objetivos de Aprendizaje

* **Efectos Secundarios y Ciclo de Vida:** Utilizar temporizadores (`setInterval`) para simular un proceso.
* **Gestión de Estado Numérico:** Mantener un estado para el progreso de la carga.
* **Mapeo de Rangos Numéricos:** Convertir un valor de un rango (0-100) a otro proporcional (opacidad 1-0).
* **Manipulación de Estilos Dinámicos:** Aplicar estilos calculados (como `filter: blur()` y `opacity`).

## ⚙️ Instrucciones

1.  **Estructura Visual (Los Componentes):**
    * **`LoadingContainer`:** Tiene una imagen de fondo.
    * **`PercentageText`:** Muestra el progreso numérico.

2.  **Lógica de Estado (El "Cerebro"):**
    * Una única variable de estado numérica, `progress`, inicializada en `0`.

3.  **Flujo de Interacción y Efectos (La "Magia"):**
    * **Al montar el componente:** Inicia un `setInterval` (ej. cada 30ms) y guarda su referencia.
    * **Dentro del intervalo:**
        1.  Incrementa el estado `progress`.
        2.  Si `progress` llega a 100, detén el `setInterval` (`clearInterval`).
    * **Renderizado Derivado del Estado:**
        * El `PercentageText` muestra el valor de `progress`.
        * El desenfoque (`blur`) del `LoadingContainer` y la opacidad del `PercentageText` se calculan dinámicamente a partir de `progress` (mapeando el rango [0-100] a [30px-0px] y [1-0] respectivamente).

## 💡 Recomendaciones

* **Función de Mapeo:** Es una buena práctica crear una función de ayuda reutilizable `mapRange(num, inMin, inMax, outMin, outMax)` para escalar los valores.
* **Limpieza del Temporizador:** Es crucial limpiar el intervalo cuando la carga termina o cuando el componente se desmonta para prevenir fugas de memoria.
* **CSS `filter`:** La propiedad `filter: blur(Xpx);` crea el efecto de desenfoque.
* **Vanilla JS:** Se actualizan los estilos `filter` y `opacity`, y el `textContent`, directamente dentro de la función del intervalo.
* **React/Vue/Angular:** La lógica del temporizador se encapsula en `useEffect` / `onMounted`. Los estilos se vinculan de forma declarativa al estado `progress`.

## 🎬 Resultado Esperado

![Video de demostración](./14-blurry-loading-effect.gif)
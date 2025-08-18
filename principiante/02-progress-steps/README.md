# Ejercicio 2: Progress Steps (Pasos de Progreso)

## 📝 Descripción

Crear un componente de barra de progreso que indique los pasos de un proceso (ej. un checkout, un formulario multi-paso). El usuario puede avanzar o retroceder a través de los pasos usando botones.

## 🎯 Objetivos de Aprendizaje

* **Gestión de Estado Numérico:** Utilizar una variable de estado para controlar un valor numérico (el paso actual).
* **Lógica Condicional en la UI:** Deshabilitar o habilitar elementos interactivos (botones) basándose en el estado actual.
* **Cálculos Derivados del Estado:** Calcular valores (como el porcentaje de progreso) a partir de la variable de estado principal.
* **Renderizado Condicional:** Aplicar estilos o clases a una colección de elementos según si su posición es anterior, actual o posterior al estado.

## ⚙️ Instrucciones

1.  **Estructura Visual (Los Componentes):**
    * **`StepCircle`:** Un componente que representa un único paso. Debe poder recibir un estado "activo" para cambiar su apariencia.
    * **`ProgressBar`:** Un elemento visual cuya apariencia (ej. su ancho) represente el progreso general.
    * **`NavButton`:** Botones de navegación ("Previous", "Next").
    * **`ProgressContainer`:** Componente principal que orquesta todos los elementos anteriores.

2.  **Lógica de Estado (El "Cerebro"):**
    * La pieza central es una variable de estado numérica, `currentStep`, inicializada en `1`.
    * También necesitarás saber el número total de pasos, que puede ser una constante o una propiedad (ej. `totalSteps = 4`).

3.  **Flujo de Interacción (La "Magia"):**
    * Asocia funciones (`handleNext`, `handlePrev`) a los eventos de clic de los botones.
    * **Función `handleNext`:** Incrementa el estado `currentStep`, pero solo si `currentStep` es menor que `totalSteps`.
    * **Función `handlePrev`:** Decrementa el estado `currentStep`, pero solo si `currentStep` es mayor que `1`.
    * Cada vez que `currentStep` cambia, la UI debe reaccionar a esto.
        * **`StepCircle`s:** Se marcan con una clase `.active` todos los pasos cuyo índice sea menor que `currentStep`.
        * **`ProgressBar`:** Su ancho debe ser recalculado. La fórmula es `((currentStep - 1) / (totalSteps - 1)) * 100%`.
        * **Botones:** El botón "Previous" debe estar deshabilitado si `currentStep` es `1`. El botón "Next" debe estar deshabilitado si `currentStep` es igual a `totalSteps`.

## 💡 Recomendaciones

* **Estado Derivado:** El estado de los botones (habilitado/deshabilitado) y el ancho de la barra son "estados derivados", ya que sus valores se calculan siempre a partir del estado principal (`currentStep`).
* **Vanilla JS:** Actualizarás manualmente los atributos `disabled` de los botones y las clases/estilos de los círculos y la barra cada vez que la variable `currentStep` cambie.
* **React/Vue/Angular:** Vincularás (`bind`) el atributo `disabled` de los botones a una expresión booleana (ej. `disabled={currentStep === 1}`). Las clases de los círculos y el estilo de la barra también se vincularán directamente al estado `currentStep`.

## 🎬 Resultado Esperado

![Video de demostración](./02-progress-steps.gif)
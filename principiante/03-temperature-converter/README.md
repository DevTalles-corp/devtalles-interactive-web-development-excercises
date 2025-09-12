# Ejercicio 3: Temperature Converter (Conversor de Temperatura)

## 📝 Descripción

Crear una herramienta de conversión de temperatura con dos campos de entrada: uno para grados Celsius y otro para grados Fahrenheit. Cuando el usuario escriba un valor en cualquiera de los dos campos, el otro campo deberá actualizarse automáticamente con la temperatura convertida correspondiente.

## 🎯 Objetivos de Aprendizaje

* **Sincronización de Estado:** Aprender a mantener dos o más partes del estado consistentes entre sí. Un cambio en una debe reflejarse en la otra.
* **Manejo de Lógica Bidireccional:** Implementar la lógica de conversión en ambas direcciones (C a F y F a C).
* **Manejo de Entradas de Usuario:** Capturar datos del usuario y reaccionar a ellos en tiempo real para crear una experiencia fluida.
* **Precisión Numérica:** Considerar el formato y redondeo de los números para una mejor presentación.

## ⚙️ Instrucciones

1.  **Estructura Visual (Los Componentes):**
    * Dos elementos `<input type="number">`, uno etiquetado como "Celsius" y el otro como "Fahrenheit".

2.  **Lógica de Estado (El "Cerebro"):**
    * Necesitarás dos variables de estado, `celsius` y `fahrenheit`, para almacenar los valores de cada unidad.
    * También es útil tener una variable que registre cuál fue la última unidad modificada para evitar bucles de actualización infinitos.

3.  **Flujo de Interacción (La "Magia"):**
    * **Cuando el input de Celsius cambia:**
        1.  Actualiza el estado de `celsius`.
        2.  Calcula el valor correspondiente en Fahrenheit usando la fórmula: $F = (C \times \frac{9}{5}) + 32$.
        3.  Actualiza el estado de `fahrenheit` con el nuevo valor.
    * **Cuando el input de Fahrenheit cambia:**
        1.  Actualiza el estado de `fahrenheit`.
        2.  Calcula el valor correspondiente en Celsius usando la fórmula: $C = (F - 32) \times \frac{5}{9}$.
        3.  Actualiza el estado de `celsius` con el nuevo valor.
    * El sistema de renderizado se encargará de mostrar los valores actualizados en los respectivos `inputs`.

## 💡 Recomendaciones

* **Fórmulas de Conversión:**
    * Celsius a Fahrenheit: `(valorCelsius * 9/5) + 32`
    * Fahrenheit a Celsius: `(valorFahrenheit - 32) * 5/9`
* **Vanilla JS:** Añade un `event listener` de tipo `'input'` a cada `input`. En el callback de Celsius, actualiza el valor del input de Fahrenheit. En el callback de Fahrenheit, actualiza el valor del input de Celsius.
* **React/Vue/Angular:** Es un caso de uso clásico para el estado derivado. Puedes tener dos estados (`celsius` y `fahrenheit`) y dos funciones `handleCelsiusChange` y `handleFahrenheitChange`. La primera actualiza `celsius` y el `fahrenheit` calculado. La segunda hace lo inverso. Asegúrate de manejar los casos donde el input se vacía (puedes mostrar ambos inputs vacíos).

## 🎬 Resultado Esperado

![Video de demostración](./03-temperature-converter.gif)
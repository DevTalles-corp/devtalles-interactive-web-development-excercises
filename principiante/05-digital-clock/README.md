# Ejercicio 5: Reloj Digital

## 📝 Descripción

Desarrollar un componente que muestre la hora actual, actualizándose cada segundo. Este ejercicio se enfoca en cómo manejar efectos secundarios y suscripciones a eventos que ocurren a intervalos de tiempo.

## 🎯 Objetivos de Aprendizaje

* **Efectos Secundarios:** Entender el concepto de operaciones que interactúan con el "mundo exterior" (el tiempo del sistema).
* **Manejo de Ciclo de Vida:** Aprender a iniciar una tarea cuando el componente se monta y a limpiarla cuando se desmonta para evitar fugas de memoria.
* **Temporizadores:** Utilizar funciones como `setInterval` para ejecutar código repetidamente.
* **Formateo de Datos:** Convertir datos crudos (del objeto `Date`) a un formato legible por el usuario.

## ⚙️ Instrucciones

1.  **Estructura Visual (Los Componentes):**
    * **`Clock`:** Un único componente que mostrará la hora.

2.  **Lógica de Estado (El "Cerebro"):**
    * El componente necesita una variable de estado, `currentTime`, que almacenará un objeto `Date`.

3.  **Flujo de Interacción y Efectos (La "Magia"):**
    * **Al montar/iniciar el componente:** Se debe configurar un `setInterval` que se ejecute cada segundo.
    * La función dentro de `setInterval` debe obtener la nueva hora (`new Date()`) y actualizar el estado `currentTime`.
    * La UI del componente debe estar vinculada a este estado, mostrando la hora formateada.
    * **Al desmontar/destruir el componente:** Es **crítico** limpiar el temporizador usando `clearInterval`. Esto previene que el temporizador siga ejecutándose en segundo plano si el componente desaparece de la pantalla.

## 💡 Recomendaciones

* **Formateo:** Crea una función de ayuda para añadir ceros a la izquierda a los segundos y minutos.
* **Vanilla JS:** Simplemente iniciarías `setInterval` en tu script. La "limpieza" es importante si estás añadiendo y quitando el reloj del DOM dinámicamente.
* **React:** El `setInterval` y su `clearInterval` deben vivir dentro de un hook `useEffect`. La función de limpieza se retorna desde `useEffect` para que se ejecute cuando el componente se desmonte.
* **Vue/Angular:** Existen ganchos del ciclo de vida equivalentes (`onMounted`/`onUnmounted` en Vue, `ngOnInit`/`ngOnDestroy` en Angular) que son el lugar perfecto para esta lógica.

## 🎬 Resultado Esperado

![Video de demostración](./05-digital-clock.gif)
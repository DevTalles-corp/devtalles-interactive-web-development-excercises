# Ejercicio 8: Modal de Inicio de Sesión

## 📝 Descripción

En este ejercicio, llevarás tus habilidades de maquetación un paso más allá. El reto consiste en refactorizar un componente de React existente que utiliza **CSS Modules** para que emplee exclusivamente **clases de utilidad de Tailwind CSS**.

Construirás un modal de inicio de sesión, un componente esencial en casi cualquier aplicación web. Este ejercicio es clave para aprender a migrar diseños existentes y a pensar de manera más fluida con la metodología *utility-first*.

## 🎯 Objetivos de Aprendizaje

* **Refactorización a Utility-First**: Migrar un componente estilizado con CSS tradicional (`.module.css`) a clases de utilidad de Tailwind.
* **Layouts Complejos con Flexbox**: Implementar y gestionar alineación, justificación y dirección de elementos (`flex`, `justify-between`, `items-center`).
* **Diseño Responsivo Avanzado**: Usar variantes como `md:*` para transformar un layout de columna a fila y adaptar el espaciado en diferentes vistas.
* **Estilizado y Pseudo-clases**: Aplicar estilos a botones, inputs y contenedores, y manejar estados de interacción como `hover` y `group-hover`.
* **Composición de Componentes en React**: Trabajar con componentes de React anidados y pasar `className` para aplicar estilos de manera modular.

## ⚙️ Instrucciones

1.  **Código Base (React + CSS Modules)**: Comienza con la estructura de componentes de React proporcionada. Verás que cada componente importa y utiliza clases desde un archivo `Login.module.css`.

2.  **Eliminar Estilos Antiguos**: Tu primer paso es eliminar la importación del archivo `.css` en cada componente y borrar todos los atributos `className={styles.*}`. Al principio, el componente se verá sin estilos.

3.  **Maquetación Mobile-First**: Añade las clases de Tailwind a cada elemento JSX para que el diseño se vea correctamente en pantallas pequeñas. En la vista móvil, los elementos del formulario y los botones sociales deben apilarse verticalmente (`flex-col`).

4.  **Adaptación a Escritorio (Responsive)**: Utiliza las clases con el prefijo `md:` para adaptar el diseño a pantallas más grandes. El cambio más importante será pasar el contenedor principal a `md:flex-row` para que la imagen y el formulario aparezcan uno al lado del otro.

5.  **Efectos de Interacción**: Implementa los efectos `hover`. Los botones deben tener una transición suave al pasar el cursor sobre ellos (`hover:-translate-y-0.5`, `hover:shadow-lg`). Presta especial atención al botón de cierre, que utiliza `group-hover` para cambiar el color del icono SVG.

6.  **Pulido de Detalles**: Revisa los pequeños detalles para que el resultado sea idéntico al diseño de referencia. Asegúrate de aplicar correctamente las fuentes personalizadas (`font-sans` para Mulish y `font-mono` para Rokkitt), los bordes redondeados (`rounded-2xl`, `rounded-md`) y las sombras (`shadow-2xl`, `shadow-lg`).

## 💡 Recomendaciones

* **CSS vs. Tailwind**: Fíjate en cómo se traducen las propiedades. Por ejemplo, `justify-content: space-between` se convierte en la clase `justify-between`. Una transición como `transform: translateY(-0.125rem)` se consigue fácilmente con `hover:-translate-y-0.5`.
* **Componentes React**: Recuerda que en JSX se utiliza `className` en lugar de `class`. La estructura ya está dividida en componentes, así que enfócate en aplicar los estilos a cada uno de ellos.
* **Fuentes Personalizadas (Tailwind CSS v4)**: A partir de la versión 4, las fuentes se configuran directamente en tu archivo CSS principal (como `index.css`), en lugar del archivo de configuración. Para importar y usar las fuentes `Mulish` y `Rokkitt`, copia y pega el siguiente código en tu archivo CSS:

    ```css
    /* index.css */

    /* 1. Importa las fuentes que necesitas (ej. desde Google Fonts) */
    @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Rokkitt:ital,wght@0,100..900;1,100..900&display=swap');

    @import "tailwindcss";

    /* 2. Define tus familias de fuentes usando la directiva @theme */
    @theme {
      --font-sans: 'Mulish', sans-serif;
      --font-mono: 'Rokkitt', monospace;
    }
    ```

## 🎬 Resultado Esperado

![Video de demostración](./08-tailwindcss-login-modal.gif)
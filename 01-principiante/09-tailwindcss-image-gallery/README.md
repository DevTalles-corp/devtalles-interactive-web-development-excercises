# Ejercicio 9: Galería de Imágenes Interactiva

## 📝 Descripción

¡Este ejercicio es tu **introducción al mundo de Tailwind CSS**! El reto principal es aprender a hacer la transición desde CSS tradicional, "traduciendo" un diseño existente a las clases de utilidad de Tailwind.

En este ejercicio, subimos el nivel de complejidad. Construirás una página completa de una galería de imágenes. Este componente no solo es visualmente atractivo, sino que también introduce conceptos clave para crear layouts complejos y responsivos en el mundo real.

El reto es traducir una maquetación que combina **Flexbox** para la alineación y **CSS Grid** para la galería, implementando interacciones sutiles que mejoran la experiencia de usuario.

## 🎯 Objetivos de Aprendizaje

* **Maquetación con CSS Grid**: Usar clases como `grid`, `grid-cols-*` y `gap-*` para crear una grilla de elementos dinámica.
* **Responsividad Avanzada**: Aplicar clases para múltiples breakpoints (`md:*`, `lg:*`, `xl:*`) y adaptar un layout complejo.
* **Interacciones con `group` y `group-hover`**: Aprender a modificar el estilo de un elemento hijo cuando el cursor se posa sobre un elemento padre.
* **Posicionamiento Absoluto**: Utilizar clases de posicionamiento para superponer información sobre las imágenes (`absolute`, `bottom-0`, etc.).
* **Componentización**: Descomponer una interfaz de usuario compleja en componentes más pequeños y manejables (Menú, Buscador, Grilla, Ítem de la grilla).

## ⚙️ Instrucciones

1.  **Análisis y Componentización**: Antes de escribir código, analiza la estructura del `index.html`. Identifica las secciones lógicas y planifica cómo las dividirías en componentes. Una buena aproximación sería: `Header`, `GalleryGrid` y `GalleryItem`.

2.  **Maquetación General (Mobile-First)**: Comienza construyendo la estructura principal con un enfoque móvil. El menú, el buscador y la galería de imágenes estarán apilados verticalmente (`flex-col`).

3.  **Construcción de la Grilla**: Implementa la galería de imágenes usando CSS Grid. En móvil, puede ser una sola columna, y luego usarás las variantes responsivas para añadir más columnas.

4.  **Aplicar Estilos Responsivos**: Añade las clases con prefijos (`md:*`, `lg:*`, etc.) para reorganizar los elementos en pantallas más grandes. El layout principal pasará a ser horizontal y la grilla mostrará más imágenes por fila.

5.  **Implementar Interacciones `group-hover`**:
    * Para el menú de navegación, haz que una línea de borde aparezca debajo de cada enlace al pasar el cursor sobre él.
    * Para cada imagen en la galería, crea una superposición (overlay) con información que aparezca desde abajo al pasar el cursor sobre la imagen.

## 💡 Recomendaciones

* **CSS vs. Tailwind**: El concepto de `group-hover` es uno de los superpoderes de Tailwind. En CSS tradicional, lograrías esto con un selector como `.group:hover .overlay { opacity: 1; }`. Entender esta relación te ayudará a "pensar en Tailwind".
* **Vanilla JS**: Al igual que en el ejercicio anterior, no se necesita JavaScript para la lógica visual. Todas las interacciones se manejan con pseudo-clases de CSS/Tailwind.
* **React/Vue/Angular**: La componentización es clave aquí.
    * Crea un componente `GalleryItem` que reciba props como la URL de la imagen y el título.
    * El componente `GalleryGrid` puede tener un array de datos y usar un `.map()` para renderizar múltiples `GalleryItem`.
    * El `Header` puede contener tanto el menú como la barra de búsqueda.

## 🎬 Resultado Esperado

![Video de demostración](./09-tailwindcss-image-gallery.gif)
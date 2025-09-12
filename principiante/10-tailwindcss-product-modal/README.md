# Ejercicio 10: Modal de Producto

## 📝 Descripción

En este ejercicio, tu tarea será **migrar un componente de producto existente desde CSS tradicional a Tailwind CSS**. Este reto te permitirá afianzar tus conocimientos de Flexbox, diseño responsivo y, especialmente, de los estados de interacción complejos que ofrece Tailwind.

El principal desafío aquí es replicar el efecto "3D" del botón principal de "Añadir al carrito". Para ello, deberás traducir las reglas de CSS existentes a las utilidades de `group` y `group-hover` de Tailwind, una técnica poderosa para crear interacciones avanzadas sin necesidad de JavaScript.

---

## 🎯 Objetivos de Aprendizaje

-   **Layouts Avanzados con Flexbox**: Estructurar un componente con múltiples secciones anidadas y alineación variable.
-   **Diseño Responsivo (Mobile-First)**: Adaptar el layout de una columna (móvil) a una fila (escritorio) usando las variantes `md:*`.
-   **Estilizado con Estados (`hover`)**: Aplicar efectos de transición y transformación al interactuar con la imagen y los botones.
-   **Manejo de Estados de Grupo (`group-hover`)**: Crear interacciones donde el `hover` sobre un elemento padre afecta a los estilos de un elemento hijo.
-   **Traducción de CSS a Tailwind**: Mapear propiedades de una hoja de estilos tradicional, incluyendo sombras, transiciones y tipografía, a clases de utilidad.

---

## ⚙️ Instrucciones

1.  **Analiza el Código Base**: Familiarízate con la estructura y los estilos del componente proporcionado. Identifica cómo está construido y cómo la hoja de estilos CSS define su apariencia, prestando especial atención a las reglas de interacción complejas.

2.  **Traduce los Estilos**: Modifica la estructura del componente y comienza a reemplazar las clases de CSS existentes por las clases de utilidad de Tailwind. Utiliza la hoja de estilos proporcionada como una guía para saber qué propiedades CSS necesitas replicar.

3.  **Implementa el Efecto `group-hover`**: Para el botón principal, añade la clase `group` a su contenedor. Luego, en los elementos hijos, utiliza las variantes `group-hover:*` para cambiar sus estilos cuando el cursor esté sobre el contenedor padre.

4.  **Aplica los Estilos Responsivos**: Encuentra las reglas de diseño responsivo en la hoja de estilos y tradúcelas a clases con prefijos responsivos de Tailwind (ej. `md:`, `lg:`) directamente en la estructura de tu componente.

5.  **Añade los Toques Finales**: Implementa los efectos `hover` más sencillos, como el escalado de la imagen (`hover:scale-105`) y el sutil levantamiento de los botones de acción (`hover:-translate-y-0.5`).

6.  **Limpieza Final**: Una vez que el componente se vea idéntico al original usando solo Tailwind, elimina la importación o el enlace a la hoja de estilos tradicional. ¡El refactor estará completo!

---

## 💡 Recomendaciones

-   **El poder de `group`**: La funcionalidad `group` de Tailwind es clave aquí. Te permite evitar JS para muchos efectos de UI comunes. Piensa en `group` como un "padre" que le dice a sus "hijos" con clases `group-hover:` cómo deben cambiar cuando él recibe el `hover`.
-   **Sombras y Bordes**: Fíjate en cómo una propiedad como `border-bottom-width: 8px` se traduce a `border-b-8`. Tailwind tiene utilidades para casi todas las propiedades CSS que puedas necesitar.
-   **Frameworks (React/Vue/Svelte)**: Para los botones de acción inferiores, este es un caso de uso perfecto para un componente reutilizable. Podrías crear un componente `<ActionButton icon="..." text="..." />` para evitar repetir el mismo código dos veces.

---

## 🎬 Resultado Esperado

El resultado final debe ser un componente de producto visualmente idéntico al del diseño de referencia, totalmente responsivo y con todas las micro-interacciones funcionando correctamente.

![Video de demostración](./10-tailwindcss-product-modal.gif)
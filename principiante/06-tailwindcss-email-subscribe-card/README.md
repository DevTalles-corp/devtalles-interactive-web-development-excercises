# Ejercicio 6: Tarjeta de Suscripción por Email

## 📝 Descripción

En este ejercicio, tu tarea será **migrar una tarjeta de suscripción existente desde CSS tradicional a Tailwind CSS**. Este reto te permitirá afianzar los fundamentos de Flexbox, diseño responsivo y el estilizado de formularios, traduciendo una hoja de estilos a las clases de utilidad de Tailwind.

Completar este ejercicio te dará la base necesaria para **trabajar cómodamente con Tailwind en los proyectos futuros** de esta serie.

---

## 🎯 Objetivos de Aprendizaje

-   **Fundamentos de Utility-First**: Traducir un diseño de CSS tradicional a clases de utilidad de Tailwind CSS.
-   **Layouts con Flexbox**: Utilizar las utilidades de Flexbox (`flex`, `flex-col`, `items-center`) para estructurar el componente.
-   **Diseño Responsivo (Mobile-First)**: Aplicar variantes responsivas como `md:*` para adaptar el layout a diferentes tamaños de pantalla.
-   **Estilizado de Elementos de Formulario**: Personalizar la apariencia de inputs y botones con Tailwind.
-   **Manejo de Estados (Hover)**: Aplicar estilos que reaccionan a la interacción del usuario, como el `hover`.

---

## ⚙️ Instrucciones

1.  **Analiza el Código Base**: Familiarízate con la estructura y los estilos del componente de suscripción proporcionado. Identifica cómo la hoja de estilos CSS define la apariencia del formulario y el layout responsivo.

2.  **Traduce los Estilos**: Comienza a reemplazar las clases de CSS existentes en la estructura del componente por las clases de utilidad de Tailwind. Utiliza la hoja de estilos proporcionada como tu guía para replicar el espaciado, los colores y la tipografía.

3.  **Estiliza los Elementos del Formulario**: Presta especial atención a los elementos `<input>` y `<button>`. Utiliza las utilidades de Tailwind para replicar su apariencia, incluyendo bordes, texto de placeholder y colores de fondo.

4.  **Aplica los Estilos Responsivos**: Encuentra las reglas de diseño responsivo en la hoja de estilos y tradúcelas a clases con el prefijo `md:` para cambiar el layout de columna a fila en pantallas más grandes.

5.  **Reemplaza los Estados Hover**: Busca las pseudo-clases `:hover` en el archivo CSS y aplica sus equivalentes en Tailwind para el escalado de la imagen y los cambios de color del botón.

6.  **Limpieza Final**: Una vez que el componente se vea idéntico al original usando solo Tailwind, elimina la importación o el enlace a la hoja de estilos tradicional.

---

## 💡 Recomendaciones

-   **CSS vs. Tailwind**: Observa cómo una propiedad CSS como `background-color` se mapea directamente a una clase como `bg-zinc-800`. La transición de la imagen se logra combinando las clases `transform`, `duration-*` y `hover:scale-*`.
-   **Vanilla JS**: No se requiere JavaScript para la lógica de este componente, ya que los efectos `hover` se manejan directamente con las pseudo-clases que ofrece Tailwind, que se compilan a CSS. El foco del ejercicio es puramente la maquetación.
-   **React/Vue/Angular**: Encapsula toda la estructura en un único componente (ej. `EmailSubscribeCard`). Recuerda usar `className` en lugar de `class` si estás trabajando con React.

---

## 🎬 Resultado Esperado

![Video de demostración](./06-tailwindcss-email-subscribe-card.gif)
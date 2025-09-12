
<div align="center">

<h1>🌱 Ejercicios - Nivel Principiante</h1>

![Principiante Badge](https://img.shields.io/badge/Nivel-Principiante-green?style=for-the-badge&logo=javascript)

[![Exercises](https://img.shields.io/badge/Ejercicios-24%20Prácticos-brightgreen.svg?style=for-the-badge)](./01-expanding-cards/)
![Level](https://img.shields.io/badge/Dificultad-Básica-green.svg?style=for-the-badge)

</div>

## 📋 Tabla de Contenidos

- [🎯 Objetivos del Nivel](#-objetivos-del-nivel)
- [⚡ Tecnologías y Herramientas](#-tecnologías-y-herramientas)
- [❗Antes de Comenzar](#antes-de-comenzar)
- [📚 Índice de Ejercicios](#-índice-de-ejercicios)
- [💡 Consejos para el Éxito](#-consejos-para-el-éxito)
- [🚀 Siguiente Nivel](#-siguiente-nivel)

## 🎯 Objetivos del Nivel

En este nivel desarrollarás habilidades clave para la construcción de aplicaciones web básicas e interactivas.

### 🎓 Lo que aprenderás:
- **Gestión de Estado**: Controlar datos que cambian en tiempo real dentro de la aplicación
- **Manipulación del DOM**: Trabajar dinámicamente con elementos HTML
- **Manejo de Eventos**: Responder a acciones del usuario como clics e inputs
- **Renderizado Condicional**: Mostrar/ocultar contenido dinámicamente
- **Efectos Secundarios**: Trabajar con temporizadores y sincronización de estado
- **Comunicación entre Componentes**: Intercambiar información entre diferentes partes de la UI
- **Formularios Controlados**: Capturar y validar entradas del usuario
- **Animaciones y Transiciones**: Crear experiencias visuales fluidas

## ⚡ Tecnologías y Herramientas

A continuación se detalla el conjunto de tecnologías, librerías y herramientas utilizadas en el desarrollo de cada proyecto.

### 🌐 Lenguajes y Fundamentos Web

Son las tecnologías base sobre las que se construye la aplicación.

| Tecnología | Descripción | Documentación Oficial |
| :--- | :--- | :--- |
| **HTML5** | Estructura semántica y accesibilidad. | [MDN Web Docs: HTML](https://developer.mozilla.org/es/docs/Web/HTML) |
| **CSS3** | Diseño responsivo, Flexbox y Grid. | [MDN Web Docs: CSS](https://developer.mozilla.org/es/docs/Web/CSS) |
| **JavaScript/TypeScript** | Manipulación del DOM y funciones de ES6+. | [MDN JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) / [TypeScript](https://www.typescriptlang.org/docs/) |

### ⚛️ Frameworks y Librerías Principales

El ecosistema principal que da forma a la arquitectura de la interfaz de usuario y el diseño.

| Tecnología | Descripción | Documentación Oficial |
| :--- | :--- | :--- |
| **React.js** | Librería para construir interfaces de usuario. | [React Docs](https://react.dev/) |
| **Tailwind CSS** | Framework CSS *utility-first* para diseño rápido. | [Tailwind CSS Docs](https://tailwindcss.com/docs) |

### 📦 Paquetes y Utilidades

Dependencias externas instaladas para resolver problemas específicos o mejorar la calidad del código.

| Paquete | Propósito | Documentación (npm) |
| :--- | :--- | :--- |
| **clsx** | Utilidad para construir `className` de forma condicional. | [Ver en npm](https://www.npmjs.com/package/clsx) |
| **tailwind-merge** | Fusiona clases de Tailwind CSS sin conflictos de estilo. | [Ver en npm](https://www.npmjs.com/package/tailwind-merge) |


## 📖 Conceptos Clave
- Gestión de estado con variables y objetos
- Eventos del DOM y manejo de eventos
- Diseño responsivo y CSS dinámico

# ❗Antes de comenzar

Hay una serie de recomendaciones para que puedas realizar los ejercicios de una forma organizada, escalable y cómoda, además de unas consideraciones para cómo se plantean los ejercicios y cómo se encontrarán las soluciones para cada ejercicio.

1. **Realiza los siguientes ejercicios en un solo proyecto, siguiendo la estructura de organización recomendada para el proyecto. Esto es con el fin de no crear un proyecto nuevo desde absoluto 0 y solo centrarte en realizar los ejercicios.**

2. **Dentro de cada carpeta de ejercicios, encontrarás una serie de archivos con:**

- Un README con las instrucciones para cada ejercicio.
- El código base para que te centres en lo importante del ejercicio, el cual se llamará `pasos-iniciales`.
- El código con su solución al ejercicio, el cual se llamará `solution-react`

    ### 📁 Estructura dentro de cada carpeta de ejercicios
    ```
    0X-nombre-del-ejercicio/
    ├── 0X-nombre-del-ejercicio.gif
    ├── pasos-iniciales
    ├── solution-react
    └──README.md
    ```

3. **Descarga la estructura incial del proyecto, la cual tendrá la configuración inicial lista para empezar directamente a trabajar con los ejercicios.**

    **Este tendrá un archivo comprimido en `.zip`, el cual solo debes descomprimir y agregar los archivos al proyecto.**  

    ### ❗ Puedes descargarla accediendo al siguiente directorio: ❗
    ---
    ### 📚 [Estructura inicial](./00-estructura-inicial)
    ---

4. **Es recomendable usar una librería de estilos, como `TailwindCSS` para facilitar la implementación de estilos durante el desarrollo. Las soluciones estarán estilizadas con el mismo, pero tienes total libertad de estilizar las aplicaciones a tu gusto.**

   **¡Expresa ese potencial en tus ejercicios!**

## 🗂️ Organización Recomendada del Proyecto

Para optimizar tu flujo de trabajo, te recomendamos crear **UN SOLO PROYECTO** para todos los ejercicios de principiante. Para ello usaremos `Vite` como build tool: 


### ⚡ Flujo de Trabajo Recomendado

1. **Instala las dependencias para tu proyecto base que descargaste anteriormente:**

    ```bash
    npm install
    ```
2. **Trabaja en un ejercicio a la vez** modificando los archivos principales

    ### 📁 Estructura ejemplo sugerida con React.js
    ```
    devtalles-interactive-web-development-exercises/
    ├── public
    ├── src/
    │   ├── excercises/
    │   |   ├── 01-expanding-cards/
    |   |   |   ├── components/
    |   |   |   ├── hooks/
    │   │   |   ├── ExpandingCards.tsx
    │   │   |   ├── ...
    │   |   ├── 02-progress-steps/
    |   |   |   ├── components/
    |   |   |   ├── hooks/
    │   │   |   ├── ProgressSteps.tsx
    │   │   |   ├── ...
    │   │   ├── ...
    │   ├── App.tsx
    │   ├── index.css
    │   └── main.tsx
    ├── package.json
    └── tsconfig.json
    ```

    ### ⚛️ Flujo de trabajo recomendado para React

    - **Trabaja en un componente a la vez**
    - **En `App.tsx`, cambia el componente activo:**
      ```tsx
      // import { ExpandingCards } from './01-expanding-cards/ExpandingCards'; // ← Comentado
      // import { ProgressSteps } from './02-progress-steps/ProgressSteps'; // ← Comentado
      import { RandomColorGenerator } from "./03-random-color-generator/RandomColorGenerator" // ← Activo


      export const App = () => {
        return (
          <RandomColorGenerator />
        )
      }
      ```

### 🎯 Ventajas de Esta Organización
- ✅ **Un solo proyecto organizado** para aprender de manera eficiente
- ✅ **Cambio rápido** entre ejercicios con imports especificados
- ✅ **Utilización óptima** de herramientas modernas

## 📚 Índice de Ejercicios

1. [Input Sumator](.01-input-sumator)
2. [Fibonacci Counter](./02-fibonacci-counter)
3. [Temperature Converter](./03-temperature-converter/)
4. [Word Reverser](./04-word-reverser/)
5. [Even or Odd Checker](./05-even-or-odd-checker/)
6. [TailwindCSS Email Subscribe Card](./06-tailwindcss-email-subscribe-card/)
7. [TailwindCSS Pricing Cards](./07-tailwindcss-pricing-cards/)
8. [TailwindCSS Login Modal](./08-tailwindcss-login-modal/)
9. [TailwindCSS Image Gallery](./09-tailwindcss-image-gallery/)
10. [TailwindCSS Prodct Modal](./10-tailwindcss-product-modal/)
11. [Expanding Cards](./11-expanding-cards/)
12. [Progress Steps](./12-progress-steps/)
13. [Random Color Generator](./13-random-color-generator/)
14. [FAQ Collapse](./14-faq-collapse/)
15. [Digital Clock](./15-digital-clock/)
16. [Character Counter](./16-character-counter/)
17. [Hidden Search Bar](./17-hidden-search-bar)
18. [Show/Hide Password](./18-show-hide-password/)
19. [Sound Board](./19-sound-board/)
20. [Tabs](./20-tabs/)
21. [Gallery Filter](./21-gallery-filter/)
22. [Create List Items](./22-create-list-items/)
23. [Blurry Loading Effect](./23-blurry-loading-effect/)
24. [Mobile Nav Menu](./24-mobile-nav-menu/)

## 💡 Consejos para el Éxito

### 📝 Mejores Prácticas

- **Implementa validaciones** antes de realizar operaciones
- **Mejora la UX** con CSS y feedback visual
- **Considera la accesibilidad** (alt text, labels)

### 🚀 Estrategias para el Éxito
- **Evita el Burnout**: Establece descansos regulares, usa la técnica Pomodoro para mantener la concentración sin agotarte.
- **Mantente Hidratado**: Asegúrate de tener agua cerca y tomar sorbos regularmente para mantener tu energía.
- **Toma Pausas Activas**: Levántate y estira las piernas cada hora para despejar la mente.
- **Construye Mapas Mentales**: Si te ves bloqueado, escribe o dibuja tus ideas en un mapa mental para clarificar pensamientos.

### ⚡ Productividad
- **Usa DevTools** para debugging
- **Comenta tu código** para explicar la lógica
- **Prueba en diferentes navegadores** para compatibilidad
- **Haz commits frecuentes** para trackear tu progreso

### 📚 Recursos Adicionales
- [MDN Web Docs](https://developer.mozilla.org/) - Documentación oficial
- [Can I Use](https://caniuse.com/) - Compatibilidad de navegadores
- [Recursos Adicionales](../recursos/README.md) - Colección de enlaces y herramientas para desarrolladores.

### ✨ Bienestar
- **Desconexión**: Asegúrate de hacer una desconexión digital después de un día largo codificando.
- **Ejercicio Regular**: Incorpora algún tipo de ejercicio físico para mantener el cuerpo activo.

## 🚀 Siguiente Nivel

### ¡Felicitaciones! Continúa fortaleciendo tus habilidades pasando al siguiente conjunto de prácticas:

### **[🔧 Ejercicios Intermedios](../intermedio/README.md)**

Aquí podrás aplicar lo aprendido y seguir mejorando a través de la práctica continua.

---

<div align="center">

### **🌱 Nivel Principiante Completado - ¡Sigue Creciendo! 🌱**

[🏠 Volver al Inicio](../) • [🔧 Nivel Intermedio](../intermedio/)

</div>

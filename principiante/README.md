
<div align="center">

<h1>🌱 Ejercicios - Nivel Principiante</h1>

![Principiante Badge](https://img.shields.io/badge/Nivel-Principiante-green?style=for-the-badge&logo=javascript)

<!-- **Fundamentos de desarrollo web con JavaScript/TypeScript, HTML5 y CSS3** -->

![Exercises](https://img.shields.io/badge/Ejercicios-15%20Prácticos-brightgreen.svg?style=for-the-badge)
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

2. **Es recomendable usar una librería de estilos, como `TailwindCSS` para facilitar la implementación de estilos durante el desarrollo. Las soluciones estarán estilizadas con el mismo, pero tienes total libertad de estilizar las aplicaciones a tu gusto. ¡Expresa ese potencial en tus ejercicios!**  

3. **Hay una carpeta denominada `solutions-react`, la cual es un proyecto de React siguiendo la organización recomendada para el proyecto que se muestra en la siguiente sección y que contendrá todos los archivos correspondientes para cada ejercicio.**   

## 🗂️ Organización Recomendada del Proyecto

Para optimizar tu flujo de trabajo, te recomendamos crear **UN SOLO PROYECTO** para todos los ejercicios de principiante. Para ello usaremos `Vite` como build tool: 


### ⚡ Flujo de Trabajo Recomendado para Vite

1. **Configura tu proyecto base**

    ```bash
    npm create vite@latest
    ```
2. **Trabaja en un ejercicio a la vez** modificando los archivos principales

    ### 📁 Estructura ejemplo sugerida con React.js
    ```
    my-react-project/
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

<!-- ACOMODAR EL INDICE -->
## 📚 Índice de Ejercicios

1. [Expanding Cards](./01-expanding-cards)
2. [Progress Steps](./02-progress-steps/)
3. [Random Color Generator](./03-random-color-generator/)
4. [FAQ Collapse](./04-faq-collapse/)
5. [Digital Clock](./05-digital-clock/)
6. [Character Counter](./06-character-counter/)
7. [Scroll Animation](./07-scroll-animation/)
8. [Hidden Search Bar](./08-hidden-search-bar)
9. [Show/Hide Password](./09-show-hide-password/)
10. [Sound Board](./10-sound-board/)
11. [Tabs](./11-tabs/)
12. [Gallery Filter](./12-gallery-filter/)
13. [Create List Items](./13-create-list-items/)
14. [Blurry Loading Effect](./14-blurry-loading-effect/)
15. [Mobile Nav Menu](./15-mobile-nav-menu/)

---

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

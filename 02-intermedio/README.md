<div align="center">

# 🔧 Ejercicios - Nivel Intermedio

![Intermedio Badge](https://img.shields.io/badge/Nivel-Intermedio-orange?style=for-the-badge&logo=javascript)

**Aprende a construir aplicaciones funcionales que consumen APIs y gestionan datos.**

[![Exercises](https://img.shields.io/badge/Ejercicios-2%20Prácticos-orange.svg?style=for-the-badge)](./01-scroll-animation/)
![Level](https://img.shields.io/badge/Dificultad-Intermedia-orange.svg?style=for-the-badge)

</div>

## 📋 Tabla de Contenidos

- [🎯 Objetivos del Nivel](#-objetivos-del-nivel)
- [⚙️ Tecnologías que aplicarás](#️-tecnologías-que-aplicarás)
- [🛠️ Prerrequisitos](#️-prerrequisitos)
- [🚀 Guía de Inicio y Flujo de Trabajo](#-guía-de-inicio-y-flujo-de-trabajo)
- [📚 Índice de Proyectos](#-índice-de-proyectos)
- [💡 Consejos para el Éxito](#-consejos-para-el-éxito)
- [🚀 Siguiente Nivel](#-siguiente-nivel)

## 🎯 Objetivos del Nivel

En este nivel, darás un salto cualitativo para crear aplicaciones más robustas que interactúan con servicios externos y manejan datos dinámicos.

### 🎓 Lo que aprenderás:

-   **Consumo de APIs Reales**: Realizar peticiones HTTP (GET, POST, etc.) para obtener y mostrar datos de servicios externos.
-   **Manejo de Asincronía**: Dominar `async/await` y `Promises` para gestionar operaciones que toman tiempo.
-   **Operaciones CRUD**: Crear, leer, actualizar y eliminar datos, utilizando `localStorage` para simular persistencia.
-   **Renderizado de Listas y Datos**: Mapear y mostrar colecciones de datos de forma eficiente.
-   **Manejo de Estados Complejos**: Gestionar estados de carga (`loading`), error y éxito para una mejor experiencia de usuario.
-   **Estructura de Proyectos**: Organizar tu código en módulos y componentes reutilizables.

## ⚙️ Tecnologías que aplicarás

Para resolver estos ejercicios, pondrás en práctica el siguiente conjunto de tecnologías y conceptos.

| Tecnología / Concepto | Propósito en los Ejercicios |
| :--- | :--- |
| **HTML5 / CSS3** | Para la estructura semántica y diseños más avanzados y responsivos (`Flexbox`, `Grid`).                     |
| **JavaScript / TypeScript** | Para la lógica de cliente, con un fuerte enfoque en asincronía (`Fetch API`, `Async/Await`).                |
| **React.js** | Aunque los conceptos son universales, las soluciones pueden usar React para la UI y el manejo de estado. |
| **APIs Externas (Ej. RestCountries)** | Para consumir datos del mundo real, practicar el manejo de JSON y mostrar información dinámica.          |
| **`localStorage`** | Para guardar datos en el navegador y hacer que la información persista entre sesiones.                   |

## 🛠️ Prerrequisitos

Para este nivel, se espera que ya tengas un entorno de desarrollo funcional. Asegúrate de que tus herramientas estén actualizadas.

| Herramienta | Cómo Verificar |
| :--- | :--- |
| **Node.js (+ npm)** | Abre tu terminal y ejecuta: `node -v` (se recomienda versión LTS). |
| **Visual Studio Code** | Asegúrate de tenerlo instalado y funcionando.                       |

## 🚀 Guía de Inicio y Flujo de Trabajo

El flujo de trabajo es el mismo que en el nivel anterior para mantener la consistencia. Cada proyecto es independiente.

### 1. Elige y Descarga un Proyecto

1.  **Navega al Proyecto:** Usa el [Índice de Proyectos](#-índice-de-proyectos) para seleccionar uno. Haz clic para ir a su carpeta.
2.  **Descarga el Código Inicial:** Dentro de la carpeta, busca y descarga el archivo `pasos-iniciales.zip`.

### 2. Prepara e Inicia el Proyecto

1.  **Descomprime el archivo `.zip`** en una ubicación de tu elección.
2.  **Abre la carpeta descomprimida** en Visual Studio Code.
3.  **Instala las dependencias** abriendo la terminal y ejecutando:
    ```bash
    npm install
    ```
4.  **Inicia la aplicación** con el siguiente comando:
    ```bash
    npm run dev
    ```
    La terminal te dará la dirección local (ej. `http://localhost:5173`) para que la abras en tu navegador.

### ¿Necesitas ver la Solución?

En la carpeta de cada ejercicio encontrarás también el archivo `solution-react.zip` para que puedas descargarlo y ejecutarlo siguiendo los mismos pasos.

## 📚 Índice de Proyectos

1.  [Scroll Animation](./01-scroll-animation/)
2.  [Type Ahead / Autocomplete](./02-type-ahead-autocomplete/)

## 💡 Consejos para el Éxito

Los proyectos intermedios introducen nuevos desafíos como la asincronía y el manejo de errores. Estas estrategias te ayudarán a superarlos.

### 📝 Mejores Prácticas
-   **Manejo de Errores**: Usa `try/catch` en tus llamadas asíncronas y siempre informa al usuario si algo sale mal.
-   **Estados de Carga**: Muestra un *spinner* o mensaje de "Cargando..." mientras esperas la respuesta de una API. Mejora enormemente la UX.
-   **Organiza tu Código**: Separa la lógica de las llamadas a la API de la lógica que renderiza la UI.

### 🚀 Estrategias y Productividad
-   **Divide y Vencerás**: Antes de escribir código, define los pasos: 1. Hacer el fetch. 2. Guardar los datos en una variable. 3. Mapear los datos para mostrarlos.
-   **Usa `console.log` como un profesional**: Inspecciona siempre la estructura de los datos que recibes de una API antes de intentar usarlos.
-   **Prueba la API por separado**: Usa herramientas como **Postman**, **Insomnia** o la extensión **Thunder Client** en VS Code para probar los *endpoints* de la API antes de integrarlos en tu código.

## 🚀 Siguiente Nivel

### ¡Felicidades! Cuando te sientas cómodo con estos conceptos, estarás listo para el siguiente desafío:

### **[🏆 Ejercicios Avanzados](../avanzado/README.md)**

---

<div align="center">

### **🔧 Nivel Intermedio Completado - ¡Sigue Creciendo! 🌱**

[🏠 Volver al Inicio](../) • [🏆 Nivel Avanzado](../avanzado/README.md)

</div>
<div align="center">

# 🏆 Ejercicios - Nivel avanzado

![Avanzado Badge](https://img.shields.io/badge/Nivel-Avanzado-red?style=for-the-badge&logo=typescript)

**Domina la integración con servicios externos, la autenticación y arquitecturas complejas.**

[![Exercises](https://img.shields.io/badge/Ejercicios-3%20Prácticos-red.svg?style=for-the-badge)](./01-multi-account-signin/)
![Level](https://img.shields.io/badge/Dificultad-Avanzada-red.svg?style=for-the-badge)

</div>

## 📋 Tabla de contenidos

- [🎯 Objetivos del nivel](#-objetivos-del-nivel)
- [⚙️ Tecnologías que aplicarás](#️-tecnologías-que-aplicarás)
- [🛠️ Prerrequisitos](#️-prerrequisitos)
- [🚀 Guía de inicio y flujo de trabajo](#-guía-de-inicio-y-flujo-de-trabajo)
- [📚 Índice de proyectos](#-índice-de-proyectos)
- [💡 Consejos para el éxito](#-consejos-para-el-éxito)
- [🎉 Finalización y próximos pasos](#-finalización-y-próximos-pasos)

## 🎯 Objetivos del nivel

En este nivel, construirás módulos funcionales y desacoplados que se integran con servicios de backend, API de terceros y sistemas de autenticación, preparando el terreno para crear aplicaciones a gran escala.

### 🎓 Lo que aprenderás:

-   **Autenticación de usuarios**: Implementar flujos de inicio de sesión social, con correo/contraseña y sin contraseña (*Magic Links*) utilizando servicios como Firebase.
-   **Integración con servicios externos**: Conectar tu frontend con plataformas BaaS (*Backend as a Service*) para gestionar datos y lógica de negocio.
-   **Comunicación con un backend propio**: Interactuar con una API REST personalizada para realizar operaciones que requieran lógica de negocio específica.
-   **Interacción con API de terceros**: Crear bots o aplicaciones que consuman y reaccionen a eventos de servicios como Telegram.
-   **Gestión de estado global y avanzado**: Manejar el estado de autenticación y datos de usuario a lo largo de toda la aplicación.
-   **Seguridad en el frontend**: Gestionar claves de API y proteger rutas para usuarios autenticados.
-   **TypeScript a profundidad**: Aplicar tipos avanzados para modelar datos de servicios externos y asegurar la integridad de la aplicación.

## ⚙️ Tecnologías que aplicarás

Para resolver estos ejercicios, necesitarás combinar tu conocimiento de frontend con habilidades de integración y arquitectura.

| Tecnología / Concepto | Propósito en los ejercicios |
| :--- | :--- |
| **React.js con TypeScript** | Para construir interfaces de usuario robustas, tipadas y modulares. |
| **Backend personalizado (Node.js)** | Para crear una API propia que maneje lógica de negocio específica que no puede delegarse a un servicio externo. |
| **Firebase (Authentication)** | Para implementar un sistema de autenticación completo y seguro. |
| **API de terceros (ej. Telegram Bot API)** | Para crear integraciones que van más allá del consumo de datos, interactuando con otros servicios. |
| **Manejo de variables de entorno (`.env`)** | Para gestionar de forma segura las claves de API y credenciales de servicios externos. |
| **Rutas protegidas** | Para restringir el acceso a ciertas partes de la aplicación solo a usuarios autenticados. |

## 🛠️ Prerrequisitos

Para abordar este nivel con éxito, es crucial tener una base sólida y un entorno de desarrollo bien configurado. Asegúrate de cumplir con lo siguiente.

| Requisito | Por qué es necesario | Cómo verificar |
| :--- | :--- | :--- |
| **Node.js y npm** | Te permite ejecutar el entorno de desarrollo de React y gestionar las librerías del proyecto. | 1. Abre la terminal, PowerShell de Windows, donde sea que desees ejecutar tus comandos. <br> 2. Escribe el comando `node -v` y presiona Enter. <br> 3. Deberías ver una versión de Node instalada. Si aparece un error, necesitas [instalar Node.js (versión LTS)](https://nodejs.org/). |
| **Editor de código (VS Code)** | Es el programa donde escribirás y editarás el código de los proyectos. | Simplemente asegúrate de tenerlo instalado y de que se abre sin problemas. Si no lo tienes, puedes [descargarlo gratis aquí](https://code.visualstudio.com/). |
| **Conocimientos del nivel intermedio** | Este nivel no explicará conceptos básicos. Se asume que ya sabes cómo funcionan y los has practicado. | Deberías sentirte cómodo con los siguientes temas: <br> • Uso de `async/await` para consumir API. <br> • Manejo del estado de la aplicación. <br> • Renderizado de listas de datos (usando `.map()`). |
| **Cuentas en servicios externos** | Los ejercicios se conectan con servicios reales que requieren una cuenta para poder usarlos. | 1. Para el primer ejercicio, necesitarás una cuenta de Google. <br> 2. Ve a la [página de Firebase](https://firebase.google.com/) y asegúrate de poder iniciar sesión con tu cuenta de Google para crear un proyecto (es gratuito). |

## 🚀 Guía de inicio y flujo de trabajo

El flujo de trabajo es idéntico a los niveles anteriores para mantener la consistencia. Cada proyecto es un módulo independiente.

### 1. Elige y descarga un proyecto

1.  **Navega al proyecto:** Usa el [índice de proyectos](#-índice-de-proyectos) para seleccionar uno. Haz clic para ir a su carpeta.
2.  **Descarga el código inicial:** Dentro de la carpeta, busca y descarga el archivo `pasos-iniciales.zip`.

### 2. Prepara e inicia el proyecto

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

### ¿Necesitas ver la solución?

Si en algún momento quieres revisar el código final, el proceso es muy similar:

1.  En la misma carpeta del ejercicio, busca y descarga el archivo `solution-react.zip`.
2.  Repite los mismos pasos: descomprime, abre la carpeta en VS Code, ejecuta `npm install` y finalmente `npm run dev`.

## 📚 Índice de proyectos

1.  [Multiaccount signin/login](./01-multi-account-signin/)

## 💡 Consejos para el éxito

Los desafíos avanzados requieren una mentalidad de resolución de problemas, una lectura cuidadosa de la documentación y una sólida planificación.

### 🧠 Enfoque en el aprendizaje genuino

> **Recomendación clave:** <br> Para sacar el máximo provecho de estos ejercicios, **desactiva temporalmente las herramientas de IA o generadores de código** (como GitHub Copilot). El objetivo es que aprendas a enfrentarte a problemas reales, a leer documentación oficial y a buscar soluciones por tu cuenta. Este proceso es fundamental para convertirte en un desarrollador competente.

### 📝 Mejores prácticas
-   **Lee la documentación oficial**: Los servicios como APIs de terceros o plataformas BaaS tienen guías de inicio rápido y documentación detallada. Conviértela en tu principal fuente de consulta antes de buscar tutoriales.
-   **Gestiona tus claves de API**: Nunca subas tus claves secretas a un repositorio público (como GitHub). Utiliza siempre archivos `.env` (que ya están incluidos en el `.gitignore` de los proyectos) para almacenar y cargar tus credenciales de forma segura.
-   **Abstrae la lógica de servicios**: Crea módulos o *hooks* personalizados para encapsular la lógica de interacción con servicios externos (por ejemplo, `services/api.ts` o `hooks/useUsers.ts`). Esto mantiene tus componentes de UI limpios, desacoplados y facilita la reutilización del código.
-   **Prioriza el tipado**: Aprovecha TypeScript al máximo. Define interfaces o tipos para las respuestas de las APIs y para los datos clave de tu aplicación. Un buen tipado previene errores, mejora el autocompletado y hace el código más fácil de mantener.

### 🚀 Estrategias y productividad
-   **Planifica antes de programar**: Antes de escribir una sola línea de código, haz un diagrama simple o un esquema. ¿Qué componentes necesitas? ¿Cómo fluirán los datos entre ellos? ¿Qué estados necesita gestionar cada uno? Una planificación de 5 minutos te puede ahorrar horas de depuración.
-   **Depura como un profesional**: Usa las herramientas de desarrollo de tu navegador de forma intensiva. La pestaña "Network" es crucial para inspeccionar las peticiones a las APIs y sus respuestas, mientras que extensiones como "React Developer Tools" te permiten analizar el estado y las props de tus componentes en tiempo real.
-   **Construye de forma incremental**: No intentes implementar toda la funcionalidad de golpe. Divide el problema en partes más pequeñas y manejables. Por ejemplo:
    1.  Primero, logra que la petición a la API funcione y muestra los datos en la consola.
    2.  Luego, renderiza esos datos en una interfaz simple.
    3.  Finalmente, añade la gestión de estados de carga (*loading*), errores y la interacción del usuario.

## 🎉 Finalización y próximos pasos

### ¡Excelente trabajo! Completar este nivel demuestra que tienes las habilidades para construir aplicaciones modernas y completas que se integran con el mundo real.

El siguiente paso no es un nuevo nivel de ejercicios, sino aplicar todo lo aprendido en un **proyecto personal completo** que integre frontend, backend (propio o BaaS), autenticación y una lógica de negocio que resuelva un problema real. ¡El límite lo pones tú!

---

<div align="center">

### **🏆 Nivel avanzado completado - ¡Listo para crear proyectos reales! ✨**

[🏠 Volver al inicio](../) • [⏪ Volver a nivel intermedio](../02-intermedio/README.md)

</div>
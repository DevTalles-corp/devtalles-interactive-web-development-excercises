<div align="center">

<h1>🌱 Ejercicios - Nivel Principiante</h1>

![Principiante Badge](https://img.shields.io/badge/Nivel-Principiante-green?style=for-the-badge&logo=javascript)

[![Exercises](https://img.shields.io/badge/Ejercicios-24%20Prácticos-brightgreen.svg?style=for-the-badge)](./01-expanding-cards/)
![Level](https://img.shields.io/badge/Dificultad-Básica-green.svg?style=for-the-badge)

</div>

## 📋 Tabla de Contenidos

- [🎯 Objetivos del Nivel](#-objetivos-del-nivel)
- [⚙️ Tecnologías que aplicarás en este nivel](#️-tecnologías-que-aplicarás-en-este-nivel)
- [🛠️ Configuración de tu Entorno](#️-configuración-de-tu-entorno)
- [🚀 Guía de Inicio y Flujo de Trabajo](#-guía-de-inicio-y-flujo-de-trabajo)
- [📚 Índice de Ejercicios](#-índice-de-ejercicios)
- [💡 Consejos para el Éxito](#-consejos-para-el-éxito)
- [🚀 Siguiente Nivel](#-siguiente-nivel)


## 🎯 Objetivos del Nivel

En este nivel desarrollarás habilidades clave para la construcción de aplicaciones web básicas e interactivas.

### 🎓 Lo que aprenderás:
- **Gestión de Estado**: Controlar datos que cambian en tiempo real.
- **Manipulación del DOM**: Trabajar dinámicamente con elementos HTML.
- **Manejo de Eventos**: Responder a acciones del usuario como clics e inputs.
- **Renderizado Condicional**: Mostrar/ocultar contenido dinámicamente.
- **Comunicación entre Componentes**: Intercambiar información entre partes de la UI.
- **Formularios Controlados**: Capturar y validar entradas del usuario.
- **Animaciones y Transiciones**: Crear experiencias visuales fluidas.

## ⚙️ Tecnologías que aplicarás en este nivel

Para resolver estos ejercicios, pondrás en práctica el siguiente conjunto de tecnologías. Las soluciones están construidas usando esta combinación.

| Tecnología | Propósito en los Ejercicios |
| :--- | :--- |
| **HTML5 / CSS3** | Para la estructura base y los estilos visuales de cada componente. |
| **JavaScript / TypeScript** | Para toda la lógica y la interactividad. Las soluciones usan **TypeScript** para un código más robusto. |
| **React.js** | Para construir la interfaz de usuario de forma modular y gestionar el estado de los componentes. |
| **TailwindCSS** | Para aplicar estilos de forma rápida y directa en el HTML sin escribir archivos CSS separados. |
| **`clsx` y `tailwind-merge`** | Pequeños paquetes de ayuda para manejar las clases de CSS de forma condicional y sin conflictos. |

## 🛠️ Configuración de tu Entorno

Antes de empezar, asegúrate de tener instaladas estas dos herramientas gratuitas en tu computadora. Son la base para todos los ejercicios.

| Herramienta | ¿Para qué sirve? | ➡️ Link de Descarga | Cómo Verificar |
| :--- | :--- | :--- | :--- |
| **Node.js (+ npm)** | Es el motor que ejecuta nuestro JavaScript. **npm** es su asistente para instalar las librerías del proyecto. | **[nodejs.org](https://nodejs.org/)** <br> *(Elige la versión **LTS**)* | Abre tu terminal y escribe:<br> `node -v` |
| **Visual Studio Code** | Es el programa donde escribirás, editarás y guardarás todo tu código. | **[code.visualstudio.com](https://code.visualstudio.com/)** | Si el programa se abre, está listo. |

## 🚀 Guía de Inicio y Flujo de Trabajo


### 1. Crea tu Carpeta Principal: 

En un lugar fácil de recordar (como el Escritorio o Documentos), crea una **carpeta nueva y vacía**. Nómbrala como quieras, por ejemplo: `devtalles-ejercicios`.

Cada ejercicio es independiente. Sigue estos pasos para empezar a programar en minutos:

### 2. Elige y Descarga un Ejercicio

1.  **Navega al Ejercicio:** Utiliza el [Índice de Ejercicios](#-índice-de-ejercicios) que se encuentra más abajo para encontrar un ejercicio que te interese. Haz clic en su nombre para ir a la carpeta de ese ejercicio.

2.  **Descarga el Código Inicial:** Dentro de la carpeta, verás un archivo llamado `pasos-iniciales.zip`. 
    - Haz clic sobre el nombre del archivo para ir a su página de detalles.
    - En la nueva pantalla, busca un botón con un ícono de descarga (una flecha apuntando hacia abajo) o la palabra Download, generalmente ubicado a la derecha. Presiónalo para guardarlo en tu computadora.

### 3. Prepara e Inicia el Proyecto

Ya con el archivo `.zip` en tu computadora, haz lo siguiente:

1.  **Descomprime el Archivo:** Busca el archivo descargado y descomprímelo. Esto creará una carpeta con el mismo nombre del ejercicio (ej: `input-sumator`), que contiene el proyecto de React listo para usar.

2.  **Abre el Proyecto en VS Code:** Abre Visual Studio Code, ve a `File > Open Folder...` y selecciona la carpeta que acabas de descomprimir.

3.  **Instala las Dependencias:** Abre la terminal integrada de VS Code (puedes usar el atajo `Ctrl + Ñ` o ir al menú `Terminal > New Terminal`). Al abrirse, esta terminal ya estará dentro de la carpeta de tu proyecto. Ahora, ejecuta el siguiente comando para descargar todo lo necesario:
    ```bash
    npm install
    ```

4.  **Inicia la Aplicación:** Una vez termine la instalación, ejecuta este comando para poner en marcha el proyecto:
    ```bash
    npm run dev
    ```

¡Y listo! La terminal te mostrará una dirección local (normalmente `http://localhost:5173`). Abre ese enlace en tu navegador para ver la aplicación base y comenzar a programar.

### ¿Necesitas ver la Solución?

Si en algún momento quieres revisar el código final, el proceso es muy similar:

1.  En la misma carpeta del ejercicio, busca y descarga el archivo `solution-react.zip`.
2.  Repite los mismos pasos: descomprime, abre la carpeta en VS Code, ejecuta `npm install` y finalmente `npm run dev`.


## 📚 Índice de Ejercicios

1. [Input Sumator](./01-input-sumator)
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

- **Implementa validaciones** antes de realizar operaciones.
- **Mejora la UX** con CSS y feedback visual.
- **Considera la accesibilidad** (alt text, labels).
- **Comenta tu código** para explicar la lógica.
- **Haz commits frecuentes** para guardar tu progreso.


### 🚀 Estrategias para Aprender
- **Evita el Burnout**: Usa la técnica Pomodoro (25 min de trabajo, 5 de descanso).
- **Toma Pausas Activas**: Levántate y estira las piernas cada hora.
- **No te frustres**: Si te bloqueas, revisa la solución, entiéndela y luego intenta replicarla sin ver.

## 🚀 Siguiente Nivel

### ¡Felicitaciones! Continúa fortaleciendo tus habilidades pasando al siguiente conjunto de prácticas:

### **[🔧 Ejercicios Intermedios](../intermedio/README.md)**

---

<div align="center">

### **🌱 Nivel Principiante Completado - ¡Sigue Creciendo! 🌱**

[🏠 Volver al Inicio](../) • [🔧 Nivel Intermedio](../intermedio/README.md)

</div>
# Ejercicio 1: Login Social con Firebase

## 📝 Descripción

Crear una aplicación web simple con un flujo de autenticación completo usando **Firebase Authentication**. La aplicación tendrá una página de inicio de sesión pública donde los usuarios pueden autenticarse con proveedores sociales (Google y GitHub, aunque puedes agregar tantos como desees) y una página de perfil privada que solo los usuarios autenticados pueden ver.

Este ejercicio se centra en la integración de un servicio de terceros (Firebase), el manejo de estado de autenticación global, la protección de rutas y el uso de variables de entorno para gestionar claves de API de forma segura.

## 🎯 Objetivos de Aprendizaje

* **Integración de SDK de Terceros:** Aprender a configurar e integrar el SDK de Firebase en una aplicación web.
* **Autenticación Social:** Implementar flujos de inicio de sesión OAuth con proveedores populares como Google y GitHub.
* **Manejo de Estado Global:** Gestionar el estado de autenticación del usuario (quién está conectado) a lo largo de toda la aplicación.
* **Rutas Públicas y Privadas:** Implementar un sistema de enrutamiento que restrinja el acceso a ciertas páginas basándose en el estado de autenticación.
* **Operaciones Asíncronas:** Manejar promesas y el ciclo de vida de las peticiones de autenticación.
* **Variables de Entorno:** Aprender a almacenar y utilizar credenciales y configuraciones sensibles de forma segura.

## ⚙️ Instrucciones

### Parte 1: Configuración de Firebase (El Backend)

Antes de escribir una sola línea de código, necesitas configurar tu proyecto en Firebase. Sigue estos pasos cuidadosamente:

1.  **Crear el Proyecto en Firebase:**
    * Ve a la [Consola de Firebase](https://console.firebase.google.com/).
    * Haz clic en **"Añadir proyecto"** y asígnale un nombre (ej. "login-social-ejercicio").
    * Sigue los pasos del asistente. Puedes deshabilitar Google Analytics para este ejercicio si lo deseas.

2.  **Registrar tu Aplicación Web:**
    * Dentro del panel de tu nuevo proyecto, haz clic en el botón de `Agregar app` y luego en el icono de web **`</>`** para registrar una nueva aplicación web.
    * Dale un apodo a tu app (ej. "Cliente Web de Login").
    * Haz clic en "Registrar app". Firebase te mostrará un objeto de configuración (`firebaseConfig`). **¡Copia este objeto, lo necesitarás en un momento!**

3.  **Activar la Autenticación:**
    * En el menú de la izquierda, ve a **Compilación > Authentication**.
    * Haz clic en el botón **"Comenzar"**.

4.  **Habilitar Proveedores de Inicio de Sesión:**
    * Ve a la pestaña **"Sign-in method"** o **"Método de acceso"**.
    * En la lista de "Proveedores", busca y habilita **Google**. Te pedirá un nombre del proyecto, coloca lo que desees. El correo electrónico solo selecciona tu correo, el cual aparecerá en la lista desplegable. Haz clic en "Guardar".
    * Ahora, busca y habilita **GitHub**. Firebase te pedirá un "ID de cliente" y un "Secreto de cliente".
        * Para obtenerlos, necesitas [crear una aplicación OAuth en GitHub](https://github.com/settings/developers).
        * Durante la creación, GitHub te pedirá una "URL de callback de autorización". Cópiala desde la ventana de configuración de Firebase (se ve algo así como `https://<auth-domain>/__/auth/handler`).
        * Una vez creada la app en GitHub, copia el ID y el Secreto de Cliente y pégalos en Firebase. Haz clic en "Guardar".

---

### Parte 2: Configuración del Proyecto (El Frontend)

1.  **Variables de Entorno:**
    * En la raíz de este proyecto, encontrarás un archivo llamado `env.template`.
    * **Crea una copia** de este archivo y renómbrala a **`.env`**.
    * Abre el archivo `.env` y rellena los valores con las claves del objeto `firebaseConfig` que copiaste en el paso 2 de la configuración de Firebase.

2.  **Estructura Visual (Los Componentes):**
    * **`LoginPage`:** La página pública que se muestra a los usuarios no autenticados. Contiene los botones para iniciar sesión.
    * **`ProfilePage`:** La página privada que muestra la información del usuario (foto, nombre, email) una vez que ha iniciado sesión. Es la única ruta protegida.
    * **`LoginCard` / `SocialLoginButtons`:** Componentes de UI reutilizables que se encargan de la presentación visual de la tarjeta de inicio de sesión y sus botones.

3.  **Lógica de Estado (El "Cerebro"):**
    * Necesitarás gestionar dos piezas clave de estado de forma global:
    * **`user`:** Una variable que contendrá el objeto del usuario si está autenticado, o `null` si no lo está.
    * **`loading`:** Un booleano para saber si la aplicación todavía está verificando el estado de autenticación inicial. Esto es útil para mostrar un mensaje de "Cargando..." y evitar redirecciones extrañas al cargar la página.

4.  **Flujo de Interacción (La "Magia"):**
    * Al cargar la aplicación, se debe inicializar un **"observador"** de Firebase que verifique si ya existe un usuario autenticado. Mientras esto ocurre, el estado `loading` debe ser `true`.
    * Una vez que el observador responde:
        * Actualiza el estado `user` con la respuesta (el objeto del usuario o `null`).
        * Cambia el estado `loading` a `false`.
    * El sistema de **enrutamiento** debe reaccionar a estos cambios:
        * Si `loading` es `false` y `user` es `null`, solo se deben poder visitar las rutas públicas (ej. `/login`). Si se intenta acceder a una ruta privada, se debe redirigir a `/login`.
        * Si `loading` es `false` y `user` tiene datos, solo se deben poder visitar las rutas privadas (ej. `/profile`). Si se intenta acceder a una ruta pública, se debe redirigir a `/profile`.
    * Cuando un usuario hace clic en un botón de "Iniciar Sesión":
        * Se debe llamar a la función correspondiente de Firebase para ese proveedor (ej. `signInWithPopup`).
        * Esta acción es asíncrona. No necesitas manejar el resultado directamente, ya que el **observador** detectará el cambio y actualizará el estado `user` automáticamente, provocando la redirección.
    * Cuando el usuario hace clic en "Cerrar Sesión" en su perfil:
        * Se debe llamar a la función `signOut` de Firebase.
        * El **observador** detectará este cambio, el estado `user` pasará a ser `null` y la aplicación redirigirá al usuario a `/login`.

## 💡 Recomendaciones

* **🚫 ¡Evita la IA y Copilot!**
    El objetivo principal de este ejercicio es que aprendas a **navegar y utilizar la documentación oficial de Firebase**. La habilidad de leer documentación de terceros es una de las más importantes para un desarrollador. Evita la tentación de usar herramientas de IA o generadores de código; en su lugar, consulta la documentación para cada paso.

* **Entender el Observador `onAuthStateChanged`:** Esta función de Firebase es el corazón de la sincronización de estado. Asegúrate de entender bien cómo funciona y por qué es tan potente para mantener tu UI actualizada.

* **Vanilla JS:**
    * Manejarás el enrutamiento manualmente (ej. cambiando `window.location.href` o usando la History API).
    * Tendrás que crear una instancia global o un módulo para gestionar el estado `user` y `loading`, y actualizar el DOM manualmente cuando estos valores cambien.

* **Frameworks (React, Vue, Svelte, etc.):**
    * Usa las herramientas nativas para el manejo de estado global. En React, el **Context API** es ideal para esto.
    * Los hooks como `useState` y `useEffect` (en React) son perfectos para gestionar el estado local y los efectos secundarios como la suscripción al observador de Firebase.

## 🎬 Resultado Esperado

![Video de demostración](./01-multi-account-signin.gif)

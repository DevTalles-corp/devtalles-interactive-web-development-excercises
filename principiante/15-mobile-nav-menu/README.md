# Ejercicio 15: Mobile Navigation Menu (Menú de Navegación Móvil)

## 📝 Descripción

Implementar un patrón de navegación común en dispositivos móviles: un botón "hamburguesa" que, al ser presionado, muestra u oculta un menú de navegación lateral.

## 🎯 Objetivos de Aprendizaje

* **Gestión de Estado Booleano:** Manejar el estado fundamental de "abierto/cerrado".
* **Renderizado Condicional de Clases y Estilos:** Usar el estado para alternar clases que controlan la visibilidad y animación.
* **Manejo de Eventos de Clic:** Reaccionar a la interacción del usuario para cambiar el estado.
* **Interacción con el DOM Global:** Opcionalmente, modificar el `<body>` para prevenir el scroll.

## ⚙️ Instrucciones

1.  **Estructura Visual (Los Componentes):**
    * **`HamburgerButton`:** El botón interruptor.
    * **`NavPanel`:** El menú con los enlaces, oculto por defecto.
    * **`Overlay` (Opcional):** Una capa que cubre el contenido principal.

2.  **Lógica de Estado (El "Cerebro"):**
    * Una única variable de estado booleana, `isOpen`, inicializada en `false`.

3.  **Flujo de Interacción (La "Magia"):**
    * El `HamburgerButton` tiene un `onClick` que invierte el valor del estado `isOpen`.
    * La visibilidad del `NavPanel` y su animación se controlan con una clase condicional (ej. `.is-open`) que depende del estado `isOpen`.
    * El `HamburgerButton` también puede cambiar su apariencia (de hamburguesa a "X") basándose en el mismo estado.
    * (Opcional) Un efecto secundario puede añadir/quitar una clase (`.no-scroll`) al `<body>` cuando `isOpen` cambia.

## 💡 Recomendaciones

* **Transiciones con CSS:** Toda la animación del menú debe ser manejada con la propiedad `transition` de CSS. JavaScript solo cambia el estado que aplica la clase que dispara la transición.
* **Portal:** En React, para renderizar elementos como el menú fuera de la jerarquía del DOM del componente (ej. en el `<body>`), se puede usar un "Portal", útil para evitar problemas de `z-index`.
* **Accesibilidad:** El botón debe tener el atributo `aria-expanded`, cuyo valor (`true`/`false`) debe estar vinculado al estado `isOpen`.
* **Vanilla JS:** Se usa `classList.toggle()` en el panel del menú, el botón y el `<body>`.
* **React/Vue/Angular:** El estado `isOpen` controlaría de forma declarativa las clases de todos los elementos. El efecto para modificar el `<body>` se gestionaría dentro de `useEffect` o un hook de ciclo de vida equivalente.

## 🎬 Resultado Esperado

![Video de demostración](./15-mobile-nav-menu.gif)
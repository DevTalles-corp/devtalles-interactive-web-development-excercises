# Ejercicio 12: Gallery Filter (Filtro de Galería)

## 📝 Descripción

Crear una galería de imágenes o tarjetas que pueda ser filtrada por categorías usando un menú de botones. Al hacer clic en una categoría, la galería debe mostrar únicamente los elementos que pertenecen a ella.

## 🎯 Objetivos de Aprendizaje

* **Filtrado de Datos:** Usar funciones de array (especialmente `.filter()`) para crear un subconjunto de datos.
* **Gestión de Estado de Filtro:** Mantener el estado del criterio de filtro actual.
* **Renderizado de Listas Dinámicas:** Re-renderizar una lista cada vez que el conjunto de datos filtrado cambia.
* **Estado Derivado:** Calcular datos para la vista a partir del estado principal.

## ⚙️ Instrucciones

1.  **Estructura Visual y de Datos:**
    * **Datos:** Un array `allItems` con todos los objetos de la galería. Cada objeto debe tener `id`, `imageUrl`, y `category`.
    * **`FilterMenu`:** Renderiza botones para cada categoría, más un botón para "All".
    * **`GalleryGrid`:** Renderiza la lista de imágenes o tarjetas.

2.  **Lógica de Estado (El "Cerebro"):**
    * **`activeFilter`:** Un string que almacena la categoría seleccionada. Se inicializa en `'all'`.
    * **Datos Derivados:** La lista de ítems a mostrar (`filteredItems`) no es un estado, sino que se calcula en cada renderizado.

3.  **Flujo de Interacción (La "Magia"):**
    * Al hacer clic en un botón del `FilterMenu`, se actualiza el estado `activeFilter`.
    * El componente principal reacciona al cambio en `activeFilter`.
    * **Lógica de Filtrado:**
        * Si `activeFilter` es `'all'`, `filteredItems` es igual al array `allItems`.
        * Si no, `filteredItems` se genera con `allItems.filter(item => item.category === activeFilter)`.
    * La `GalleryGrid` recibe `filteredItems` y renderiza los elementos correspondientes.

## 💡 Recomendaciones

* **Evitar Estado Duplicado:** No crees un estado para `filteredItems`. Siempre que un valor pueda ser calculado a partir del estado existente, debe hacerse así para mantener una "única fuente de la verdad".
* **Animación:** Puedes animar la aparición y desaparición de los elementos para que el filtrado se vea más pulido, usando librerías de animación o transiciones CSS.
* **Vanilla JS:** Al hacer clic en un filtro, iterarías sobre todos los elementos de la galería en el DOM y les añadirías/quitarías una clase `.hidden` basándote en su `data-category`.
* **React/Vue/Angular:** El filtrado se puede realizar en la función de renderizado o, para optimización, con `useMemo` (React) o una `computed property` (Vue). El template simplemente mapea sobre el resultado de esta lógica.

## 🎬 Resultado Esperado

![Video de demostración](./12-gallery-filter.gif)
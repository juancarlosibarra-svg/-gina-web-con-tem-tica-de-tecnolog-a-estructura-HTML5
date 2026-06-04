## 🏗️ Estructura Semántica Obligatoria (HTML5)

La arquitectura del documento `index.html` respeta estrictamente la jerarquía semántica nativa exigida:

👉 [https://github.com/juancarlosibarra-svg/TAREA-P-gina-web-con-tem-tica-de-tecnolog-a-estructura-HTML5](https://github.com/juancarlosibarra-svg/TAREA-P-gina-web-con-tem-tica-de-tecnolog-a-estructura-HTML5)

* **`<header>`**: Contenedor principal de la parte superior que aloja la identidad de la marca.
* **`<nav>`**: Barra de navegación fija con enlaces de ancla internos y menú hamburguesa interactivo optimizado para móviles.
* **`<main>`**: Eje central del documento que agrupa el flujo principal de información.
* **`<section>`**: Bloques de contenido independientes y correctamente organizados:
  1. *Section Hero*: Impacto visual con CTA (Llamado a la acción).
  2. *Section Nosotros*: Reseña histórica y filosofía del negocio.
  3. *Section Servicios (Menú)*: Cuadrícula construida con **CSS Grid** para desplegar las especialidades.
  4. *Section Contacto*: Contenedor del formulario de reservaciones.
* **`<footer>`**: Cierre de la página con créditos de desarrollo, año de vigencia (2026) y enlaces a redes sociales.

---

## 💡 Funcionalidades JavaScript Implementadas
1. **Manipulación del DOM**: Navbar dinámica que altera sus clases y diseño mediante `classList` al detectar el evento de desplazamiento (`window.scrollY`).
2. **Validación con Expresiones Regulares**: Sistema que evalúa campos obligatorios y la estructura del correo electrónico, limpiando los mensajes de error en tiempo real con el evento `input`.

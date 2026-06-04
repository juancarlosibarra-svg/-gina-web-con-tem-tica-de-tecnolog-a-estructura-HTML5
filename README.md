# El Rincón del Izote - Gastronomía de El Salvador

Landing page interactiva diseñada para promover el patrimonio gastronómico tradicional de El Salvador. Este proyecto se enfoca en una experiencia fluida e interactiva en el lado del cliente utilizando JavaScript moderno nativo.

## 🚀 Enlace del Sitio Publicado
Puedes visitar el sitio web desplegado aquí: [https://juancarlosibarra-svg.github.io/TAREA-P-gina-web-con-tem-tica-de-tecnolog-a-estructura-HTML5-y-CSS/](https://juancarlosibarra-svg.github.io/TAREA-P-gina-web-con-tem-tica-de-tecnolog-a-estructura-HTML5-y-CSS/) 

## 🛠️ Tecnologías Empleadas
* **HTML5**: Uso de elementos semánticos para optimizar la estructura y el SEO.
* **CSS3 Custom Properties**: Variables reutilizables para colores y tipografía, layouts fluidos con CSS Grid y Flexbox.
* **JavaScript (Vanilla)**: Manipulación interactiva del DOM sin dependencias ni librerías externas.
* **FontAwesome**: Iconografía temática integrada de manera ágil.

## 💡 Funcionalidades Principales
1. **Manipulación Avanzada del DOM**: Navbar dinámica que detecta la posición de scroll (`window.scrollY`) aplicando clases dinámicas, y un menú hamburguesa responsivo completamente funcional para pantallas pequeñas mediante eventos de escucha.
2. **Validación Exhaustiva en Tiempo Real**: El formulario de reservas cuenta con verificación inmediata empleando el evento `input`. Valida campos vacíos, restringe longitudes mínimas y evalúa correos electrónicos mediante expresiones regulares (`Regex`).
3. **Persistencia Visual del Flujo**: El formulario procesa los datos de forma síncrona controlando el evento `submit` (`preventDefault`). Al validar con éxito, destruye el formulario del DOM y renderiza una tarjeta de confirmación de reserva interactiva y personalizada con el nombre del cliente.

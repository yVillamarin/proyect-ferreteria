# Landing Demo - Plantilla de Portafolio

Esta es una plantilla de landing page demo diseñada para presentar a posibles clientes como portafolio de muestras. Todos los elementos visuales usan fondos unicolores que pueden ser fácilmente reemplazados por imágenes reales del cliente.

## 🎨 Características

- **Fondos unicolores**: Todas las imágenes han sido reemplazadas por fondos de colores sólidos para fácil personalización
- **Contenido genérico**: Textos de prueba que pueden ser adaptados a cualquier negocio
- **Contacto demo**: Números de teléfono y enlaces de redes sociales genéricos
- **React + Vite**: Construido con React y Vite para desarrollo rápido
- **Framer Motion**: Animaciones suaves y profesionales
- **Responsive**: Diseño adaptativo para todos los dispositivos

## 📁 Estructura del Proyecto

```
demo-landing/
├── src/
│   ├── components/       # Componentes React
│   │   ├── About.jsx
│   │   ├── AppointmentScheduler.jsx
│   │   ├── Benefits.jsx
│   │   ├── Carousel.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Location.jsx
│   │   ├── ProductsCarousel.jsx
│   │   ├── Promotions.jsx
│   │   └── Services.jsx
│   ├── data/            # Datos de la aplicación
│   │   ├── carousel.js  # Slides del carrusel con colores
│   │   └── products.js  # Productos con colores
│   ├── hooks/           # Custom hooks
│   ├── utils/           # Utilidades
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/              # Archivos estáticos
├── index.html
└── package.json
```

## 🚀 Instalación y Uso

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

### Build para producción

```bash
npm run build
```

### Preview de producción

```bash
npm run preview
```

## 🎯 Personalización

### Reemplazar Colores por Imágenes

Para reemplazar los fondos unicolores por imágenes reales:

1. **Carousel**: Edita `src/data/carousel.js` y cambia `bgColor` por `bgImage` con la ruta de tu imagen
2. **Services**: Edita `src/components/Services.jsx` y cambia `bgColor` por `image` en cada servicio
3. **Gallery**: Edita `src/components/Gallery.jsx` y cambia `bgColor` por `image` en cada item
4. **Promotions**: Edita `src/components/Promotions.jsx` y cambia `bgColor` por `image` en cada promo
5. **Products**: Edita `src/data/products.js` y cambia `bgColor` por `image` en cada producto

### Actualizar Información de Contacto

- **WhatsApp**: Busca `+1234567890` en todos los componentes y reemplázalo con tu número real
- **Redes Sociales**: Edita `src/components/Contact.jsx` con tus enlaces reales
- **Ubicación**: Edita `src/components/Location.jsx` con tu dirección y mapa real

### Personalizar Textos

Todos los textos de prueba están marcados como "Demo" o genéricos. Busca y reemplaza:
- "Tu Negocio Demo" → Nombre de tu negocio
- "Servicio Demo X" → Nombres reales de tus servicios
- "Producto Demo X" → Nombres reales de tus productos
- Textos descriptivos genéricos → Descripciones específicas de tu negocio

## 📦 Componentes

### Carousel
Carrusel principal con 3 slides animados usando fondos de colores.

### Services
Grid de servicios con precios y botón de WhatsApp para agendar.

### Gallery
Galería de trabajos realizados con fondos de colores.

### Promotions
Sección de promociones y paquetes especiales.

### ProductsCarousel
Carrusel de productos con botón de pedido por WhatsApp.

### AppointmentScheduler
Modal flotante para agendar citas con formulario completo.

### Contact
Botones de redes sociales y contacto directo.

### Location
Información de ubicación con mapa integrado.

### Footer
Pie de página con información del negocio.

## 🎨 Colores Utilizados

Los fondos unicolores usan una paleta de tonos marrones/dorados:
- `#B09061` - Marrón dorado claro
- `#8B7355` - Marrón medio
- `#A67B5B` - Marrón caramelo
- `#C4956A` - Marrón terracota
- `#D4A574` - Beige dorado
- `#DEB887` - Burlywood
- `#D2691E` - Chocolate
- `#F4A460` - Arena
- `#BC8F8F` - Rosado marrón

Puedes cambiar estos colores por la paleta de tu marca.

## 📝 Notas

- Esta plantilla está diseñada como demo/portafolio para mostrar a clientes potenciales
- Todos los enlaces de WhatsApp usan números genéricos (+1234567890)
- Los mapas usan ubicaciones genéricas
- Los textos son placeholders que deben ser personalizados
- Las imágenes han sido reemplazadas por fondos de colores para facilitar la personalización

## 🤝 Contribución

Esta es una plantilla demo, pero si encuentras mejoras siéntete libre de adaptarla a tus necesidades.

## 📄 Licencia

Esta plantilla es de uso libre para proyectos personales y comerciales.

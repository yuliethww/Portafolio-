# Portafolio Web Temático Sailor Moon ✨🌙

Este portafolio está inspirado en la estética mágica y femenina de Sailor Moon. Es elegante, interactivo, responsivo y fácil de personalizar. Ideal para desarrolladoras creativas que quieren destacar su trabajo con un toque único y profesional.

## 🌟 Secciones Incluidas
- **Presentación**: Nombre, foto y breve descripción profesional.
- **Proyectos**: Muestra al menos 3 proyectos con título, imagen, descripción y enlace a GitHub o demo.
- **Sobre mí**: Formación, habilidades, tecnologías y áreas de interés.
- **Contacto**: Formulario funcional (nombre, correo, mensaje) con notificaciones animadas.
- **Footer**: Frase inspiradora y detalles visuales de luna.

## 🎨 Paleta y Tipografías
- **Colores principales**: Rosa suave (#eab5c5), verde suave (#a8e6cf), dorado (#ffd700), lila (#ffe4fa), blanco y negro.
- **Tipografías**: 'Playfair Display' (títulos) y 'Quicksand' (cuerpo).

## ⚙️ Personalización Rápida
Toda la información personal, proyectos y colores se configuran en `config.js`:

```
window.PORTFOLIO_CONFIG = {
  personal: {
    name: "Cinthia Villalaz",
    title: "Desarrolladora Web & Diseñadora Creativa",
    description: "Apasionada por crear experiencias digitales elegantes...",
    avatar: "mao mao.jpg"
  },
  projects: [
    { title: "Gestor de Recetas Imperiales", image: "scroll1.svg", description: "...", link: "#", linkLabel: "GitHub" },
    // ...más proyectos
  ],
  about: {
    formation: "Ingeniería en Sistemas",
    skills: ["HTML", "CSS", "JavaScript", "Python", "React"],
    technologies: ["Git", "Figma", "APIs REST"],
    interests: ["Diseño", "Ilustración", "Botánica"]
  },
  colors: {
    primary: "#eab5c5",
    secondary: "#a8e6cf",
    accent: "#ffd700"
  }
};
```

### Cambiar datos personales
Edita la sección `personal` en `config.js`.

### Agregar o editar proyectos
Modifica el array `projects` en `config.js`.

### Actualizar formación, habilidades y tecnologías
Edita la sección `about` en `config.js`.

### Cambiar colores principales
Modifica la sección `colors` en `config.js`.

## 🚀 Cómo desplegar
1. Sube los archivos a tu servidor web o GitHub Pages.
2. Asegúrate de tener las imágenes referenciadas (avatar y proyectos).
3. Abre `index.html` en tu navegador.

## 📱 Responsive
El diseño se adapta perfectamente a móviles y tablets.

## 🪄 Créditos y Licencia
- Inspirado en Sailor Moon (fan art, no oficial).
- Iconos: FontAwesome.
- Tipografías: Google Fonts.
- Puedes usar y modificar este portafolio libremente para tu uso personal.

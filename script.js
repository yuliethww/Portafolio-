// ===== PORTAFOLIO SAILOR MOON INTERACTIVO =====
document.addEventListener('DOMContentLoaded', function() {
  // ===== CARGA DINÁMICA DE DATOS DESDE CONFIG =====
  const config = window.PORTFOLIO_CONFIG;
  if (config) {
    // Presentación
    document.getElementById('nombre').textContent = config.personal.name;
    document.getElementById('titulo').textContent = config.personal.title;
    document.getElementById('descripcion').textContent = config.personal.description;
    // Proyectos
    const proyectosDiv = document.getElementById('proyectos');
    proyectosDiv.innerHTML = '';
    config.projects.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <img src="${proj.image}" alt="${proj.title}">
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>
        <a href="${proj.link}" target="_blank" class="project-link">${proj.linkLabel}</a>
      `;
      proyectosDiv.appendChild(card);
    });
    // Sobre mí
    document.getElementById('formacion').textContent = config.about.formation;
    document.getElementById('habilidades').textContent = config.about.skills.join(', ');
    document.getElementById('tecnologias').textContent = config.about.technologies.join(', ');
    document.getElementById('intereses').textContent = config.about.interests.join(', ');
    // Colores (opcional: podrías actualizar variables CSS aquí)
  }

  // ===== CONTACT FORM HANDLING =====
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const nombre = this.querySelector('input[name="nombre"]').value.trim();
      const email = this.querySelector('input[name="email"]').value.trim();
      const mensaje = this.querySelector('textarea[name="mensaje"]').value.trim();
      if (!nombre || !email || !mensaje) {
        showNotification('Por favor, completa todos los campos.', 'error');
        return;
      }
      if (!isValidEmail(email)) {
        showNotification('Por favor, ingresa un email válido.', 'error');
        return;
      }
      showNotification('¡Gracias por tu mensaje lunar! 🌙✨', 'success');
      this.reset();
    });
    // Efecto de brillo en el botón
    const btn = contactForm.querySelector('.btn-primary');
    btn.addEventListener('mousedown', function() {
      btn.classList.add('shine');
    });
    btn.addEventListener('mouseup', function() {
      setTimeout(()=>btn.classList.remove('shine'), 400);
    });
    btn.addEventListener('mouseleave', function() {
      btn.classList.remove('shine');
    });
  }
  // ===== NOTIFICATION SYSTEM (TOAST) =====
  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = 'toast-notification ' + type;
    notification.innerHTML = `<span class="moon">🌙</span> ${message}`;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => document.body.removeChild(notification), 400);
    }, 3200);
  }
  // ===== EMAIL VALIDATION =====
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Animación interactiva de la estrella
  const estrella = document.querySelector('.logo-estrella-interactiva');
  if (estrella) {
    estrella.addEventListener('click', function () {
      // Giro
      estrella.classList.add('spin');
      setTimeout(() => estrella.classList.remove('spin'), 800);
      // Sparkles
      const sparkles = ['✨', '🌟', '💫', '⭐', '💖', '🟡'];
      const rect = estrella.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      for (let i = 0; i < 6; i++) {
        const angle = (i * 60) * (Math.PI / 180);
        const x = Math.cos(angle) * 60;
        const y = Math.sin(angle) * 60;
        const sparkle = document.createElement('span');
        sparkle.className = 'estrella-sparkle';
        sparkle.textContent = sparkles[i % sparkles.length];
        sparkle.style.left = (centerX + x - 16) + 'px';
        sparkle.style.top = (centerY + y - 16) + 'px';
        sparkle.style.position = 'fixed';
        document.body.appendChild(sparkle);
        setTimeout(() => {
          if (sparkle.parentNode) sparkle.parentNode.removeChild(sparkle);
        }, 800);
      }
    });
  }
});
// ===== CSS para el efecto de brillo y notificación (incrustar en styles.css si se desea) =====
// .shine { box-shadow: 0 0 16px 4px #ffd700, 0 0 32px 8px #eab5c5; animation: shineBtn .4s; }
// @keyframes shineBtn { 0%{box-shadow:none;} 50%{box-shadow:0 0 32px 8px #ffd700;} 100%{box-shadow:none;} }
// .toast-notification { position:fixed; top:30px; right:30px; background:linear-gradient(90deg,#ffe4fa,#ffd700); color:#222; padding:1rem 2rem; border-radius:1.5rem; font-family:'Playfair Display',serif; font-size:1.1rem; box-shadow:0 4px 24px #eab5c5; opacity:0; transform:translateY(-30px); transition:all .4s; z-index:9999; }
// .toast-notification.show { opacity:1; transform:translateY(0); }
// .toast-notification.success { border:2px solid #ffd700; }
// .toast-notification.error { border:2px solid #e57373; background:linear-gradient(90deg,#ffe4fa,#e57373); }

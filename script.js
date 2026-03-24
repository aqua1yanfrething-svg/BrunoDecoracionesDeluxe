// Este script se carga después de que el HTML ha sido analizado.
console.log("¡La página de Decoraciones Deluxe Bruno ha cargado!");

// Inicializar Iconos Lucide
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

// Menú Móvil
const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const nav = document.querySelector('#main-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (menuClose && nav) {
  menuClose.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

// Manejo del Formulario de Contacto (Enviar a WhatsApp)
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventType = document.getElementById('eventType').value;
    const message = document.getElementById('message').value;
    
    const whatsappMessage = `Hola, mi nombre es ${name}. Me interesa cotizar un evento (${eventType}).\n\nDetalles: ${message}\n\nMi correo es: ${email}`;
    const phoneNumber = "50662801759";
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  });
}

// Smooth scroll para navegadores que no lo soporten nativamente (opcional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
      // Cerrar menú móvil al hacer clic en un enlace
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
      }
    }
  });
});

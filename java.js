// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form submission handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Detiene el envío normal

  const form = e.target;
  const submitButton = form.querySelector('button[type="submit"]');

  submitButton.disabled = true;
  submitButton.innerHTML = "Enviando...";

  const formData = new FormData(form);
  fetch("guardar.php", { method: "POST", body: formData })
    .then((response) => response.text())
    .then((data) => {
      if (data.trim() === "OK") {
        alert(
          "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto."
        );
        form.reset();
      } else {
        alert("Hubo un problema al enviar el formulario.");
      }
    })
    .catch((error) => {
      alert("Error al conectar con el servidor.");
    })
    .finally(() => {
      submitButton.disabled = false;
      submitButton.innerHTML = "Enviar mensaje";
    });
});





// Mobile menu toggle functionality
const mobileMenuButton = document.querySelector("nav button");
const mobileMenu = document.createElement("div");
mobileMenu.classList.add(
  "fixed",
  "inset-0",
  "bg-white",
  "z-40",
  "pt-16",
  "px-4",
  "hidden"
);

mobileMenu.innerHTML = `
  <div class="space-y-8 py-8">
    <a href="#inicio" class="block text-2xl font-medium text-gray-700 hover:text-blue-600">Inicio</a>
    <a href="#nosotros" class="block text-2xl font-medium text-gray-700 hover:text-blue-600">Nosotros</a>
    <a href="#servicios" class="block text-2xl font-medium text-gray-700 hover:text-blue-600">Servicios</a>
    <a href="#capacitacion" class="block text-2xl font-medium text-gray-700 hover:text-blue-600">Capacitación</a>
    <a href="#como-funciona" class="block text-2xl font-medium text-gray-700 hover:text-blue-600">Cómo funciona</a>
    <a href="#testimonios" class="block text-2xl font-medium text-gray-700 hover:text-blue-600">Testimonios</a>
    <a href="#contacto" class="block text-2xl font-medium text-gray-700 hover:text-blue-600">Contacto</a>
  </div>
  <button class="absolute top-6 right-4 text-gray-500 hover:text-gray-700">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
`;

document.body.appendChild(mobileMenu);

// abrir/cerrar menú con hamburguesa
mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// cerrar con la X
mobileMenu.querySelector("button").addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

// cerrar al hacer clic en un link
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// FAQ toggle
function toggleFAQ(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('span');
  content.classList.toggle('hidden');
  icon.textContent = content.classList.contains('hidden') ? '+' : '-';
}


const themeToggle = document.querySelector('#theme-toggle');
const contactForm = document.querySelector('#contact-form');
const formFeedback = document.querySelector('.form-feedback');
const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.main-nav a');

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
  themeToggle.setAttribute('aria-label', 'Ativar modo claro');
}

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-theme');
  localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  themeToggle.setAttribute('aria-label', isDark ? 'Ativar modo claro' : 'Ativar modo escuro');
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    projectCards.forEach((card) => {
      card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

window.addEventListener('scroll', () => {
  const currentSection = [...sections].reverse().find((section) => window.scrollY >= section.offsetTop - 180);
  if (!currentSection) return;
  navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${currentSection.id}`));
}, { passive: true });

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.checkValidity()) {
    formFeedback.textContent = 'Preencha os campos obrigatórios para enviar.';
    contactForm.reportValidity();
    return;
  }
  formFeedback.textContent = 'Mensagem pronta para ser enviada. Obrigada pelo contato!';
  contactForm.reset();
});

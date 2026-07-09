const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
menu?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
const calendlyUrl = 'https://calendly.com/ascendprep-co/30min';
function openCalendly(event) {
  event.preventDefault();
  if (window.Calendly && typeof window.Calendly.initPopupWidget === 'function') {
    window.Calendly.initPopupWidget({ url: calendlyUrl });
  } else {
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
  }
}
document.querySelectorAll('[data-calendly]').forEach(link => link.addEventListener('click', openCalendly));

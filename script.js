const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent('Projektanfrage – DoKa-Bastelstube.de');
  const body = encodeURIComponent(
`Hallo DoKa-Bastelstube,

ich möchte folgendes Projekt anfragen:

${form.get('message')}

Name: ${form.get('name')}
E-Mail: ${form.get('email')}

Viele Grüße
${form.get('name')}`
  );
  window.location.href = `mailto:info@doka-bastelstube.de?subject=${subject}&body=${body}`;
});

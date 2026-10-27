(function () {
  'use strict';

  /* Menu mobile */
  var burger = document.querySelector('.burger');
  var links = document.querySelector('.nav .links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') links.classList.remove('open');
    });
  }

  /* Versione live da GitHub (fallisce silenzioso: resta il fallback) */
  fetch('https://api.github.com/repos/inferis995/tattic/releases/latest')
    .then(function (r) { if (!r.ok) throw 0; return r.json(); })
    .then(function (j) {
      var el = document.getElementById('ver');
      if (el && j.tag_name) el.textContent = 'latest ' + j.tag_name;
    })
    .catch(function () { /* resta "in arrivo" */ });

  /* Reveal on scroll (GSAP se disponibile, altrimenti tutto visibile) */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.card, .steps li, .guide li, .shot, .turn, .req div');
  if (reduce || !window.gsap) { document.body.classList.add('no-motion'); return; }
  try {
    gsap.registerPlugin(ScrollTrigger);
    els.forEach(function (el) { el.classList.add('rv'); });
    ScrollTrigger.batch('.rv', {
      start: 'top 88%',
      onEnter: function (batch) { gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', overwrite: true }); }
    });
    gsap.from('.hero-inner > *', { opacity: 0, y: 30, duration: 0.9, stagger: 0.1, ease: 'power3.out', delay: 0.15 });
  } catch (e) { document.body.classList.add('no-motion'); }
})();

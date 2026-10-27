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

  /* Galleria schermate */
  var SHOTS = { panel: 'app.c1', live: 'app.c2', setup: 'app.c3', profiles: 'app.c4' };
  var img = document.getElementById('shot');
  var cap = document.getElementById('shot-cap');
  var current = 'panel';
  function show(id) {
    current = id;
    document.querySelectorAll('[data-shot]').forEach(function (b) {
      var on = b.getAttribute('data-shot') === id;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    if (img) {
      img.src = 'assets/shots/' + id + '.webp';
      img.alt = (window.__t && window.__t('app.' + { panel: 't1', live: 't2', setup: 't3', profiles: 't4' }[id])) || id;
    }
    if (cap && window.__t) {
      cap.setAttribute('data-i18n', SHOTS[id]);
      cap.innerHTML = window.__t(SHOTS[id]);
    }
  }
  document.querySelectorAll('[data-shot]').forEach(function (b) {
    b.addEventListener('click', function () { show(b.getAttribute('data-shot')); });
  });
  // precarica le altre schermate
  Object.keys(SHOTS).forEach(function (k) { var i = new Image(); i.src = 'assets/shots/' + k + '.webp'; });

  /* Versione e dimensione dall'ultima release. Il link resta il download diretto
     (…/releases/latest/download/Tactic-setup.exe) anche se questa chiamata fallisce. */
  var info = null;
  function paintVer() {
    var el = document.getElementById('ver');
    if (!el || !info) return;
    el.textContent = info.tag + (info.mb ? ' · ' + info.mb + ' MB' : '');
  }
  window.__onLang = function () { show(current); paintVer(); };
  fetch('https://api.github.com/repos/inferis995/tattic/releases/latest')
    .then(function (r) { if (!r.ok) throw 0; return r.json(); })
    .then(function (j) {
      var exe = (j.assets || []).filter(function (a) { return a.name === 'Tactic-setup.exe'; })[0] ||
        (j.assets || []).filter(function (a) { return /\.exe$/i.test(a.name); })[0];
      info = { tag: j.tag_name, mb: exe ? (exe.size / 1048576).toFixed(1) : null };
      if (exe) document.querySelectorAll('[data-dl]').forEach(function (a) { a.href = exe.browser_download_url; });
      paintVer();
    })
    .catch(function () {
      var el = document.getElementById('ver');
      if (el) el.textContent = 'GitHub';
    });

  /* Comparsa allo scorrimento (GSAP se disponibile, altrimenti tutto visibile) */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.card, .guide li, .turn, .req div, .gallery');
  if (reduce || !window.gsap) { document.body.classList.add('no-motion'); return; }
  try {
    gsap.registerPlugin(ScrollTrigger);
    els.forEach(function (el) { el.classList.add('rv'); });
    ScrollTrigger.batch('.rv', {
      start: 'top 90%',
      onEnter: function (batch) { gsap.to(batch, { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out', overwrite: true }); }
    });
    gsap.from('.hero-inner > *', { opacity: 0, y: 24, duration: 0.8, stagger: 0.08, ease: 'power3.out', delay: 0.1 });
  } catch (e) { document.body.classList.add('no-motion'); }
})();

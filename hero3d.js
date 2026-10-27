/* Hero 3D: anelli teal concentrici (shockwave) + polvere d'oro su carbone.
   Decorativo: la pagina resta completa senza WebGL (poster statico + .no-webgl). */
(function () {
  'use strict';
  var canvas = document.getElementById('hero3d');
  if (!canvas) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !window.THREE) { document.body.classList.add('no-webgl'); return; }

  var renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  } catch (e) { document.body.classList.add('no-webgl'); return; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  var scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x222527, 0.055);
  var camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.set(0, 1.6, 11);

  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  var gold = new THREE.DirectionalLight(0xd1ac64, 1.1);
  gold.position.set(4, 6, 6);
  scene.add(gold);
  var teal = new THREE.PointLight(0x5abfc6, 30, 30);
  teal.position.set(0, -1, 3);
  scene.add(teal);

  // Anelli concentrici teal: si espandono e svaniscono in loop sfasati
  var rings = [];
  var ringGeo = new THREE.RingGeometry(0.98, 1.0, 128);
  for (var i = 0; i < 5; i++) {
    var mat = new THREE.MeshBasicMaterial({ color: 0x5abfc6, transparent: true, opacity: 0.5, side: THREE.DoubleSide });
    var ring = new THREE.Mesh(ringGeo, mat);
    ring.rotation.x = -Math.PI / 2.25;
    ring.position.y = -1.4;
    ring.userData.phase = i / 5;
    scene.add(ring);
    rings.push(ring);
  }

  // Polvere d'oro: punti con deriva lenta verso l'alto
  var N = 420;
  var pos = new Float32Array(N * 3);
  var seed = new Float32Array(N);
  for (var j = 0; j < N; j++) {
    pos[j * 3] = (Math.random() - 0.5) * 26;
    pos[j * 3 + 1] = (Math.random() - 0.5) * 14;
    pos[j * 3 + 2] = (Math.random() - 0.5) * 12 - 2;
    seed[j] = Math.random();
  }
  var pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  var dust = new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0xd1ac64, size: 0.055, transparent: true, opacity: 0.75 }));
  scene.add(dust);

  // Esagono oro sottile sullo sfondo (eco del badge)
  var hex = new THREE.Mesh(
    new THREE.RingGeometry(3.4, 3.48, 6),
    new THREE.MeshBasicMaterial({ color: 0xd1ac64, transparent: true, opacity: 0.22, side: THREE.DoubleSide })
  );
  hex.position.set(0, 0.6, -3);
  scene.add(hex);

  var mx = 0, my = 0, tx = 0, ty = 0;
  window.addEventListener('pointermove', function (e) {
    tx = (e.clientX / window.innerWidth - 0.5);
    ty = (e.clientY / window.innerHeight - 0.5);
  }, { passive: true });

  function resize() {
    var w = canvas.clientWidth || canvas.parentElement.clientWidth;
    var h = canvas.clientHeight || canvas.parentElement.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  var raf = 0, visible = true, t0 = performance.now();
  function frame(now) {
    raf = requestAnimationFrame(frame);
    if (!visible || document.hidden) return;
    var t = (now - t0) / 1000;
    mx += (tx - mx) * 0.04;
    my += (ty - my) * 0.04;
    camera.position.x = mx * 1.6;
    camera.position.y = 1.6 - my * 1.1;
    camera.lookAt(0, 0.2, 0);
    for (var k = 0; k < rings.length; k++) {
      var r = rings[k];
      var p = ((t * 0.22) + r.userData.phase) % 1;
      var s = 0.6 + p * 5.2;
      r.scale.set(s, s, s);
      r.material.opacity = 0.55 * (1 - p);
    }
    var arr = pGeo.attributes.position.array;
    for (var d = 0; d < N; d++) {
      arr[d * 3 + 1] += 0.0035 + seed[d] * 0.006;
      arr[d * 3] += Math.sin(t * 0.4 + seed[d] * 6.28) * 0.0015;
      if (arr[d * 3 + 1] > 7) arr[d * 3 + 1] = -7;
    }
    pGeo.attributes.position.needsUpdate = true;
    hex.rotation.z = t * 0.05;
    renderer.render(scene, camera);
  }
  if (!reduce) raf = requestAnimationFrame(frame);
  else renderer.render(scene, camera);

  new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(canvas);
  document.addEventListener('visibilitychange', function () { if (!document.hidden && !reduce && !raf) raf = requestAnimationFrame(frame); });
  canvas.addEventListener('webglcontextlost', function (e) { e.preventDefault(); cancelAnimationFrame(raf); raf = 0; document.body.classList.add('no-webgl'); }, false);
})();

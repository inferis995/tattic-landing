/* Dizionario IT/EN e cambio lingua. I valori possono contenere HTML. */
(function () {
  'use strict';
  var DICT = {
    it: {
      'skip': 'Vai al download',
      'nav.app': "L'app", 'nav.feat': 'Funzioni', 'nav.guide': 'Guida', 'nav.dl': 'Scarica',
      'hero.kicker': 'App Windows · gratis · open source',
      'hero.title': 'Senti tutto.<br><span>Prima di tutti.</span>',
      'hero.sub': "Motore audio a 16 canali per Warzone e MW4: passi nemici in primo piano, il tuo sparo sotto controllo, EQ calibrato sulle tue cuffie. Un'app sola, setup guidato in cinque passi.",
      'hero.dl': 'Scarica per Windows', 'hero.guide': 'Come si installa',
      'hero.micro': 'Windows 10/11 64-bit · installer diretto',
      'stats.s1': 'canali elaborati', 'stats.s2': 'passi di setup', 'stats.s3': 'cuffie misurate', 'stats.s4': 'nessun account',
      'app.kicker': "L'app", 'app.h2': 'Tutto in una finestra.',
      'app.t1': 'Pannello', 'app.t2': 'Dal vivo', 'app.t3': 'Setup guidato', 'app.t4': 'Profili',
      'app.c1': 'Stile e livello della tua arma in una matrice, volume e boost con limitatore, EQ della cuffia, profili in alto.',
      'app.c2': 'Uscita, segnale del gioco, carico del motore e buffer; i 16 canali e cosa sta facendo il motore in tempo reale.',
      'app.c3': 'Cinque passi: cavo virtuale, cuffie, Windows, gioco, prova dei canali. Ogni passo dice cosa manca.',
      'app.c4': 'Preset, volume, boost, EQ e cuffie salvati con un nome. Si cambiano anche in partita.',
      'feat.kicker': 'Funzioni', 'feat.h2': 'Pensata per chi gioca competitivo.',
      'feat.f1h': 'Passi in primo piano', 'feat.f1p': 'Il motore separa passi, spari e ambiente e alza quello che serve. Lo stile Recon spinge i passi lontani.',
      'feat.f2h': 'Il tuo sparo sotto controllo', 'feat.f2p': 'Cinque livelli per la tua arma, da Originale a Ultra basso, anche da tastiera in partita.',
      'feat.f3h': 'EQ sulle tue cuffie', 'feat.f3p': '68 EQ pronti e la ricerca su 6.797 misure: trovi il tuo modello e lo calibri in un clic.',
      'feat.f4h': 'Setup guidato', 'feat.f4p': 'Installa il cavo virtuale, configura Windows e verifica i 16 canali. A ogni avvio ricontrolla e ripara da solo.',
      'feat.f5h': 'Profili', 'feat.f5p': 'Preset, volume, boost, EQ e cuffie salvati con un nome. Si cambiano con Ctrl+Alt+P senza uscire dal gioco.',
      'feat.f6h': 'Overlay e tasti rapidi', 'feat.f6p': 'Pannello trasparente sopra il gioco e tasti Ctrl+Alt per arma, stile, volume e boost fino a +12 dB senza distorsione.',
      'feat.turn': "Niente Voicemeeter, niente Equalizer APO: il mixer e il motore sono dentro l'app. Discord e browser vanno dritti alle cuffie.",
      'guide.kicker': 'Installazione', 'guide.h2': 'Da zero alla partita in cinque minuti.',
      'guide.g1h': 'Scarica e installa', 'guide.g1p': 'Il pulsante <strong>Scarica per Windows</strong> scarica direttamente <code>Tactic-setup.exe</code>. Se Windows mostra "PC protetto": <em>Ulteriori informazioni → Esegui comunque</em>.',
      'guide.g2h': 'Segui il setup', 'guide.g2p': 'Al primo avvio parte il setup guidato: installa VB-CABLE (gratuito) dal sito ufficiale, propone il riavvio se serve e riprende da solo.',
      'guide.g3h': 'Configura con un clic', 'guide.g3p': 'Scegli le cuffie e premi <strong>Configura tutto</strong>: cavo a 16 canali e 48 kHz, cuffie pulite, nessun abbassamento durante le chiamate.',
      'guide.g4h': 'Imposta il gioco', 'guide.g4p': "In Warzone: <em>Audio → Dispositivo audio del gioco</em> su <strong>CABLE In 16ch</strong>, modalità cuffie avanzata spenta. L'app ti conferma quando il segnale arriva.",
      'guide.g5h': 'Scegli e salva', 'guide.g5p': 'Parti da <strong>TATTIC 1 · Recon</strong>, scegli il livello della tua arma, poi salva tutto in un profilo.',
      'guide.req1h': 'Serve', 'guide.req1p': "Windows 10/11 64-bit · cuffie qualsiasi · VB-CABLE (lo installa l'app)",
      'guide.req2h': 'Non serve', 'guide.req2p': 'Voicemeeter · Equalizer APO · scheda audio dedicata · account',
      'faq.h2': 'Prima di scaricare.',
      'faq.q1s': 'È gratis?', 'faq.q1p': "Sì, gratis e open source, senza account. VB-CABLE è donationware di VB-Audio: l'app lo scarica dal loro sito ufficiale.",
      'faq.q2s': 'Tocca il gioco?', 'faq.q2p': "No. Non modifica file del gioco, non inietta codice e non legge la memoria: lavora solo sull'audio che Windows riceve, come un mixer. Le regole del gioco restano di Activision.",
      'faq.q3s': 'Funziona con le mie cuffie?', 'faq.q3p': "Sì, con qualsiasi cuffia stereo. Il suono 3D lo crea il motore; l'EQ corregge la risposta del tuo modello.",
      'faq.q4s': 'Devo riavviare il PC?', 'faq.q4p': "Solo se Windows lo richiede dopo l'installazione del cavo virtuale. L'app te lo propone e dopo il riavvio riprende il setup da dove era.",
      'faq.q5s': "L'overlay funziona in schermo intero?", 'faq.q5p': 'Con il gioco in <strong>schermo intero senza bordi</strong>. I tasti Ctrl+Alt funzionano sempre.',
      'faq.q6s': 'Come si aggiorna?', 'faq.q6p': "Da Impostazioni → Aggiornamenti: la libreria dei preset si aggiorna nell'app, la nuova versione dell'app si scarica da qui.",
      'faq.q7s': 'Non sento il gioco, cosa controllo?', 'faq.q7p': 'Apri Setup: ogni passo mostra cosa manca. Di solito è il dispositivo audio del gioco, che deve essere CABLE In 16ch.',
      'final.h2': 'Pronto in cinque minuti.', 'final.btn': 'Scarica BOOST TATTIC',
      'final.p': 'Windows 10/11 64-bit', 'final.all': 'tutte le versioni', 'final.code': 'codice su GitHub',
      'foot.a': 'BOOST TATTIC — progetto personale open source, non commerciale. Non affiliato ad Activision.', 'foot.lic': 'Licenze'
    },
    en: {
      'skip': 'Go to download',
      'nav.app': 'The app', 'nav.feat': 'Features', 'nav.guide': 'Guide', 'nav.dl': 'Download',
      'hero.kicker': 'Windows app · free · open source',
      'hero.title': 'Hear everything.<br><span>Before anyone.</span>',
      'hero.sub': 'A 16-channel audio engine for Warzone and MW4: enemy footsteps up front, your own gunfire under control, EQ calibrated to your headphones. One app, five-step guided setup.',
      'hero.dl': 'Download for Windows', 'hero.guide': 'How to install',
      'hero.micro': 'Windows 10/11 64-bit · direct installer',
      'stats.s1': 'channels processed', 'stats.s2': 'setup steps', 'stats.s3': 'headphones measured', 'stats.s4': 'no account',
      'app.kicker': 'The app', 'app.h2': 'Everything in one window.',
      'app.t1': 'Panel', 'app.t2': 'Live', 'app.t3': 'Guided setup', 'app.t4': 'Profiles',
      'app.c1': 'Style and your weapon level in one grid, volume and boost with limiter, headphone EQ, profiles on top.',
      'app.c2': 'Output, game signal, engine load and buffer; the 16 channels and what the engine is doing in real time.',
      'app.c3': 'Five steps: virtual cable, headphones, Windows, game, channel test. Each step tells you what is missing.',
      'app.c4': 'Preset, volume, boost, EQ and headphones saved under a name. Switch them mid-match too.',
      'feat.kicker': 'Features', 'feat.h2': 'Built for competitive players.',
      'feat.f1h': 'Footsteps up front', 'feat.f1p': 'The engine separates footsteps, gunfire and ambience and lifts what matters. The Recon style pushes distant steps.',
      'feat.f2h': 'Your gunfire under control', 'feat.f2p': 'Five levels for your weapon, from Stock to Ultra low, switchable from the keyboard mid-match.',
      'feat.f3h': 'EQ for your headphones', 'feat.f3p': '68 ready-made EQs and search across 6,797 measurements: find your model and calibrate in one click.',
      'feat.f4h': 'Guided setup', 'feat.f4p': 'Installs the virtual cable, configures Windows and checks all 16 channels. Re-checks and repairs itself at every start.',
      'feat.f5h': 'Profiles', 'feat.f5p': 'Preset, volume, boost, EQ and headphones saved under a name. Switch with Ctrl+Alt+P without leaving the game.',
      'feat.f6h': 'Overlay and hotkeys', 'feat.f6p': 'Transparent panel over the game and Ctrl+Alt keys for weapon, style, volume and boost up to +12 dB without distortion.',
      'feat.turn': 'No Voicemeeter, no Equalizer APO: mixer and engine live inside the app. Discord and browser go straight to your headphones.',
      'guide.kicker': 'Install', 'guide.h2': 'From zero to the match in five minutes.',
      'guide.g1h': 'Download and install', 'guide.g1p': 'The <strong>Download for Windows</strong> button downloads <code>Tactic-setup.exe</code> directly. If Windows shows "PC protected": <em>More info → Run anyway</em>.',
      'guide.g2h': 'Follow the setup', 'guide.g2p': 'The guided setup starts on first launch: it installs VB-CABLE (free) from the official site, offers a reboot if needed and resumes by itself.',
      'guide.g3h': 'Configure in one click', 'guide.g3p': 'Pick your headphones and press <strong>Configure all</strong>: cable at 16 channels and 48 kHz, clean headphones, no ducking during calls.',
      'guide.g4h': 'Set up the game', 'guide.g4p': 'In Warzone: <em>Audio → Game audio device</em> to <strong>CABLE In 16ch</strong>, advanced headphone mode off. The app confirms when the signal arrives.',
      'guide.g5h': 'Pick and save', 'guide.g5p': 'Start from <strong>TATTIC 1 · Recon</strong>, choose your weapon level, then save it all as a profile.',
      'guide.req1h': 'You need', 'guide.req1p': 'Windows 10/11 64-bit · any headphones · VB-CABLE (installed by the app)',
      'guide.req2h': 'Not needed', 'guide.req2p': 'Voicemeeter · Equalizer APO · dedicated sound card · account',
      'faq.h2': 'Before you download.',
      'faq.q1s': 'Is it free?', 'faq.q1p': 'Yes, free and open source, no account. VB-CABLE is donationware by VB-Audio: the app downloads it from their official site.',
      'faq.q2s': 'Does it touch the game?', 'faq.q2p': "No. It doesn't modify game files, inject code or read memory: it only processes the audio Windows receives, like a mixer. The game's rules remain Activision's.",
      'faq.q3s': 'Does it work with my headphones?', 'faq.q3p': 'Yes, with any stereo headphones. The engine creates the 3D sound; the EQ corrects your model\'s response.',
      'faq.q4s': 'Do I need to reboot?', 'faq.q4p': 'Only if Windows asks after installing the virtual cable. The app offers it and resumes the setup after the reboot.',
      'faq.q5s': 'Does the overlay work fullscreen?', 'faq.q5p': 'With the game in <strong>borderless fullscreen</strong>. Ctrl+Alt hotkeys always work.',
      'faq.q6s': 'How does it update?', 'faq.q6p': 'From Settings → Updates: the preset library updates inside the app, new app versions download from here.',
      'faq.q7s': "I can't hear the game, what do I check?", 'faq.q7p': 'Open Setup: each step shows what is missing. Usually it is the game audio device, which must be CABLE In 16ch.',
      'final.h2': 'Ready in five minutes.', 'final.btn': 'Download BOOST TATTIC',
      'final.p': 'Windows 10/11 64-bit', 'final.all': 'all versions', 'final.code': 'code on GitHub',
      'foot.a': 'BOOST TATTIC — personal open-source project, non-commercial. Not affiliated with Activision.', 'foot.lic': 'Licenses'
    }
  };

  function setLang(l) {
    var d = DICT[l] || DICT.it;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n')];
      if (v != null) el.innerHTML = v;
    });
    document.documentElement.lang = l;
    document.querySelectorAll('.lang').forEach(function (b) { b.classList.toggle('active', b.id === 'lang-' + l); });
    try { localStorage.setItem('tattic-lang', l); } catch (e) { /* navigazione privata */ }
    window.__lang = l;
    if (window.__onLang) window.__onLang(l);
  }

  window.__t = function (k) { return (DICT[window.__lang] || DICT.it)[k] || ''; };
  document.getElementById('lang-it').addEventListener('click', function () { setLang('it'); });
  document.getElementById('lang-en').addEventListener('click', function () { setLang('en'); });
  var start = 'it';
  try { start = localStorage.getItem('tattic-lang') || (((navigator.language || 'it').toLowerCase().indexOf('it') === 0) ? 'it' : 'en'); } catch (e) { /* predefinito */ }
  setLang(start);
})();

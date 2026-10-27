/* IT/EN dictionary + language switch. Values may contain HTML. */
(function () {
  'use strict';
  var DICT = {
    en: {
      'skip': 'Go to download',
      'nav.why': 'Why', 'nav.how': 'How it works', 'nav.guide': 'Guide', 'nav.dl': 'Download',
      'hero.kicker': 'Windows app · free · open source',
      'hero.title': 'Hear everything.<br><span>Before anyone.</span>',
      'hero.sub': 'BOOST TATTIC is the free Windows app that cleans up Warzone and MW4 audio: footsteps, reloads and enemy voices up front. <strong>Boost Audio AI Engine</strong> at 16 channels, competitive presets and automatic EQ for <em>your</em> headphones.',
      'hero.dl': '⬇ Download for Windows', 'hero.guide': 'Install guide',
      'hero.micro': 'Free · Open source · Windows 10/11 64-bit · <span id="ver">{ver}</span>',
      'stats.s1': 'audio channels', 'stats.s2': 'Boost Engine params', 'stats.s3': 'headphone measurements', 'stats.s4': 'forever',
      'why.kicker': 'The problem', 'why.h2': 'Stock audio loses you the fights that matter.',
      'why.c1h': 'Buried footsteps', 'why.c1p': 'Your gun, bombardments and wash cover enemy footsteps exactly when you must decide to push or not.',
      'why.c2h': 'Uncalibrated headphones', 'why.c2p': 'Every headphone colors sound its own way: without EQ you hear a distorted version of the battlefield.',
      'why.c3h': 'Fragile setups', 'why.c3p': 'Voicemeeter and EQ chains that break at every Windows update, with extra latency on top.',
      'why.turn': 'It\'s not your hearing, it\'s the game\'s mix. <strong>One 16-channel engine</strong> separates sounds before they reach your headphones — footsteps, gunfire, ambience — lifts what matters and tames the rest. You decide how much.',
      'ben.kicker': 'Benefits', 'ben.h2': 'Built for players who compete.',
      'ben.b1h': 'Footsteps first', 'ben.b1p': '<strong>Enemies arrive on time</strong> — the Recon profile lifts enemy footsteps 3 dB while cutting the rest.',
      'ben.b2h': 'Your gun stays quiet', 'ben.b2p': '<strong>Foreign gunfire tamed up to 16 dB</strong> — stay composed even in close squad fights.',
      'ben.b3h': 'EQ for your headphones', 'ben.b3p': '<strong>Real calibration, not generic presets</strong> — 68 ready EQs + a 6,797-measurement database.',
      'ben.b4h': 'One app does it all', 'ben.b4p': '<strong>No Voicemeeter, no APO</strong> — mixer, engine, tray and Windows autostart built in.',
      'ben.b5h': 'Overlay + hotkeys', 'ben.b5p': '<strong>Switch presets without leaving the game</strong> — transparent overlay and Ctrl+Alt for weapon, style, volume and boost up to +12 dB.',
      'ben.b6h': 'Boost Audio AI Engine', 'ben.b6p': '<strong>302 parameters reasoning about sound</strong> — separates footsteps, gunfire and ambience and rebalances them in real time.',
      'how.kicker': 'How it works', 'how.h2': 'Three steps and you\'re in the match.',
      'how.s1h': 'Install', 'how.s1p': 'Download the exe, install it, add the free VB-CABLE virtual cable. The guide below walks you through.',
      'how.s2h': 'Route', 'how.s2p': 'In-game, pick TATTIC as audio output; Discord and browser stay straight on the headphones.',
      'how.s3h': 'Dominate', 'how.s3p': 'Pick a preset (start with ClassicPlus-UltraLo), calibrate the EQ on your headphones and play.',
      'val.kicker': 'Character', 'val.h2': 'Precise. Functional.<br>Resistant.',
      'val.t1': '<strong>Precise</strong> — every footstep in place, every dB under control.',
      'val.t2': '<strong>Functional</strong> — one tool that does everything, no fragile chains.',
      'val.t3': '<strong>Resistant</strong> — a setup that survives patches, seasons and meta shifts.',
      'guide.kicker': 'Install guide', 'guide.h2': 'From zero to in-game in ten minutes.',
      'guide.g1h': 'Download the installer', 'guide.g1p': 'Hit <strong>Download for Windows</strong> above: the installer downloads straight away as <code>.exe</code>. Run it and finish the install.',
      'guide.g2h': 'Install VB-CABLE', 'guide.g2p': 'Download <strong>VB-CABLE Virtual Audio Device</strong> (free, vb-audio.com), install it and reboot. The app renames it to <strong>TATTIC</strong> by itself.',
      'guide.g3h': 'Set up the game', 'guide.g3p': 'In Warzone: audio output to <strong>TATTIC</strong>, 16 channels at 48 kHz. Discord, browser and system sounds stay on the real headphones: Windows mixes them.',
      'guide.g4h': 'Start the audio', 'guide.g4p': 'Open BOOST TATTIC, pick the headphones as output and press <strong>Start audio</strong>: you should see channels moving already in the lobby. From here it lives in the system tray and starts with Windows.',
      'guide.g5h': 'Pick the preset', 'guide.g5p': 'Start with <strong>ClassicPlus-UltraLo</strong>, then try the TATTIC 1 styles (Recon recommended for footsteps). Weapon level with <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>1</kbd>…<kbd>5</kbd>.',
      'guide.g6h': 'Overlay and hotkeys', 'guide.g6p': 'Enable the overlay in Settings (needs the game in <strong>borderless fullscreen</strong>). Quick memo: <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>O</kbd> overlay, <kbd>B</kbd> bypass, <kbd>↑</kbd><kbd>↓</kbd> volume, <kbd>PgUp</kbd><kbd>PgDn</kbd> boost.',
      'guide.req1h': 'Requirements', 'guide.req1p': 'Windows 10/11 64-bit · any headphones · VB-CABLE (free) · ~150 MB free',
      'guide.req2h': 'Not needed', 'guide.req2p': 'Voicemeeter · Equalizer APO · dedicated sound card · account · credit card',
      'faq.kicker': 'FAQ', 'faq.h2': 'Clear before you download.',
      'faq.q1s': 'Is it really free?', 'faq.q1p': 'Yes. Free and open source, no account or subscription. The only external software, VB-CABLE, is free for personal use.',
      'faq.q2s': 'Will I get banned?', 'faq.q2p': 'No: BOOST TATTIC doesn\'t modify the game, inject code or read its memory — it only processes Windows audio output like a virtual mixer. Activision has the final say, as always.',
      'faq.q3s': 'Does it work with my headphones?', 'faq.q3p': 'Yes, with any headphones: 68 ready EQs plus a 6,797-measurement database to calibrate yours.',
      'faq.q4s': 'Do I need a special sound card?', 'faq.q4p': 'No. Windows 10/11 64-bit and any headphones are enough. Everything else is software.',
      'faq.q5s': 'Does the overlay work fullscreen?', 'faq.q5p': 'It works with the game in <strong>borderless fullscreen</strong>, not exclusive fullscreen. <kbd>Ctrl</kbd>+<kbd>Alt</kbd> hotkeys always work.',
      'faq.q6s': 'Do I need Voicemeeter?', 'faq.q6p': 'No. BOOST TATTIC does it all: mixer, engine, tray, autostart. No Voicemeeter, no Equalizer APO.',
      'faq.q7s': 'How do I get updates?', 'faq.q7p': 'From the app\'s Updates page: the preset library updates from there, for the app download the new GitHub release.',
      'faq.q8s': 'I hear nothing, what do I check?', 'faq.q8p': 'Three things, in order: output to TATTIC in the game; Start audio in the app; virtual cable at 16 channels and 48 kHz.',
      'final.h2': 'Install in 5 minutes,<br>feel it from the first fight.',
      'final.btn': '⬇ Download BOOST TATTIC free',
      'final.p': 'Windows 10/11 64-bit · open source · <a href="https://github.com/inferis995/tattic">code on GitHub</a>',
      'foot.a': 'BOOST TATTIC — personal open-source project, non-commercial.'
    },
    it: {
      'skip': 'Vai al download',
      'nav.why': 'Perché', 'nav.how': 'Come funziona', 'nav.guide': 'Guida', 'nav.dl': 'Scarica',
      'hero.kicker': 'App Windows · gratis · open source',
      'hero.title': 'Senti tutto.<br><span>Prima di tutti.</span>',
      'hero.sub': 'BOOST TATTIC è l\'app gratis per Windows che ripulisce l\'audio di Warzone e MW4: passi, ricariche e voci nemiche davanti a tutto. <strong>Boost Audio AI Engine</strong> a 16 canali, preset competitivi ed EQ automatico per le <em>tue</em> cuffie.',
      'hero.dl': '⬇ Scarica per Windows', 'hero.guide': 'Guida installazione',
      'hero.micro': 'Gratis · Open source · Windows 10/11 64-bit · <span id="ver">{ver}</span>',
      'stats.s1': 'canali audio', 'stats.s2': 'parametri Boost Engine', 'stats.s3': 'misure cuffie', 'stats.s4': 'per sempre',
      'why.kicker': 'Il problema', 'why.h2': 'L\'audio stock ti fa perdere i fight che contano.',
      'why.c1h': 'Passi coperti', 'why.c1p': 'Il tuo sparo, i bombardamenti e il wash coprono i passi nemici proprio quando devi decidere se pushare o no.',
      'why.c2h': 'Cuffie non calibrate', 'why.c2p': 'Ogni cuffia colora il suono a modo suo: senza EQ senti una versione falsata del campo di battaglia.',
      'why.c3h': 'Setup fragili', 'why.c3p': 'Catene di Voicemeeter ed EQ che si rompono a ogni aggiornamento di Windows, con latenza in più.',
      'why.turn': 'Non è il tuo udito, è il mix del gioco. <strong>Un solo motore a 16 canali</strong> separa i suoni prima che arrivino alle cuffie — passi, spari, ambiente — alza ciò che conta e abbassa il resto. Tu decidi solo quanto.',
      'ben.kicker': 'Benefici', 'ben.h2': 'Costruito per chi gioca sul serio.',
      'ben.b1h': 'Passi in primo piano', 'ben.b1p': '<strong>Il nemico si sente arrivare</strong> — il profilo Recon alza i passi nemici di 3 dB tagliando il resto.',
      'ben.b2h': 'Il tuo sparo non ti assorda', 'ben.b2p': '<strong>Spari altrui domati fino a 16 dB</strong> — resti lucido anche negli scontri a squadre ravvicinati.',
      'ben.b3h': 'EQ sulle tue cuffie', 'ben.b3p': '<strong>Calibrazione reale, non preset generici</strong> — 68 EQ pronti + database di 6.797 misure.',
      'ben.b4h': 'Tutto in una sola app', 'ben.b4p': '<strong>Niente Voicemeeter, niente APO</strong> — mixer, motore, tray e avvio con Windows integrati.',
      'ben.b5h': 'Overlay + hotkey', 'ben.b5p': '<strong>Cambia preset senza uscire dal gioco</strong> — overlay trasparente e Ctrl+Alt per arma, stile, volume e boost fino a +12 dB.',
      'ben.b6h': 'Boost Audio AI Engine', 'ben.b6p': '<strong>302 parametri che ragionano sul suono</strong> — separa passi, spari e ambiente e li rimette in equilibrio in tempo reale.',
      'how.kicker': 'Come funziona', 'how.h2': 'Tre passi e sei in partita.',
      'how.s1h': 'Installa', 'how.s1p': 'Scarica l\'exe, installa, aggiungi il cavo virtuale gratuito VB-CABLE. La guida sotto ti porta per mano.',
      'how.s2h': 'Instrada', 'how.s2p': 'Nel gioco scegli TATTIC come uscita audio; Discord e browser restano diretti alle cuffie.',
      'how.s3h': 'Domina', 'how.s3p': 'Scegli il preset (parti da ClassicPlus-UltraLo), calibra l\'EQ sulle tue cuffie e gioca.',
      'val.kicker': 'Il carattere', 'val.h2': 'Preciso. Funzionale.<br>Resistente.',
      'val.t1': '<strong>Precise</strong> — ogni passo al suo posto, ogni dB sotto controllo.',
      'val.t2': '<strong>Functional</strong> — un solo strumento che fa tutto, senza catene fragili.',
      'val.t3': '<strong>Resistant</strong> — setup che sopravvive a patch, stagioni e cambi meta.',
      'guide.kicker': 'Guida installazione', 'guide.h2': 'Da zero a in-game in dieci minuti.',
      'guide.g1h': 'Scarica l\'installer', 'guide.g1p': 'Premi <strong>Scarica per Windows</strong> qui sopra: l\'installer parte subito in download come <code>.exe</code>. Eseguilo e completa l\'installazione.',
      'guide.g2h': 'Installa VB-CABLE', 'guide.g2p': 'Scarica <strong>VB-CABLE Virtual Audio Device</strong> (gratuito, vb-audio.com), installalo e riavvia. L\'app lo rinomina in <strong>TATTIC</strong> da sola.',
      'guide.g3h': 'Imposta il gioco', 'guide.g3p': 'In Warzone: audio in uscita su <strong>TATTIC</strong>, 16 canali a 48 kHz. Discord, browser e suoni di sistema restano sulle cuffie vere: li mescola Windows.',
      'guide.g4h': 'Avvia l\'audio', 'guide.g4p': 'Apri BOOST TATTIC, scegli le cuffie in uscita e premi <strong>Avvia audio</strong>: devi vedere i canali muoversi già in lobby. Da qui resta nella barra di sistema e parte con Windows.',
      'guide.g5h': 'Scegli il preset', 'guide.g5p': 'Parti da <strong>ClassicPlus-UltraLo</strong>, poi prova gli stili TATTIC 1 (Recon consigliato per i passi). Livello arma con <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>1</kbd>…<kbd>5</kbd>.',
      'guide.g6h': 'Overlay e tasti', 'guide.g6p': 'Attiva l\'overlay da Impostazioni (serve gioco in <strong>schermo intero senza bordi</strong>). Memo rapido: <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>O</kbd> overlay, <kbd>B</kbd> bypass, <kbd>↑</kbd><kbd>↓</kbd> volume, <kbd>PagSu</kbd><kbd>PagGiù</kbd> boost.',
      'guide.req1h': 'Requisiti', 'guide.req1p': 'Windows 10/11 64-bit · cuffie qualsiasi · VB-CABLE (gratis) · ~150 MB liberi',
      'guide.req2h': 'Non serve', 'guide.req2p': 'Voicemeeter · Equalizer APO · scheda audio dedicata · account · carta di credito',
      'faq.kicker': 'Domande frequenti', 'faq.h2': 'Chiaro prima di scaricare.',
      'faq.q1s': 'È davvero gratis?', 'faq.q1p': 'Sì. Gratis e open source, senza account né abbonamento. L\'unico software esterno, VB-CABLE, è gratuito per uso personale.',
      'faq.q2s': 'Rischio il ban?', 'faq.q2p': 'No: BOOST TATTIC non modifica il gioco, non inietta codice e non ne legge la memoria — lavora solo sull\'audio di Windows come un mixer virtuale. La valutazione finale resta comunque di Activision.',
      'faq.q3s': 'Funziona con le mie cuffie?', 'faq.q3p': 'Sì, con qualsiasi cuffia: include 68 EQ pronti e un database di 6.797 misure per calibrare la risposta sulle tue.',
      'faq.q4s': 'Serve una scheda audio particolare?', 'faq.q4p': 'No. Basta Windows 10/11 a 64 bit e un paio di cuffie. Tutto il resto è software.',
      'faq.q5s': 'L\'overlay funziona in schermo intero?', 'faq.q5p': 'Funziona con il gioco in <strong>schermo intero senza bordi</strong>, non in schermo intero esclusivo. I tasti <kbd>Ctrl</kbd>+<kbd>Alt</kbd> funzionano comunque.',
      'faq.q6s': 'Devo usare Voicemeeter?', 'faq.q6p': 'No. BOOST TATTIC fa tutto da solo: mixer, motore, tray, avvio automatico. Niente Voicemeeter né Equalizer APO.',
      'faq.q7s': 'Come ricevo gli aggiornamenti?', 'faq.q7p': 'Dalla pagina Aggiornamenti dell\'app: la libreria preset si aggiorna da lì, per l\'app scarichi la nuova release da GitHub.',
      'faq.q8s': 'Non sento nulla, cosa controllo?', 'faq.q8p': 'Tre cose, in ordine: nel gioco esci su TATTIC; nell\'app premi Avvia audio; controlla che il cavo virtuale sia a 16 canali e 48 kHz.',
      'final.h2': 'Installa in 5 minuti,<br>dal primo fight senti la differenza.',
      'final.btn': '⬇ Scarica BOOST TATTIC gratis',
      'final.p': 'Windows 10/11 64-bit · open source · <a href="https://github.com/inferis995/tattic">codice su GitHub</a>',
      'foot.a': 'BOOST TATTIC — progetto personale open source, non commerciale.'
    }
  };

  function verText(l) {
    if (window.__ver) return (l === 'it' ? 'ultima ' : 'latest ') + window.__ver;
    return l === 'it' ? 'ultima versione in arrivo…' : 'latest release coming…';
  }

  function setLang(l) {
    var d = DICT[l] || DICT.en;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n')];
      if (v == null) return;
      if (el.id === 'verline') el.innerHTML = v.replace('{ver}', '<span id="ver">' + verText(l) + '</span>');
      else el.innerHTML = v;
    });
    document.documentElement.lang = l;
    document.querySelectorAll('.lang').forEach(function (b) { b.classList.toggle('active', b.id === 'lang-' + l); });
    try { localStorage.setItem('tattic-lang', l); } catch (e) { /* privato */ }
    window.__lang = l;
  }

  document.getElementById('lang-it').addEventListener('click', function () { setLang('it'); });
  document.getElementById('lang-en').addEventListener('click', function () { setLang('en'); });
  var start = 'en';
  try { start = localStorage.getItem('tattic-lang') || (((navigator.language || 'en').toLowerCase().indexOf('it') === 0) ? 'it' : 'en'); } catch (e) { /* default en */ }
  setLang(start);
  window.__setLang = setLang;
})();

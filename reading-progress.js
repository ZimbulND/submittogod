/**
 * UX Package 1 — single on-device reading marker + Continue reading.
 * Attaches chrome only; does not change AEV verse/heading/footnote text nodes.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'stg-reading-progress';
  var HASH_PREFIX = 'v-';

  function parseSuraFromPath(pathname) {
    var m = String(pathname || '').match(/sura-(\d{3})(?:\.html)?$/i);
    return m ? parseInt(m[1], 10) : null;
  }

  function suraFile(sura) {
    var n = String(sura).padStart(3, '0');
    return 'sura-' + n + '.html';
  }

  function suraPretty(sura) {
    return '/sura-' + String(sura).padStart(3, '0');
  }

  function readProgress() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (!data || typeof data.sura !== 'number' || typeof data.verse !== 'number') return null;
      if (data.sura < 1 || data.sura > 114 || data.verse < 1) return null;
      return data;
    } catch (e) {
      return null;
    }
  }

  function writeProgress(data) {
    try {
      if (!data) {
        localStorage.removeItem(STORAGE_KEY);
        return;
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      /* private mode / quota — fail quiet */
    }
  }

  function verseNumberFromText(el) {
    var text = (el.textContent || '').replace(/\s+/g, ' ').trim();
    var m = text.match(/^(\d+)\.\s/);
    return m ? parseInt(m[1], 10) : null;
  }

  function isNumberedVerse(el) {
    return verseNumberFromText(el) !== null;
  }

  function continueHref(data, preferPretty) {
    if (!data) return '#';
    var hash = '#' + HASH_PREFIX + data.verse;
    if (preferPretty) return suraPretty(data.sura) + hash;
    return suraFile(data.sura) + hash;
  }

  function continueLabel(data) {
    if (!data) return 'Continue reading';
    return 'Continue reading — Sura ' + data.sura + ':' + data.verse;
  }

  function renderContinueSlot(slot, preferPretty) {
    if (!slot) return;
    var data = readProgress();
    if (!data) {
      slot.hidden = true;
      slot.innerHTML = '';
      return;
    }
    slot.hidden = false;
    var a = document.createElement('a');
    a.href = continueHref(data, preferPretty);
    a.textContent = continueLabel(data);
    if (slot.classList.contains('continue-reading-hub')) {
      a.className = 'button';
    }
    slot.innerHTML = '';
    slot.appendChild(a);
  }

  function refreshAllContinueSlots() {
    var slots = document.querySelectorAll('[data-continue-reading]');
    for (var i = 0; i < slots.length; i++) {
      var preferPretty = slots[i].getAttribute('data-prefer-pretty') === '1';
      renderContinueSlot(slots[i], preferPretty);
    }
  }

  function ensureSuraContinueSlot() {
    var nav = document.querySelector('.nav');
    if (!nav) return null;
    var existing = nav.querySelector('[data-continue-reading]');
    if (existing) return existing;
    var slot = document.createElement('div');
    slot.className = 'continue-reading';
    slot.setAttribute('data-continue-reading', '1');
    nav.appendChild(slot);
    return slot;
  }

  function ensureHubContinueSlot() {
    var existing = document.querySelector('[data-continue-reading]');
    if (existing) return existing;
    var host =
      document.querySelector('.intro') ||
      document.querySelector('.container') ||
      document.querySelector('main') ||
      null;
    if (!host) return null;
    var slot = document.createElement('p');
    slot.className = 'continue-reading-hub';
    slot.setAttribute('data-continue-reading', '1');
    if (host.classList.contains('intro')) {
      host.insertBefore(slot, host.firstChild);
    } else {
      var h1 = host.querySelector('h1');
      if (h1 && h1.nextSibling) host.insertBefore(slot, h1.nextSibling);
      else host.insertBefore(slot, host.firstChild);
    }
    return slot;
  }

  function applySavedState(rows, data) {
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var verse = parseInt(row.getAttribute('data-verse'), 10);
      var btn = row.querySelector('.verse-marker');
      var saved = !!(data && data.sura === currentSura && data.verse === verse);
      row.classList.toggle('is-saved', saved);
      if (btn) {
        btn.setAttribute('aria-pressed', saved ? 'true' : 'false');
        btn.setAttribute(
          'aria-label',
          saved ? 'Clear saved reading place at verse ' + verse : 'Save reading place at verse ' + verse
        );
        btn.title = saved ? 'Clear saved place' : 'Save reading place';
      }
    }
  }

  function onMarkerClick(verse, rows) {
    var current = readProgress();
    if (current && current.sura === currentSura && current.verse === verse) {
      writeProgress(null);
    } else {
      writeProgress({
        sura: currentSura,
        verse: verse,
        savedAt: new Date().toISOString()
      });
    }
    applySavedState(rows, readProgress());
    refreshAllContinueSlots();
  }

  function attachMarkers(sura) {
    var verses = document.querySelectorAll('.verse');
    var rows = [];
    for (var i = 0; i < verses.length; i++) {
      var el = verses[i];
      if (!isNumberedVerse(el)) continue;
      if (el.closest('.verse-row')) continue;
      var verse = verseNumberFromText(el);
      el.id = HASH_PREFIX + verse;

      var row = document.createElement('div');
      row.className = 'verse-row';
      row.setAttribute('data-verse', String(verse));

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'verse-marker';
      btn.textContent = '●';
      btn.addEventListener(
        'click',
        (function (v) {
          return function () {
            onMarkerClick(v, rows);
          };
        })(verse)
      );

      var parent = el.parentNode;
      parent.insertBefore(row, el);
      row.appendChild(btn);
      row.appendChild(el);
      rows.push(row);
    }
    applySavedState(rows, readProgress());
    return rows;
  }

  function scrollToHash() {
    var hash = location.hash || '';
    var m = hash.match(/^#v-(\d+)$/);
    if (!m) return;
    var id = HASH_PREFIX + m[1];
    var target = document.getElementById(id);
    if (!target) return;
    var row = target.closest('.verse-row') || target;
    window.setTimeout(function () {
      row.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 50);
  }

  var path = location.pathname || '';
  var currentSura = parseSuraFromPath(path);
  var isQuranHub = /\/quran(?:\.html)?$/i.test(path) || /(^|\/)quran\.html$/i.test(path);

  if (currentSura) {
    ensureSuraContinueSlot();
    attachMarkers(currentSura);
    refreshAllContinueSlots();
    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
  } else if (isQuranHub) {
    ensureHubContinueSlot();
    refreshAllContinueSlots();
  } else {
    /* Other pages: if a slot was pre-placed, still refresh it. */
    refreshAllContinueSlots();
  }
})();

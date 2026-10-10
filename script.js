document.getElementById("year").textContent = new Date().getFullYear();

// Efek ketik di jendela editor (satu-satunya animasi otomatis di halaman)
const el = document.getElementById("code");
const raw = el.textContent;

// Pewarnaan sintaks sederhana
function highlight(text) {
  return text
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/"([^"]*)"/g, '<span class="s">"$1"</span>')
    .replace(/^([^:\n<]+):/gm, '<span class="p">$1</span>:');
}

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduce) {
  el.innerHTML = highlight(raw);
} else {
  let i = 0;
  el.innerHTML = "";
  (function type() {
    el.innerHTML = highlight(raw.slice(0, i)) + '<span class="caret"></span>';
    if (i++ < raw.length) setTimeout(type, 28);
  })();
}

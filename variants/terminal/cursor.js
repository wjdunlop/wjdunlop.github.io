// wjd terminal — tiny enhancements
// 1) live clock in the status bar (HH:MM, locale-aware, en-GB 24h)
// 2) optional flicker pulse on focus

(function () {
  "use strict";

  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  function tick() {
    var el = document.getElementById("sb-time");
    if (!el) return;
    var d = new Date();
    el.textContent = pad(d.getHours()) + ":" + pad(d.getMinutes());
  }

  tick();
  setInterval(tick, 15 * 1000);

  // Subtle: when window regains focus, do a tiny CRT pulse
  window.addEventListener("focus", function () {
    document.body.style.transition = "filter 120ms ease-out";
    document.body.style.filter = "brightness(1.18) contrast(1.05)";
    setTimeout(function () {
      document.body.style.filter = "";
    }, 140);
  });
})();

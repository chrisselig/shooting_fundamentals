(function () {
  "use strict";

  // ---- mobile nav toggle ----
  var toggle = document.getElementById("navToggle");
  var panel = document.getElementById("navPanel");
  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // ---- service worker registration (enables offline / home-screen caching) ----
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/service-worker.js").catch(function (err) {
        console.error("Service worker registration failed:", err);
      });
    });
  }

  // ---- "Add to Home Screen" install prompt ----
  var deferredPrompt = null;
  var banner = document.getElementById("installBanner");
  var installBtn = document.getElementById("installBtn");
  var dismissBtn = document.getElementById("installDismiss");
  var DISMISS_KEY = "install-banner-dismissed";

  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferredPrompt = e;
    if (banner && !localStorage.getItem(DISMISS_KEY)) {
      banner.classList.add("show");
    }
  });

  if (installBtn) {
    installBtn.addEventListener("click", function () {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      deferredPrompt.userChoice.finally(function () {
        deferredPrompt = null;
        banner.classList.remove("show");
      });
    });
  }

  if (dismissBtn) {
    dismissBtn.addEventListener("click", function () {
      banner.classList.remove("show");
      localStorage.setItem(DISMISS_KEY, "1");
    });
  }

  window.addEventListener("appinstalled", function () {
    if (banner) banner.classList.remove("show");
  });
})();

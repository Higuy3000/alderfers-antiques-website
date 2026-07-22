/* =====================================================================
   Alderfer's Antiques of Aspen — interactions
   Vanilla JS, no dependencies. Loaded with `defer` on every page.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Close the menu after following a link (single-page anchor or nav).
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        links.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Header shadow on scroll (depth cue) ---------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Set current year in footer ---------- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ---------- Reveal-on-scroll (.pop cards spring up with a stagger) ---------- */
  var revealEls = document.querySelectorAll(".reveal, .pop");
  if (revealEls.length) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    }
  }

  /* ---------- Interactive display case (tabs) ---------- */
  var caseEl = document.querySelector(".case");
  if (caseEl) {
    var caseTabs = Array.prototype.slice.call(caseEl.querySelectorAll(".case__tile"));
    var casePanels = caseEl.querySelectorAll(".case__panel");

    var selectCase = function (target, focusTab) {
      caseTabs.forEach(function (t) {
        var on = t.dataset.target === target;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        if (on && focusTab) { t.focus(); }
      });
      casePanels.forEach(function (p) {
        p.classList.toggle("is-active", p.id === target);
      });
    };

    caseTabs.forEach(function (t, i) {
      t.addEventListener("click", function () { selectCase(t.dataset.target); });
      t.addEventListener("keydown", function (e) {
        var idx = null;
        if (e.key === "ArrowDown" || e.key === "ArrowRight") { idx = (i + 1) % caseTabs.length; }
        else if (e.key === "ArrowUp" || e.key === "ArrowLeft") { idx = (i - 1 + caseTabs.length) % caseTabs.length; }
        else if (e.key === "Home") { idx = 0; }
        else if (e.key === "End") { idx = caseTabs.length - 1; }
        if (idx !== null) { e.preventDefault(); selectCase(caseTabs[idx].dataset.target, true); }
      });
    });

    // Set initial roving tabindex from the pre-selected tab.
    var initial = caseEl.querySelector('.case__tile[aria-selected="true"]') || caseTabs[0];
    if (initial) { selectCase(initial.dataset.target); }
  }

  /* ---------- Sticky mobile action bar ---------- */
  var actionBar = document.querySelector(".action-bar");
  var footer = document.querySelector(".site-footer");
  if (actionBar) {
    var updateBar = function () {
      // Show once past the first screen…
      var pastFold = window.scrollY > 480;
      // …but hide when the footer is in view so the bar never covers it.
      var footerVisible = false;
      if (footer) {
        footerVisible = footer.getBoundingClientRect().top < window.innerHeight;
      }
      actionBar.classList.toggle("is-visible", pastFold && !footerVisible);
    };
    window.addEventListener("scroll", updateBar, { passive: true });
    window.addEventListener("resize", updateBar, { passive: true });
    updateBar();
  }

  /* ---------- Gallery lightbox ---------- */
  var lightbox = document.querySelector(".lightbox");

  if (lightbox) {
    var content = lightbox.querySelector(".lightbox__content");
    var caption = lightbox.querySelector(".lightbox__caption");
    var closeBtn = lightbox.querySelector(".lightbox__close");
    var lastFocused = null;

    function openLightbox(sourceEl) {
      lastFocused = sourceEl;
      var inner = sourceEl.querySelector("img, .ph");
      var label = sourceEl.getAttribute("data-caption") || (inner && inner.getAttribute("alt")) || "";

      // Clone the visual (image or styled placeholder) into the lightbox.
      content.innerHTML = "";
      if (inner) {
        var clone = inner.cloneNode(true);
        clone.style.transform = "none";
        content.appendChild(clone);
      }
      caption.textContent = label;
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastFocused) { lastFocused.focus(); }
    }

    document.querySelectorAll(".gallery__item").forEach(function (item) {
      item.addEventListener("click", function () { openLightbox(item); });
      item.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(item);
        }
      });
    });

    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) { closeLightbox(); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeLightbox();
      }
    });
  }
})();

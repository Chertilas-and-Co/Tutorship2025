(() => {
  // ns-hugo-imp:/home/gohy/Projects/Tutorship2025/assets/ts/footer.ts
  function initTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      document.documentElement.setAttribute("data-scheme", saved);
    } else {
      const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      document.documentElement.setAttribute("data-scheme", prefers);
    }
  }
  function setupThemeToggle() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-scheme") || "light";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-scheme", next);
      localStorage.setItem("theme", next);
    });
  }
  function setupFeedbackModal() {
    const modal = document.getElementById("feedback-modal");
    const closeBtn = modal?.querySelector(".close");
    function toggle() {
      modal?.classList.toggle("show");
    }
    document.querySelectorAll('[onclick="toggleFeedback()"]').forEach(
      (el) => el.addEventListener("click", (e) => {
        e.preventDefault();
        toggle();
      })
    );
    closeBtn?.addEventListener("click", () => toggle());
    modal?.addEventListener("click", (e) => {
      if (e.target === modal) toggle();
    });
  }
  function setupScrollToTop() {
    const btn = document.querySelector(".scroll-to-top");
    if (!btn) return;
    btn.style.opacity = "0";
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        btn.style.opacity = "1";
      } else {
        btn.style.opacity = "0";
      }
    });
  }
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    setupThemeToggle();
    setupFeedbackModal();
    setupScrollToTop();
  });

  // ns-hugo-imp:/home/gohy/Projects/Tutorship2025/assets/ts/yearSelect.ts
  document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname.replace(/\/$/, "");
    const yearLinks = document.querySelectorAll(".year-btn, .year-card");
    yearLinks.forEach((link) => {
      if (link.getAttribute("href") === path || link.getAttribute("href") === path + "/") {
        link.classList.add("active");
      }
    });
  });
})();

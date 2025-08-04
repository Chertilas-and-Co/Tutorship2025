// Подсветка активного года при переходе по ссылке
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.replace(/\/$/, "");
  const yearLinks = document.querySelectorAll<HTMLAnchorElement>(".year-btn, .year-card");

  yearLinks.forEach(link => {
    if (link.getAttribute("href") === path || link.getAttribute("href") === path + "/") {
      link.classList.add("active");
    }
  });
});

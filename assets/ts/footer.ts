
// Модуль для управления темой и дополнительными функциями футера

// Сначала восстановим тему из localStorage или системных настроек
function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || saved === 'light') {
    document.documentElement.setAttribute('data-scheme', saved);
  } else {
    // Если ничего не сохранено — используем настойку системы
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-scheme', prefers);
  }
}

// Переключатель темы
function setupThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-scheme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-scheme', next);
    localStorage.setItem('theme', next);
  });
}

// Модальное окно обратной связи
function setupFeedbackModal() {
  const modal = document.getElementById('feedback-modal');
  const closeBtn = modal?.querySelector<HTMLElement>('.close');
  
  function toggle() {
    modal?.classList.toggle('show');
  }

  // Открыть по ссылке
  document.querySelectorAll('[onclick="toggleFeedback()"]').forEach(el =>
    el.addEventListener('click', (e) => {
      e.preventDefault();
      toggle();
    })
  );

  // Закрыть по крестику
  closeBtn?.addEventListener('click', () => toggle());

  // Закрыть по клику вне содержимого
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) toggle();
  });
}

// Кнопка «наверх»
function setupScrollToTop() {
  const btn = document.querySelector<HTMLElement>('.scroll-to-top');
  if (!btn) return;

  btn.style.opacity = '0.6';
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      btn.style.opacity = '1';
    } else {
      btn.style.opacity = '0.6';
    }
  });
}

// Инициализация всех функций после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupThemeToggle();
  setupFeedbackModal();
  setupScrollToTop();
});

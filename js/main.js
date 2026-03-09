(function () {
  const button = document.querySelector('[data-fullscreen-button]');
  const target = document.querySelector('[data-fullscreen-target]');

  if (!button || !target) return;

  const toggleFallback = function () {
    target.classList.toggle('fullscreen-fallback');
    target.classList.toggle('fullscreen-card');
  };

  button.addEventListener('click', async function () {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    if (target.requestFullscreen) {
      target.classList.add('fullscreen-card');
      await target.requestFullscreen();
      return;
    }

    toggleFallback();
  });

  document.addEventListener('fullscreenchange', function () {
    if (!document.fullscreenElement) {
      target.classList.remove('fullscreen-card');
    }
  });
})();

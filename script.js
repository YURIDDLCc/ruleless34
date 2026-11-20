// RuleLess 34 scripts

document.getElementById('start-browsing').addEventListener('click', function () {
  window.location.href = 'browse.html';
});

// ===== 3D Tilt on buttons, cards, and hero =====
(function () {
  const targets = document.querySelectorAll('.btn, .card, .hero');

  function apply3D(el, e) {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    el.style.transition = 'transform 0.1s ease-out';
  }

  function reset3D(el) {
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    el.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
  }

  targets.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      apply3D(el, e);
    });

    el.addEventListener('mouseleave', () => reset3D(el));
  });
})();

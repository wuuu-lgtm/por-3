// 暗色模式切換功能
document.addEventListener('keydown', (e) => {
    if (e.key === 'd' || e.key === 'D') {
      document.body.classList.toggle('dark-mode');
    }
  });
  
  // 即時時鐘功能
  function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
  }
  setInterval(updateClock, 1000);
  updateClock();
  
  // 滾動出現動畫
  const elements = document.querySelectorAll('.content, .project-card, .about-container');
  
  window.addEventListener('scroll', () => {
    elements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elTop < windowHeight - 50) {
        el.classList.add('visible');
      }
    });
  });
  
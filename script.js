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
  const elements = document.querySelectorAll('.content, .project-card, .about-container, .about-image img');
  
  window.addEventListener('scroll', () => {
    elements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elTop < windowHeight - 50) {
        el.classList.add('visible');
      }
    });
  });
  
  // 打字動畫效果
  const text = "Welcome to my portfolio showcasing creative design and front-end development.";
  const typedText = document.getElementById("typed-text");
  let idx = 0;
  function typeEffect() {
    if (idx < text.length) {
      typedText.innerHTML += text[idx];
      idx++;
      setTimeout(typeEffect, 50);
    }
  }
  typeEffect();
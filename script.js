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
  
  // 每秒更新一次
  setInterval(updateClock, 1000);
  updateClock(); // 頁面一打開就更新一次
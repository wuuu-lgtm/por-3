// 滾動出現動畫
const sections = document.querySelectorAll('.content');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 50) {
      section.classList.add('visible');
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.glass-card');
  const container = document.querySelector('.main-container');

  if (window.matchMedia("(min-width: 768px)").matches && card && container) {
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg
      const rotateY = ((x - centerX) / centerX) * 5; // Max 5deg

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    container.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      card.style.transition = 'transform 0.5s ease';
    });
    
    container.addEventListener('mouseenter', () => {
       card.style.transition = 'transform 0.1s ease';
    });
  }
});

function initTypewriter() {
    const elements = document.querySelectorAll('.typewriter');
    
    elements.forEach(element => {
      const texts = JSON.parse(element.getAttribute('data-texts') || '["First Text", "Second Text", "Third Text"]');
      let textIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
  
      function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
          element.textContent = currentText.slice(0, charIndex - 1);
          charIndex--;
        } else {
          element.textContent = currentText.slice(0, charIndex + 1);
          charIndex++;
        }
  
        if (!isDeleting && charIndex === currentText.length) {
          setTimeout(() => { isDeleting = true; }, 1000);
        }
  
        if (isDeleting && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
        }
  
        setTimeout(type, isDeleting ? 50 : 100);
      }
  
      type();
    });
}
  


document.addEventListener('DOMContentLoaded', () => {
    function createStars(count) {
        const container = document.getElementById('starContainer');
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 2}s`;
            container.appendChild(star);
        }
    }; createStars(30);

    function createRain() {
        const rainContainer = document.getElementById('rain');
        const dropCount = 100;

        for (let i = 0; i < dropCount; i++) {
            const drop = document.createElement('div');
            drop.classList.add('drop');
            drop.style.left = `${Math.random() * 100}%`;
            drop.style.animationDelay = `${Math.random() * -20}s`;
            rainContainer.appendChild(drop);
        }
    };createRain();


});

document.addEventListener('DOMContentLoaded', initTypewriter);


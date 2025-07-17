window.addEventListener('scroll', function () {
      const navbar = document.getElementById('navbar');
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
    const features = document.querySelectorAll('.feature');

    function showOnScroll() {
      const triggerBottom = window.innerHeight * 0.85;
      features.forEach(feature => {
        const boxTop = feature.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          feature.classList.add('visible');
        }
      });
    }

    window.addEventListener('scroll', showOnScroll);
    window.addEventListener('load', showOnScroll);
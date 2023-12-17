
const menuIcon = document.querySelector('.menu-icon');
      const nav = document.querySelector('nav');
      const navLinks = document.querySelectorAll('.nav-links a');

      let menuOpen = false;

      function toggleMenu() {
        if (!menuOpen) {
          nav.classList.add('active');
          nav.classList.remove('inactive');
          menuIcon.innerHTML = '&times;';
        } else {
          nav.classList.add('inactive');
          nav.classList.remove('active');
          menuIcon.innerHTML = '&#9776;';
        }

        menuOpen = !menuOpen;
      }

      menuIcon.addEventListener('click', toggleMenu);

      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (menuOpen) {
            toggleMenu();
          }
        });
      });

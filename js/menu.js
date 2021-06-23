(function(document, window, undefined) {

    'use strict';
    
    var header = document.querySelector('.js-header'),
      menu = document.querySelector('.js-menu'),
      menuButton = document.createElement('a');
  
    menuButton.classList.add('menu-button');
    menuButton.setAttribute('href', '#menu');
    menuButton.setAttribute('id', 'menu-button');
    menuButton.setAttribute('aria-label', 'Menu');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-controls', 'menu');
    menuButton.innerHTML = '<span aria-hidden="true">&#x2261;</span>';
    
    menu.setAttribute('aria-hidden', 'true');
    menu.setAttribute('aria-labelledby', 'menu-button');
    
    header.insertBefore(menuButton, menu);
  
    menuButton.addEventListener('click', function () {
      
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menu.setAttribute('aria-hidden', 'true');
        menuButton.setAttribute('aria-expanded', 'false');
      } else {
        menu.classList.add('active');
        menu.setAttribute('aria-hidden', 'false');
        menuButton.setAttribute('aria-expanded', 'true');
  
        menu.children[0].children[0].children[0].focus();
      }
    }, false);
    
  })(document, window);
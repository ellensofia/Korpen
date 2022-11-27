const animation = () => {

  const menuBtn = document.querySelector('.menu-btn');
  const menuList = document.querySelector('.menu__list');
  const menuItem = document.querySelector('.menu__item');


  const toggleMenu = () => {
    menuList.classList.toggle('menu__list--open');
    menuItem.classList.toggle('menu__item--open');
    menuBtn.classList.toggle('menu-btn--open');
  }

  menuBtn.addEventListener('click', toggleMenu)

}

animation();
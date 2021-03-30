$(document).ready(() => {
  const exampleSlider = new Swiper('.examples-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.examples-grid__button--next',
      prevEl: '.examples-grid__button--prev',
    },
    // keyboard control 
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    }
  });
  const button = document.getElementById('button');
  const screenWidth = window.screen.width;
    if (screenWidth <= 576) {
      button.innerHTML = 
      `Смотреть все <img
      src="src/img/popular/arrow.svg"
      alt="Icon: arrow"
      class="all-articles-button__icon"
      />`
    }
  const checkScreen = () => {
    const screenWidth = window.screen.width;
    if (screenWidth <= 576) {
      button.innerHTML = 
      `Смотреть все <img
      src="src/img/popular/arrow.svg"
      alt="Icon: arrow"
      class="all-articles-button__icon"
      />`
    } else {
      button.innerHTML = `
      Больше постов
              <img
                src="src/img/popular/arrow.svg"
                alt="Icon: arrow"
                class="all-articles-button__icon"
              />`
    }
  };
  window.addEventListener('resize', checkScreen);
})
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
  const button = document.getElementById('button'),
    gridItem = document.getElementById('grid-item'),
    gridTitle = document.getElementById('grid-title'),
    articlesText = document.getElementById('articles-text');
  const checkScreen = () => {
    const screenWidth = window.screen.width;
    if (screenWidth <= 576) {
      button.innerHTML = 
      `Смотреть все <img
      src="src/img/popular/arrow.svg"
      alt="Icon: arrow"
      class="all-articles-button__icon"
      />`;
      gridItem.innerHTML = `Privacy Policy`
      gridTitle.innerHTML = `Ещё..`
      articlesText.innerHTML = `Мы делимся общими тенденциями, стратегическими идеями, мнениями, короткими и длинными историями команды, стоящей за компанией.`
    } else {
      button.innerHTML = `
      Больше постов
            <img
              src="src/img/popular/arrow.svg"
              alt="Icon: arrow"
              class="all-articles-button__icon"
            />`;
      gridItem.innerHTML = `Политика конфиденциальности`
      gridTitle.innerHTML = `Более`
      articlesText.innerHTML = `Мы делимся общими тенденциями, стратегическими идеями, мнениями, короткими и длинными историями команды, стоящей`
    }
  };
  window.addEventListener('resize', checkScreen); 
  checkScreen();
})
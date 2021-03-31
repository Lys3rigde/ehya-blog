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

  const modalButton = document.querySelector(".navbar__button"),
    navButton = document.querySelector('.navbar__button--menu'),
    closeModalButton = document.querySelector(".modal__close"),
    modalOverlay = document.querySelector(".modal__overlay"),
    modalWrapper = document.querySelector(".modal__wrapper");
  const openModal = () => {
    modalOverlay.classList.add("modal__overlay--visible");
    modalWrapper.classList.add("modal__wrapper--visible");
    $("body").css("overflow","hidden");
    bodyFixPosition();
  };
  const closeModal = event => {
    event.preventDefault();
    modalOverlay.classList.remove("modal__overlay--visible");
    modalWrapper.classList.remove("modal__wrapper--visible");
    $("body").css("overflow","scroll");
    bodyUnfixPosition();
  };
  const turnModal = () => {
    modalOverlay.classList.remove("modal__overlay--visible");
    modalWrapper.classList.remove("modal__wrapper--visible");
    $("body").css("overflow","scroll");
    bodyUnfixPosition();
  };
  $(document).keydown(event => {
    const key = event.key;
    if (key === "Escape") {
      turnModal();
    }
  });
  $(document).click(event => {
    if ($(event.target).is('.modal__overlay')) {
      turnModal();
    }
  });
  modalButton.addEventListener('click', openModal);
  navButton.addEventListener('click', openModal);
  closeModalButton.addEventListener('click', closeModal);
  document.addEventListener('click', event => {
    const target = event.target;
    if (target.closest('div').classList.contains('all-articles-main') || target.closest('div').classList.contains('all-articles-secondary') || target.closest('.button')) {
      window.open('details.html', '_blank');
    };
  }); 
  window.addEventListener('resize', checkScreen); 
  checkScreen();

  const menuButton = document.querySelector('.header-button'),
  navbarButton = document.querySelector('.navbar-button')
  navbarMobile = document.getElementById('navbar');
  console.log(navbarMobile);
  menuButton.addEventListener('click', () => {
    navbarMobile.classList.add('navbar-mobile--visible');
    $("body").css("overflow","hidden");
    bodyFixPosition();
  });
  navbarButton.addEventListener('click', () => {
      navbarMobile.classList.remove('navbar-mobile--visible');
      $("body").css("overflow","scroll");
      bodyUnfixPosition(); 
  });
  const bodyFixPosition = () => {

    setTimeout(() => {
    /* Ставим необходимую задержку, чтобы не было «конфликта» в случае, если функция фиксации вызывается сразу после расфиксации (расфиксация отменяет действия расфиксации из-за одновременного действия) */
      if ( !document.body.hasAttribute('data-body-scroll-fix') ) {

        // Получаем позицию прокрутки
        let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
        // Ставим нужные стили
        document.body.setAttribute('data-body-scroll-fix', scrollPosition); // Cтавим атрибут со значением прокрутки
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = '-' + scrollPosition + 'px';
        document.body.style.left = '0';
        document.body.style.width = '100%';
  
      }
  
    }, 15 ); /* Можно задержку ещё меньше, но у меня работало хорошо именно с этим значением на всех устройствах и браузерах */
  
  }
  // 2. Расфиксация <body>
  function bodyUnfixPosition() {
  
    if ( document.body.hasAttribute('data-body-scroll-fix') ) {
  
      // Получаем позицию прокрутки из атрибута
      let scrollPosition = document.body.getAttribute('data-body-scroll-fix');
  
      // Удаляем атрибут
      document.body.removeAttribute('data-body-scroll-fix');
  
      // Удаляем ненужные стили
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.width = '';
  
      // Прокручиваем страницу на полученное из атрибута значение
      window.scroll(0, scrollPosition);
    }
  }
})
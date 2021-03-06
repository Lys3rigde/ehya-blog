$(document).ready(() => {
  const articleSlider = new Swiper('.article-slider', {
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
  if ( $(window).width() > 992 ) {
    $(window).scroll(() => {
      const height = $(window).scrollTop();
      if(height > 680){
      $('.article-share').addClass('article-share--active');
      } else{
      $('.article-share').removeClass('article-share--active');
      }
      });
      
    $(window).scroll(() => {
      const height = $(window).scrollTop();
      if (height > 5400) {
      $('.article-share').removeClass('article-share--active');
      } 
    });
  }

  const gridItem = document.getElementById('grid-item'),
    gridTitle = document.getElementById('grid-title'),
    date = document.getElementById('date'),
    quote = document.getElementById('quote'),
    comment = document.getElementById('comment'),
    dateDetails = document.querySelectorAll('.author__date--details');

  const checkScreen = () => {
    const screenWidth = window.screen.width;
    if (screenWidth <= 576) {
      gridItem.innerHTML = `Privacy Policy`
      gridTitle.innerHTML = `Ещё..`
      date.innerHTML = `MAY, 2 2019`
      dateDetails[1].innerHTML = `MAY, 2 2019`
      quote.innerHTML = `Daniel hosts in Yogyakarta to earn extra money`
      comment.innerHTML = `Cras sit amet nibh libero, in gravida nulla. Nulla vel met scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.`
    } else {
      gridItem.innerHTML = `Политика конфиденциальности`
      gridTitle.innerHTML = `Более`
      date.innerHTML = `PUBLISHED ON MAY, 2 2019`
      dateDetails[1].innerHTML = `PUBLISHED ON MAY, 2 2019`
      quote.innerHTML = `Даниэль принимает гостей в Джокьякарте, чтобы заработать
      дополнительные деньги`
      comment.innerHTML = `              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
      scelerisque ante sollicitudin.`
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

  $(".send-form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "The name must be at least 2 characters long "
        },
        email: {
          required: "We need your email address to contact you",
          email: "Please enter a valid e-mail"
        },
        phone: {
          required: "Please specify your phone",
          minlength: "Phone number must be at least 11 digits"
        },
      }
    });
  });
  $('.phone').mask('+7 (000) 000-00-00');

  const toTop = () => {
    const toTop = document.querySelector('.toTop');
    toTop.style.cursor = 'pointer';
    toTop.style.display = 'none';
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 640) toTop.style.display = 'flex';
        else toTop.style.display = 'none';
    });

    toTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
      });
  };
  toTop();

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

  window.addEventListener('resize', checkScreen); 
  checkScreen();
});


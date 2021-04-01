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
          /*Если меньше 100px удаляем класс для header*/
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

});


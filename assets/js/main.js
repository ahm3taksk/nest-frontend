tailwind.config = {
    theme: {
      extend: {
        colors: {
          clifford: '#da373d',
        }
      }
    }
  }

function activateSidePopup() {
  var popupContent = document.getElementsByClassName("sidePopupContent")[0];
    if (popupContent.classList.contains("active")) {
        popupContent.classList.remove("active");
    } else {
        popupContent.classList.add("active");
  }
}

const swiper = new Swiper('.swiperMain', {
  direction: 'horizontal',
  loop: true,
  noSwiping: true,
  allowTouchMove: false,
  freeMode: false,
  effect: 'fade',

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


var swiperPopularProductThumb = new Swiper('.swiperPopularProductThumb', {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 3,
  freeMode: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

var swiperPopularProduct = new Swiper('.swiperPopularProduct', {
  loop: true,
  noSwiping: true,
  allowTouchMove: false,
  freeMode: false,
  effect: 'fade',
  slidesPerView: 1,
    thumbs: {
      swiper: swiperPopularProductThumb,
  },
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

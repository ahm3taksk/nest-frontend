tailwind.config = {
    theme: {
      extend: {
        colors: {
          clifford: '#da373d',
        }
      }
    }
  }

  function activateSidePopup(event) {
    var popupContent = document.getElementsByClassName("sidePopupContent")[0];
  
    if (popupContent.classList.contains("active")) {
      popupContent.classList.remove("active");
      document.removeEventListener("click", closePopupOnClickOutside);
    } else {
      popupContent.classList.add("active");
      setTimeout(() => document.addEventListener("click", closePopupOnClickOutside));
    }
    event.stopPropagation();
  }
  
  function closePopupOnClickOutside(event) {
    var popupContent = document.getElementsByClassName("sidePopupContent")[0];
    
    if (!popupContent.contains(event.target)) {
      popupContent.classList.remove("active");
      document.removeEventListener("click", closePopupOnClickOutside);
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

const swiperDailyBestSell = new Swiper('.swiperDailyBestSell', {
  slidesPerView: 4,
  spaceBetween: 10,
  freeMode: false,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: '.swiperDailyBestSellNext',
    prevEl: '.swiperDailyBestSellPrev',
  },
  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 2
    },
    402: {
      slidesPerView: 1,
      spaceBetween: 2
    },
  }
});


var swiperPopularProductThumb = new Swiper('.swiperPopularProductThumb', {
    spaceBetween: 10,
    slidesPerView: 4,
    noSwiping: true,
    allowTouchMove: false,
    freeMode: false,
    watchSlidesProgress: true,
});

var swiperPopularProduct = new Swiper('.swiperPopularProduct', {
    spaceBetween: 10,
    freeMode: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiperPopularProductThumb,
  },
});


const swiperShopByCategory = new Swiper('.swiperShopByCategory', {
  slidesPerView: 8,
  spaceBetween: 10,
  effect: 'slide',
  freeMode: true,
  navigation: {
    nextEl: '.shopByCategorySliderNext',
    prevEl: '.shopByCategorySliderPrev',
  },
  breakpoints: {
    1920: {
      slidesPerView: 8,
      spaceBetween: 2
    },
    402: {
      slidesPerView: 2,
      spaceBetween: 2
    },
  }
});
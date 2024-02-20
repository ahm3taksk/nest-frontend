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


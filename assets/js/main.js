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
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
    var popup = document.getElementsByClassName("sidePopupContent")[0];
    if (popup.classList.contains("active")) {
        popup.classList.remove("active");
        popup.classList.remove("row");
    } else {
        popup.classList.add("active");
        popup.classList.add("row");
    }
}
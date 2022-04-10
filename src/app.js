const outer = document.querySelector('.gallery_box_outer');
const cardname = document.querySelector('.card h1');
var elementimg = document.querySelectorAll('.gallery_box_in img');
var wheelcounter = 0;
var counter = 0;

// 마우스 휠 다운시 카드가 넘어가는 이벤트
window.addEventListener('load', function () {
  window.addEventListener('wheel', function (e) {
    if (gallery.style.display != 'none') {
      if (e.wheelDelta === -120) {
        counter -= 40;
        outer.style.transform = `perspective(1300px) rotateX(0deg) rotateY(${counter}deg)`;
      } else {
        function disableScroll() {
          window.addEventListener('DOMMouseScroll', preventDefault, false);
        }
      }
    }
  });
});

// 마우스 휠 다운시 카드이미지배열의 wheelcounter순번 이미지의 alt값이 상단제목에 표시됨
window.addEventListener('load', function () {
  setTimeout(function () {
    cardname.innerText = elementimg[wheelcounter].getAttribute('alt');
  }, 3000);
  window.addEventListener('wheel', function (e) {
    if (gallery.style.display != 'none') {
      if (e.wheelDelta === -120) {
        wheelcounter += 1;
        if (wheelcounter > 8) {
          wheelcounter = 0;
        }
        cardname.innerText = elementimg[wheelcounter].getAttribute('alt');
      } else {
        function disableScroll() {
          window.addEventListener('DOMMouseScroll', preventDefault, false);
        }
      }
    }
  });
});

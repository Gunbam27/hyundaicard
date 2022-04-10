// Modal을 가져옵니다.
const modals = document.getElementsByClassName('modal');
// Modal을 띄우는 클래스 이름을 가져옵니다.
const btns = document.getElementsByClassName('btn');
// Modal을 닫는 close 클래스를 가져옵니다.
const spanes = document.getElementsByClassName('close');
let funcs = [];

// Modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
function Modal(num) {
  return function () {
    // 해당 클래스의 내용을 클릭하면 Modal을 띄웁니다.
    btns[num].onclick = function () {
      modals[num].style.display = 'block';
    };

    // <span> 태그(X 버튼)를 클릭하면 Modal이 닫습니다.
    spanes[num].onclick = function () {
      modals[num].style.display = 'none';
    };
  };
}

// 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의합니다.
// funcs=[Modal(0),[Modal(1),[Modal(2).....[Modal(8)]
for (var i = 0; i < btns.length; i++) {
  funcs[i] = Modal(i);
}

// 원하는 Modal 수만큼 funcs 함수를 호출합니다.
// funcs[0](); funcs[1](); funcs[2]();.....funcs[8]();
for (var j = 0; j < btns.length; j++) {
  funcs[j]();
}

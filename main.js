let result = 0; //계산기의 값

const resultEl = document.querySelector(".result");

resultEl.innerHTML = result;

function onClickNumber() {
  resultEl.innerHTML = 1;
}

// 1 + 1 = 2
// "1" + "1" = 11
//0일때만 추가 -> 교체하는 걸 해야함 -> 밑에 구성
// 31글자가 넘어가지면 입려깅 안되게

function onClickNumber(number) {
  if (resultEl.innerHTML.length >= 13) {
    return;
  }

  // 13글자 조건 비교
  if (resultEl.innerHTML === "0") {
    resultEl.innerHTML = number;
  } else {
    resultEl.innerHTML += number;
  }
}

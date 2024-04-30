let result = 0; //계산기의 값
let operator = "";

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

  if (resultEl.innerHTML === "0") {
    resultEl.innerHTML = number;
  } else {
    resultEl.innerHTML += number;
  }
}

// + 눌렀을때
// 현재 입력한 숫자를 저장 (문자 -> 숫자))
// resultEl.innerHTML = 0
// '+', '-', '*', '/' 저장

function onClickOperator(inputOperator) {
  result = +resultEl.innerHTML;

  resultEl.innerHTML = 0;

  operator = inputOperator;
}

function onClickEnter() {
  switch (operator) {
    case "+":
      result += +resultEl.innerHTML;
      resultEl.innerHTML = result;
      break;
    case "-":
      result -= +resultEl.innerHTML;
      resultEl.innerHTML = result;
      break;
    case "*":
      result *= +resultEl.innerHTML;
      resultEl.innerHTML = result;
      break;
    case "/":
      result = parseInt(result / +resultEl.innerHTML, 10);
      resultEl.innerHTML = result;
      break;
    default:
      console.log("잘못된 연산지입니다.");
  }
}

//sub string
function onClickDelete() {
  resultEl.innerHTML = resultEl.innerHTML.substring(
    0,
    resultEl.innerHTML.length - 1
  );

  if (resultEl.innerHTML.length === 0) {
    resultEl.innerHTML = 0;
  }
  //만약 resultEl,innerHTML 길이가 0이라면
  // resultEl.innerHTML = 0;
}

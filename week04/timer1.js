//1초 간격으로 현재 시각을 출력하는 코드를 구현하시오.
//10번만 반복 호출하고 종료 되도록(clearInterval) 구현하시오.

let id = setInterval(printTime, 1000);
let count = 0;

function printTime() {
    ++count;
    console.log(new Date());
    if (count == 10) {
        clearInterval(id);
    }
}
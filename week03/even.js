//(1) 빈 배열을 만든다.
let a = [];
//(2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
for (let i = 0; i < 10; ++i) {
    a[i] = Math.floor(Math.random() * 100 + 1);
}
console.log(a+"\n");
//(3) (3) 배열에 원소들 중에서 짝수(2의 배수)를 찾아서 모두 제거한다.

//(4) 배열을 출력한다.
console.log(a);
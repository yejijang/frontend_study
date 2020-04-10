//personArray1.js와 동일한 방법으로 persons1 배열을 생성한다.
let persons1 = [];

for (let i = 0; i < 10; ++i) {
    persons1.push({ name: "홍길동", age: 16 + i });
}

//persons1 배열을 복제해서 persons2 배열을 생성한다.
//persons2 배열을 새로 만들어서, persons1 배열의 값들을 복사.
//deep copy가 되도록 복제해야 한다.

let persons2 = [];

for (let i = 0; i < persons1.length; ++i) {
    persons2[i] = Object.assign({}, persons1[i]);
}

//persons2 배열을 출력한다.
console.log(persons2);
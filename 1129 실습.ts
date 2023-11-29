// 기본 자료형
let number = new Number (273);
let string = new String ('안녕하세요');
let boolean = new Boolean(true);

console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);

//Number 객체의 메소드
let number = 273.5210332;

console.log(number.toFixed(1));
console.log(number.toFixed(4));

//String 객체 생성
let stringFromLiteral = '안녕하세요';
let stringFromConstructor = new String('안녕하세요');

//잘못된 String객체의 메소드 사용
let string = 'abcdefg';

string = string.toUpperCase();
console.log(string);


//indexOf() 메소드 사용
let string = '안녕하세요. 좋은 아침입니다.';

if (string.indexOf ('아침') >= 0){
    console.log('좋은 아침이에요...!');
}

// 시간 더하기
let date = new Date();

console.log(date)

date.setFullyear(date.getFullyear()+1);
date.setMonth(date.getMonth()+11);
date.setDate(date.getDate()+3);

console.log(date);

//배열 가공 Array 객체의 메소드
let array = [{

    name: '고구마',
    price: 1000
}, {

name:'감자',
    price: 500

}, {
    name: '바나나',
    price: 1500
}];

let popped = array.pop();
console.log('- 배열에서 꺼낸 요소');
console.log(popped);
console.log('- pop() 메소드를 호출한 이후의 배열');
console.log(array);
array.push(popped);
array.push({
    name: '사과',
    price: 2000
});
console.log('-push() 메소드를 호출한 이후의 배열');
console.log(array);
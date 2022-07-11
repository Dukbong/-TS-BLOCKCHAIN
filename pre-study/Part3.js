"use strict";
// unknown에 대해 알아보기
let a;
// unknown은 타입을 미리 알 수 없을 때 사용된다.
//  - 예시로 api로 부터 무언가 값을 받을 때 무슨 타입인지 알수 없다.
if (typeof a === "number") {
    let b = a + 1;
    // 분명 a의 타입은 unknown이였지만 이렇게 number로 바뀌는걸 볼 수 있다.
}
if (typeof a === "string") {
    let b = a.toUpperCase();
}
// unknown을 사용하면 TS에서 타입 확인작업을 강제로 시킨다.
// void에 대해 알아보기
//  - void란 아무것도 return하지 않는 함수이다.
function hello() {
    console.log("x");
}
// 이 함수에는 return 값이 없기 때문에 hello()에 마우스를 올리면
// 타입이 void로 정의되는걸 볼 수 있으며 void는 따로 타입지정을 해줄 필요가 없다.
// never에 대해 알아보기
//  -never이란 함수가 절대! return 하지 않을때 발생한다.
//  -예를 들어 catch, 예외처리 등 발생할 때 타입이 사용된다.
function Bye() {
    throw new Error("xxx");
}
function ByeBye(name) {
    if (typeof name === "string") {
    }
    else if (typeof name === "number") {
    }
    else {
        name: name;
        // 타입이 나홀로 never이다.
        // 이유는 36번째 줄에서 매개변수를 string | number 를 주기때문에
        // 37번 조건과 39 번 조건 중 하나는 무조건 정답이기 때문이다.
    }
}

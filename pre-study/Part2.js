"use strict";
const playerMaker4 = (name) => {
    return {
        name: name,
    };
};
const BiBi = playerMaker4("BiBi");
BiBi.age = 12;
// BiBi.name = "JaJa"; 🤯Error!!!!!!!
// readonly를 가지고 있는 것은 읽기만 가능합니다.
//⭐readonly에 대해 좀더 알아보기
const numbers = [1, 2, 3, 4, 5];
// numbers = [1,2,3,4,5]
// numbers.push(1); 🤯Error!!!!!!!
// 어떠한 변경도 할 수 없다.
// 하지만 filter, map 등은 원본을 건들지 않기 때문에 사용하다.
const string = ["a", "b"];
//TUPLE에 대해 알아보기
const ex = ["JJa", 1, true];
// ex[0] = 1; 🤯Error!!!!!!!
// 0번째는 문자 타입이기 때문에 숫자가 넣으면 오류가 발생한다.
ex[0] = "hi";
// 만약 위와 같은 수정되는걸 막고 싶다면 readonly을 해주면 된다.
// const ex : readonly[string, number, boolean] = ["JJa",1,true];

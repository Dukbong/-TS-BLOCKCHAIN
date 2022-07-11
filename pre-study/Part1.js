"use strict";
const player = {
    name: "jam",
};
if (player.age && player.age < 10) {
    // 그냥 player.age를 하게 되면 오류가 발생한다.
    // Object is possibly 'undefined' (undefined일 가능성이 있다.)
    //  - 이런 오류가 발생하는 이유는 3번줄에서 ⭐age?:number 이라고 정의해줬기 때문이다.
    // 그렇기 때문에 && 문으로 확인을 거쳐야 한다.
    console.log("hello TypeScript");
}
const playerJam = {
    name: "JAM",
    age: 30,
};
const Bab = {
    name: "BAB"
};
const Son = {
    name: "Son"
};
// 위와 비교했을떄 훨씬 간단해 진걸 알 수 있다.
//⭐Alias 사용해서 Function 다루기
function playerMaker(name) {
    return {
        name: name,
    };
}
const Park = playerMaker("Park");
Park.age = 33;
// 만약 44번째 줄에서 :Player를 해주지 않았다면
// 51번 줄에서는 age라는 property가 없다는 오류가 발생한다.
const playerMaker2 = (name) => {
    return {
        name: name,
    };
};
// 화살표 함수로는 이렇게 나타낼 수 있다.
/*
55~59번 줄을 좀더 줄이면 이렇게 표현할 수 있다.
const playerMaker3 = (name : string) : Player=>({name});
*/
const Baba = playerMaker2("Baba");
Baba.age = 10;

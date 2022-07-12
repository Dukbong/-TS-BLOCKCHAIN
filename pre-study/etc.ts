
// ⭐ Call Signatures ⭐ //
const add = (a: number, b:number) => a+b;

type Add = (a: number, b: number) => number; // <--Call Signatures
const add2: Add = (a, b) => a+b;


// ⭐ Overloading ⭐ //
// 여러개의 Call signatures를 가진 것

type Add2 = {
    (a: number, b: number) : number,
    (a: number, b: string) : number,
}

const add3: Add2 = (a, b) => {
    if(typeof b === "string"){
        return a;
    }
    return a + b;
};

type Add3 = {
    (a: number, b: number, c: number) : number,
    (a: number, b: number) : number,
}

const add4: Add3 = (a, b, c?: number) => {
    // Call signatures를 보면 지금 a,b,c 와 a,b 이렇게 갯수가 다른걸 알수 있다.
    // 함수에서 3개의 변수를 받아오기 떄문에 Call signatures에서 a, b, c를 가져오게되는데
    // 지금 리턴 값은 a + b 이기 때문에
    // c가 숫자인지 아닌지 타입을 따로 지정해주어야한다.
    return a + b;
}
console.log(add4(1,2));
console.log(add4(1,2,3));
// 모두 잘 작동하는 걸 볼 수 있다.


// ⭐ Polymorphism (다형성) ⭐ // 

type SuperPrint = {
    <T>(arr: T[]): void,
    // <T>는 T는 Generic의 변수명이다.
    // Generic은 html의 placeholder로 생각하면 이해가 쉽다.
    // <T> Call signature 이 구조는 Call signature가 Generic을 받는다걸 알려주는거다.
    // ⭐언제 사용하냐? 타입을 모를때 타입을 유추하기 위해 사용된다.

    // (arr: boolean[]): void, 🤯 BAD CODE...
    // (arr: string[]): void, 🤯 BAD CODE...
    // (arr: (number|boolean)[]): void, 🤯 BAD CODE...
}

const superPrint : SuperPrint = (arr)=>{
    arr.forEach((v)=>console.log(v));
}

superPrint([1,2,3,4,5]);
superPrint([true,false,false,true]);
superPrint(["a","b","c","d"]);
superPrint([1,2,false,true]);
superPrint([1,2,false,true,"text"]);

//--------------------------------------------

type SuperPrint2 = {
    <T>(arr: T[]): T
}

const superPrint2 : SuperPrint2 = (arr)=>{
    return arr[0];
}

const a1 = superPrint2([1,2,3,4,5]);
const b1 = superPrint2([true,false,false,true]);
const c1 = superPrint2(["a","b","c","d"]);
const d1 = superPrint2([1,2,false,true]);
const e1 = superPrint2([1,2,false,true,"text"]);


type SuperPrint3 = {
    <T, M>(a: T[], b: M): T
    // Generic을 이런식으로 2개도 가져올 수 있다.
}

const superPrint3 : SuperPrint3 = (arr)=>{
    return arr[0];
}

const a3 = superPrint3([1,2,3,4,5],"");
const b3 = superPrint3([true,false,false,true],1);
const c3 = superPrint3(["a","b","c","d"],true);
const d3 = superPrint3([1,2,false,true],[1,2]);
const e3 = superPrint3([1,2,false,true,"text"],"hello");

// ⭐ Conclusions 

function superPrint4<V>(a: V[]){
    return a[0];
}

const a4 = superPrint4([1,2,3,4,5]);
// 아래 코드를 확인해보면 😒 overwrite(덮어쓰기)가 가능하다.
// const b4 = superPrint4<boolean>([1,2,3,4,5]); // 🤯 이제 타입이 모두 boolean으로 변경되었다.


type player<E> = {
    name: string,
    extraInfo: E
}

type jamExtra = {
    favFood: string,
}

type jamPlayer = player<jamExtra>
// 113번~115번 안쓰고 사용하는 방법
// type jamPlayer = player<{favFood: string}>

const jam: jamPlayer = {
    name : "jam",
    extraInfo:{
        favFood:"kimchi",
    },
}

const lynn: player<null> = {
    name : "lynn",
    extraInfo : null
}



type arrNumbers = Array<number>
let arrNumber: arrNumbers = [1,2,3,4];



function printAllNumbers(arr: Array<number>):number{
    return arr[0];
}
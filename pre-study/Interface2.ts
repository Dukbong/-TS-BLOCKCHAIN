abstract class User4{ // 추상클래스 만들기
    constructor(
        protected firstName: string,
        protected lastName: string,
    ){}
    abstract sayHi(name: string):string;
    abstract fullName():string;
}

class Player5 extends User4{
    fullName(){
        return `${this.firstName}${this.lastName}`;
    }
    sayHi(name: string) {
        return `Hello~ ${name}. My name is ${this.fullName()}`;
    }
}

// 위 코드는 추상클래스를 이용해 만든것이고 아래는 위 코드를 interface로 바꾼 코드이다.

interface User5{
    firstName: string,
    lastName : string,
    sayHi(name:string):string,
    fullName():string,
}

interface Human{
    health: number,
}

class Player6 implements User5, Human{
// ⭐ implements는 extends와 같이 상속을 받을 수있게 해주는 기능이있다.
// 근데 왜 implements를 썼냐?
// >> implements는 typescript에만 있기 때문에 js로 변환시 코드가 가벼워진다.
    constructor(
        public firstName: string,
        public lastName : string,
        public health: number,
        // public만 가능하다.
    ){}
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name: string) {
        return `hello~ ${name}. My name is ${this.fullName()}`;
    }
}


// ⭐ Recap

type Player7 = {
    name: string,
}
type Player77 = Player7 & {
    lastName: string,
}
const PlayerA: Player77 = {
    name : "Jam",
    lastName : "Son",
}
///////////////////////////////////
interface Player8 {
    name: string,
}
interface Player88 extends Player8{
    lastName: string,
}
interface Player88{ // type에서는 안되는 변수 중복하면서 interface 합치기
    health: number,
}
const PlayerB: Player88 = {
    name : "Tom",
    lastName : "Ho",
    health : 100,
}

//===========================================================
// interface가 하는 것중에 상속, 같은 변수 사용 뺴곤 type도 다 할 수 있다.
type PlayerC = {
    firstName: string,
}
interface PlayerD{
    firstName: string,
}

class User6 implements PlayerC{
    constructor(
        public firstName: string,
    ){}
}
class User7 implements PlayerD{
    constructor(
        public firstName: string,
    ){}
}
class Player1 {
    constructor(
        private firstName: string,
        private lastName: string, 
        public nickname: string,
    ){}
}

const jam1 = new Player1("jam", "sung","jj");
// jam1.firstName; 🤯 Error!!
// Property 'firstName' is private and only accessible within class 'Player1'.
// private 형식이기 때문에 외부에서 가져올 수 없다.
jam1.nickname; // public 형식이기 때문에 내외부에서 자유롭게 쓸 수 있다.


// ⭐⭐ 추상 클래스 ⭐⭐
// 추상 클래스는 오직 class에만 extends 되며
// 외부에서 new 추상 클래스를 하지 못한다.
abstract class User { // <-- 추상 클래스
    constructor(
        private firstName: string,
        private lastName: string,
        public nickName: string,
    ){}
}

class Player2 extends User{}

const jam2 = new Player1("JAM", "SUNG","JJ");
// new User를 하면 오류가 발생한다. 이유는 10~12번 줄 참고


abstract class User1 { // <-- 추상 클래스
    constructor(
        private firstName: string,
        private lastName: string,
        public nickName: string,
    ){}
    getFullName(){
        return `${this.firstName} - ${this.lastName}`;
    }
}

class Player3 extends User1{}

const jam3 = new Player3("Aja", "Asu","AJJ");
jam3.getFullName();


// 추상클래스 안에 있는 추상클래스
abstract class User2 { // <-- 추상 클래스
    constructor(
        protected firstName: string,
        protected lastName: string,
        protected nickName: string,
    ){}
    abstract getNickName(a: string):void

    getFullName(){
        return `${this.firstName} - ${this.lastName}`;
    }
}

class Player4 extends User2{
    getNickName() {
        console.log(this.nickName);
    }
}

const Mo = new Player4("jjj","oooo","ㅁㅁㅁㅁ");
Mo.getFullName();
// Mo.firstName; // 🤯 Error!! 현재 protected 형식이기 때문에 외부에서 참조할 수 없다.



// ⭐ Recap (요약)

type Words = {
    [key:string]: string,
    /*
    {
        key(type: string) : value(type: string)
    }
    */
}
let example: Words = {
    'potato':'food',
}


class Dict {
    private words: Words;
    constructor(){
        this.words = {};
    }
    add(word:Word){
        if(this.words[this.words.term] === undefined){
            this.words[word.term] = word.def;
        }
    }
    def(term: string){
        return this.words[term];
    }
}

class Word{
    constructor(
        public term: string,
        public def : string,
    ){}
}

const kimchi = new Word("kimchi", "한국음식");
const dict = new Dict();
dict.add(kimchi);
dict.def("kimchi")
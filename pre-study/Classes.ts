class Player1 {
    constructor(
        private firstName: string,
        private lastName: string, 
        public nickname: string,
    ){}
}

const jam1 = new Player1("jam", "sung","jj");
// jam1.firstName; π€― Error!!
// Property 'firstName' is private and only accessible within class 'Player1'.
// private νμμ΄κΈ° λλ¬Έμ μΈλΆμμ κ°μ Έμ¬ μ μλ€.
jam1.nickname; // public νμμ΄κΈ° λλ¬Έμ λ΄μΈλΆμμ μμ λ‘­κ² μΈ μ μλ€.


// β­β­ μΆμ ν΄λμ€ β­β­
// μΆμ ν΄λμ€λ μ€μ§ classμλ§ extends λλ©°
// μΈλΆμμ new μΆμ ν΄λμ€λ₯Ό νμ§ λͺ»νλ€.
//      -ex) new User() <-- Error!
abstract class User { // <-- μΆμ ν΄λμ€
    constructor(
        private firstName: string,
        private lastName: string,
        public nickName: string,
    ){}
}

class Player2 extends User{}

const jam2 = new Player1("JAM", "SUNG","JJ");
// new Userλ₯Ό νλ©΄ μ€λ₯κ° λ°μνλ€. μ΄μ λ 10~12λ² μ€ μ°Έκ³ 


abstract class User1 { // <-- μΆμ ν΄λμ€
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


// μΆμν΄λμ€ μμ μλ μΆμν΄λμ€
abstract class User2 { // <-- μΆμ ν΄λμ€
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

const Mo = new Player4("jjj","oooo","γγγγ");
Mo.getFullName();
// Mo.firstName; // π€― Error!! νμ¬ protected νμμ΄κΈ° λλ¬Έμ μΈλΆμμ μ°Έμ‘°ν  μ μλ€.



// β­ Recap (μμ½)

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

const kimchi = new Word("kimchi", "νκ΅­μμ");
const dict = new Dict();
dict.add(kimchi);
dict.def("kimchi")
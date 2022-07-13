type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10
type N = string;

interface Players {
  nickname: string,
  team: Team,
  health: Health,
}

const aa: Players = {
  nickname: "Jam",
  team: "red",
  health: 5,
}
/*
⭐ interface는 오브젝트 형태를 유지 시켜주는 기능만 있다.

Typescript에서 오브젝트의 모양을 알려주는 방법엔 2가지가 있다.

1)
type a = {
  nickname: string,
}

2)
interface a{
  nickname: string,
}



type과 interface를 비교하면 
공통점은 오브젝트 모양을 알려줄수 있다.
차이점은 type이 interface에 비해 좀더 활용할 수 있는게 많다.
        type은 오브젝트가 아니여도 사용가능하지만 interface의 경우 오브젝트만 가능하다.
          - type EX = string; (가능)
          - interface EX = string (🤯Error!!)
        interface와 type 모두 상속받을 수 있지만 형태가 다르다.

        1) interface로 상속받기
        ⭐ class에서 상속받듯이 하면 가능하다.
        interface User{
          name : string,
        }
        interface Player extends User{       
        }
        const jam: Player = {
          name : "jam"
        }
        
        2) type으로 상속받기
        type User = {
          name : string,
        }
        type Player = User & {
        
        }
        const jam: Player = {
          name : "jam"
        }
*/          

interface User3 {
  name: string,
}

interface User3{
  lastName: string,
}

interface User3{
  health: number,
}

const aaaa: User3 = {
  name: "Jam",
  lastName: "a",
  health: 123,
} 

// 같은 이름의 interface를 만들면 Typescript에서 자동으로 하나로 뭉친다.
// 하지만 type은 자동으로 하나로 뭉쳐주지 않으며 같은 변수명을 사용할 수 없다.
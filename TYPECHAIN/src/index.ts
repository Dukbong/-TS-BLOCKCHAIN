// import {init, exit} from "./myPackage";
// // 그냥 이렇게 import 하면
// // tsconfig에서 정의한 "strict": true로 인해 보호되서 오류가 발생한다.
// // 해결 방법은 myPackage.d.ts라는 파일을 만들어준 후 모듈 선언을 해줘야 한다.

// init({
//     debug:true,
//     url:"jam",
// })
import crypto from "crypto";

interface BlockShape{
    hash: string,
    prevHash: string,
    height: number,
    data: string,
}

class Block implements BlockShape{
    public hash: string
    constructor(
        public prevHash: string,
        public height: number,
        public data: string,
    ){
        this.hash = calculateHash(prevHash, height, data);
    }
    static calculateHash (prevHash: string, height: NumberConstructor, data: string){
        const toHash = `${prevHash}${height}${data}`;
    }
}
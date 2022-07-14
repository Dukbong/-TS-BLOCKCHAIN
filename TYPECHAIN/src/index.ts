// import {init, exit} from "./myPackage";
// // 그냥 이렇게 import 하면
// // tsconfig에서 정의한 "strict": true로 인해 보호되서 오류가 발생한다.
// // 해결 방법은 myPackage.d.ts라는 파일을 만들어준 후 모듈 선언을 해줘야 한다.

// init({
//     debug:true,
//     url:"jam",
// })
import crypto from "crypto";
// 외부 라이브러리가 인식을 못할때 npm i -D @types/node를 설치한다.

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
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash (prevHash: string, height: number, data: string){
        const toHash = `${prevHash}${height}${data}`;
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}

class Blockchain{
    public blocks:Block[];
    constructor(){
        this.blocks = [];
    }
    
    private getPrevHash(){
        if(this.blocks.length === 0){
            return "";
        }
        return this.blocks[this.blocks.length - 1].hash;
    }

    public addBlock(data: string){
        const newBlock = new Block(this.getPrevHash(),this.blocks.length + 1,data);
        this.blocks.push(newBlock);
    }

    public getBlocks(){
        return [...this.blocks];
    }
}

let blockchain = new Blockchain();
blockchain.addBlock("One");
blockchain.addBlock("Two");
console.log(blockchain);
// 입출금 블록체인
interface BlockShape2 {
    prevHash: string,
    sender: string,
    recipient: string,
    time: number,
    money: number,
    hash: string,
  }
  
  class Block2 implements BlockShape2{
    public hash: string;
    constructor(
      public prevHash: string,
      public sender: string,
      public recipient: string,
      public time: number,
      public money: number,
    ){
      this.hash = Block2.hashMake(prevHash, sender, recipient, time, money);
    }
    static hashMake(prevHash:string, sender:string, recipient:string, time:number, money:number){
      const toHash = `${prevHash}${sender}${recipient}${money}${time}`;
      return toHash;
    }
  }
  
  class Blockchain2{
    private blocks:Block2[];
    constructor(){
      this.blocks = [];
    }
      private getPrevHash(){
        if(this.blocks.length === 0) return "";
        return this.blocks[this.blocks.length - 1].hash;
      }
  
      public addBlock(sender:string, recipient:string, money:number){
        const newBlock = new Block2(this.getPrevHash(),sender, recipient, new Date().getTime(), money);
        this.blocks.push(newBlock);
      }
  
      public getBlocks(){
        return this.blocks;
      }
  }
abstract class Star {
  abstract answerPhone(): void;
}
class Angelababy extends Star {
  public available: boolean = true;
  answerPhone(): void {
    console.log("你好，我是Angelababy");
  }
}
class AngelababyAgent extends Star {
  constructor(private angelababy: Angelababy) {
    super();
  }
  answerPhone(): void {
    console.log("你好，我是Angelababy的经纪人");
      if (this.angelababy.available) {
          this.angelababy.answerPhone();
      } else {
          console.log('很抱歉,Angelababy没有空');
      }
  }
}
let angelababyAgent = new AngelababyAgent(new Angelababy());
angelababyAgent.answerPhone();

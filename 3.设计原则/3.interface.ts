interface Person {
    firstName: string,
    lastName:string
}
interface Fly {
    swing: number
}
function greeting(obj:Person) {
    console.log(obj.firstName + obj.lastName);
    
}
let p = { firstName: '张',lastName:'三' };
greeting(p);

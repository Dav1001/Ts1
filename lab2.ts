let myFoo1:(a:number, b:number)=> string;

function foo1(a: number, b: number):string{
    let x:number = 10;
    x+= a;
    x+= b;
    let s:string = '11';
    return x+s;
}
myFoo1 = foo1;


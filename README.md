# typechain
2022.7.14 TypeScript Study


TypeScript


1. 안정성 

타입의 안정성으로 버그를 줄여줌

- JS는 유연한 언어이다 true, false , boolean , array , number , string 등
- 에러 검출이 힘듬

<기본 문법>

let age: number = 30;
let isAdult:boolean = true;
let a: number[] = [1,2,3];
let a2:Array<number> = [1,2,3];

let week1 : string[] = ["mon","tue","wed"];
let week2:Array<string> = ["mon","tue","wed"];

week1.push()

<튜플>

let b: [string,number] ; 

b = ["z",1]
// b = [1,"z"]

b[0].toLowerCase();
// b[1].toLowerCase();


<void , never>

void : 함수를 아무것도 반환하지 않을때 사용


function Hello():void{
    console.log("hello");
}


never : 에러를 발생하거나 영원한 루프 함수 호출시 사용

function showError():never{
    throw new Error();
}

function infLoop():never{
    while(true){
        //do something
    }
}

<enum>

enum : 비슷한 값들끼리 묶어줄 때 임의의 값을 순차적으로 할당해줌 

enum Os {
    window = 3,
    Ios = 10,
    Android
}

<Null,Undefined>

let a:null = null;
let b:undefined = undefined;


<Interface> : 객체형 

type Score = "A" | "B" | "C" | "D" ;

interface User {
    name: string;
    age : number;
    gender? : string;

=> ?는 선언한 키가 존재하면 string 객체 타입을 지정함

    readonly birthYear : number;

=> readonly 함수는 지정하면 수정이 불가능하게 지정

    [grade:number] : Score;
}

let user : User = {
    name :"xx",
    age : 30,
    birthYear: 2000,
    1: "A",
    2: "B",
    3: "C",
    4: "D",
}

user.age = 10;

user.gender = "male"

console.log(user.age);

———————————————————

interface Add {
    (num1:number, num2:number) :number;
}

const add : Add = function (x,y){
    return x+y
}

add(10,20);


interface IsAdult {
    (age:number) : boolean;
}

const a : IsAdult = (age) =>{
    return age> 19;
}

a(33) // true



<implements>

interface Car {
    color:string;
    wheels:number;
    start():void;
}

interface Benz extends Car {
    door : number;
    stop() : void;
}

const benz : Benz = {
    door:5,
    stop(){
        console.log("stop")
    },
    color:"black",
    wheels:4,
    start(){
        console.log("gogogo.....")
    }
}

class Bmw implements Car {

    color;
    wheels = 4;

    constructor (c:string){
        this.color = c;
    }

    start(){
        console.log("go....")
    }
}

const b = new Bmw("green");

console.log(b)
b.start


<class>

class Player {
    constructor(
        private firstname: string,
        private lastname : string
    ){}
}

📌접근 가능한 위치

구분　　　선언한 클래스 내　상속받은 클래스 내　인스턴스
private 　 　　　⭕　　　　　　　❌　　　　　❌
protected 　　　⭕　　　　　　　⭕　　　　　❌
public　　　　　⭕　　　　　　　⭕　　　　　⭕




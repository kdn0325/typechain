# Typescript Basic

---

Primitive Type : 실제 값을 저장하는 자료형

literal : 값자체가 변하지 않는 값

Boolean : true/false

Number : 숫자

String : 문자

Template String : 행에 걸쳐 있거나 표현식을 넣을 수 있는 문자열

Undefined & Null : 고유값

*Void : 타입이 없는 상태 , 주로 함수의 리턴이 없을 때 사용

*Any : 어떤 타입이어도 상관없는 타입 , 최대한 쓰지 않는게 핵심 

Never : 리턴에 주로 사용 (자주 안쓰임)

Array : 배열 객체

*Tuple : 배열인데 타입이 한가지가 아닌 경우 (객체임) 

*Enum : 비슷한 값들끼리 묶어줄 때 임의의 값을 순차적으로 할당해줌 ⇒ Enum 원소의 결과값은 string

*Symbol : 고유하고 수정 불가능한 값으로 만듬

# Type Assertion

---

형 변환과 다름 

‘타입이 이것이다'라고 컴파일러에게 알려주는 것을 의미함

- 변수 as 강제할 타입 (주로사용)
- <강제할 타입> 변수

# Type Alias

---

타입 별칭을 지어줌

# Interface

---

### class implements interface

```tsx
interface IPerson {
    name:string;
    hello():void;
}

class Person implements IPerson{
    name: string

    constructor(name:string){
        this.name = name
    }
    hello():void{
        console.log(`hello ${this.name} 입니다`)
    }
    public hi(): void {
        console.log(`ㅎㅈ ${this.name} 입니다`)
    }
}

const person : IPerson = new Person("Mark")

person.hi()
```

### interface extends interface

```tsx
interface Person {
    name:string;
    age?:number;
}

interface Korean extends Person{
    city : string;
}

// Person interface를 상속 받고 Korean interface에 city의 타입 추가 

const k : Korean = {
    name: 'Kdn',
    city: 'Seoul'
};
```

### function interface

```tsx
interface HelloPerson {
    (name:string , age?: number): void;
}

let helloPerson: HelloPerson = function (name:string){
    console.log(name)
}

helloPerson("Mark")

//함수의 타입 체크는 할당할때가 아니라 사용할때 합니다
```

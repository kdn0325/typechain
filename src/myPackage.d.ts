interface Config{
    url: string
}

/* 타입 지정 */
declare module "myPackage"{
    function init(config:Config) : boolean;
    function exit(code:number) : number;
}
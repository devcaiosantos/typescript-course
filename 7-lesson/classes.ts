class UserAccount{
    public name: string;
    protected age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    logDetails():void{
        console.log(`The player ${this.name} is ${this.age} years old`);
    }
}

class CharAccount extends UserAccount{
    private nickname: string;
    private level: number;

    constructor(name: string, age: number, nickname: string, level: number){
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }

    logCharDetails():void{
        console.log(`The player ${this.name} is ${this.age} and has a char ${this.nickname} at the level ${this.level}`);
    }

    get getLevel():number{
        console.log('----------- GET ----------------');
        return this.level;
    }
    set setLevel(level: number){
        console.log('----------- SET ----------------');
        this.level = level;
    }
}


const caio = new UserAccount("Caio", 20);

const sircaio = new CharAccount("Caio", 20, "SirCaio21", 21);
// sircaio.nickname = "SirCaio"; //Error pois é privado, não pode ser alterado e nem lido fora da classe
// sircaio.level = 22; //Error pois é readonly, não pode ser alterado fora da classe
// console.log(sircaio.age) // Error pois é protected, não pode ser lido ou editado fora da classe ou de suas classes filhos

console.log(sircaio.getLevel)
sircaio.setLevel = 22;

sircaio.logDetails();
sircaio.logCharDetails();

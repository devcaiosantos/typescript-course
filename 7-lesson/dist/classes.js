"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} is ${this.age} years old`);
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    logCharDetails() {
        console.log(`The player ${this.name} is ${this.age} and has a char ${this.nickname} at the level ${this.level}`);
    }
    get getLevel() {
        console.log('----------- GET ----------------');
        return this.level;
    }
    set setLevel(level) {
        console.log('----------- SET ----------------');
        this.level = level;
    }
}
const caio = new UserAccount("Caio", 20);
const sircaio = new CharAccount("Caio", 20, "SirCaio21", 21);
// sircaio.nickname = "SirCaio"; //Error pois é privado, não pode ser alterado e nem lido fora da classe
// sircaio.level = 22; //Error pois é readonly, não pode ser alterado fora da classe
// console.log(sircaio.age) // Error pois é protected, não pode ser lido ou editado fora da classe ou de suas classes filhos
console.log(sircaio.getLevel);
sircaio.setLevel = 22;
sircaio.logDetails();
sircaio.logCharDetails();

"use strict";
const tlou = {
    title: 'The Last of Us',
    description: 'A survival horror game',
    genre: 'Survival Horror',
    //platform: ['PS3', 'PS4'], // É opcional, não é obrigatório
    getSimilars: (title) => {
        console.log(`Similar games to ${title}: Uncharted, Uncharted, A Plague Tale, Matro`);
    }
};
if (tlou.getSimilars)
    tlou.getSimilars(tlou.title);
const leftbehind = {
    title: 'The Last of Us Part - Left Behind',
    description: 'You play as Ellie before the original game',
    genre: 'Survival Horror',
    platform: ['PS4'],
    originalGame: tlou,
    newContent: ['3 hours story', 'new characters']
};
class CreateGame {
    constructor(title, description, genre) {
        this.title = title;
        this.description = description;
        this.genre = genre;
    }
}

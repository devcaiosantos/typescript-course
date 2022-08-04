interface Game{
    title: string;
    description: string;
    readonly genre: string;
    platform?: string[];
    getSimilars?: (title: string) => void;
}

const tlou: Game = {
    title: 'The Last of Us',
    description: 'A survival horror game',
    genre: 'Survival Horror',
    //platform: ['PS3', 'PS4'], // É opcional, não é obrigatório
    getSimilars: (title: string)=>{
        console.log(`Similar games to ${title}: Uncharted, Uncharted, A Plague Tale, Matro`);
    }
}

if(tlou.getSimilars)tlou.getSimilars(tlou.title);
// tlou.genre = 'Action'; // Error: Cannot assign to 'genre' because it is a read-only property.

interface DLC extends Game{
    originalGame: Game;
    newContent: string[];

}
const leftbehind: DLC = {
    title: 'The Last of Us Part - Left Behind',
    description:'You play as Ellie before the original game',
    genre: 'Survival Horror',
    platform: ['PS4'],
    originalGame: tlou,
    newContent: ['3 hours story', 'new characters']
}

class CreateGame implements Game{
    title: string;
    description: string;
    genre: string;
    platform?: string[];
    getSimilars?: (title: string) => void;
    constructor(title: string, description: string, genre: string){
        this.title = title;
        this.description = description;
        this.genre = genre;
    } 
}
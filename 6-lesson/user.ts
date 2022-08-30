// accountInfo
// charInfo

type AccountInfo = {
    id: number;
    name: string;
    email?: string;
}   

const account: AccountInfo = {
    id: 1,
    name: 'Caio',
    email: 'caio@gmail.com',
}

type CharInfo = {
    nickname: string;
    level: number;
}

const char: CharInfo = {
    nickname: 'SirCaio21',
    level: 21,
}

// Intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    id: 1,
    name: 'Caio',
    email:  'caio@gmail.com',
    nickname: 'SirCaio21',
    level: 21
}

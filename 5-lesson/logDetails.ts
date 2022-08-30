// type alias (atalho)
type Uid = number | string;

function logDetails(uid: Uid, item: string){
    console.log(`A product with ${uid} has a title as ${item}`);
}

function logInfo(uid: Uid, user: string){
    console.log(`An user with ${uid} has a name as ${user}`);
}


type Plataform = 'Windows' | 'Linux' | 'MacOS';

function renderPlataform(plataform: Plataform){
    return plataform;
}

renderPlataform('Windows');
// renderPlataform('IOS'); // error

logDetails(1, 'foo');
logDetails("1", 'foo');

logInfo(1, 'Caio');
logInfo("1", 'Caio');
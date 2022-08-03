//boolean
let isOpen: boolean;
isOpen = true;

// string ('foo',"foo", `foo` )
let message: string;
message = 'foo' || "foo" ||  `foo`

// number (int, float, hex, binary)
let total: number;
total = 0xFF;

// array (type[])
let items: string[];
items = ['foo', 'bar'];

let values: Array<number>;
values = [1, 2, 3];

//tuple:  Array com tamanho fixo e tipos também fixos.
let title: [number, string, string];
title = [1, 'foo', 'bar'];

//enum: conjunto de chave-valor
enum Colors {
    white = "#ffffff",
    black = "#000000",
    red = "#ff0000",
    blue = "#0000ff",
    yellow = "#ffff00"
};

//any: qualquer tipo (Não é recomendado)
let coisa: any;
coisa = true;
coisa = 'foo';
coisa = [];

//VOID (não retorna nenhum valor, VAZIO)
function logger(): void {
    console.log('foo');
}

//null e undefined
type xx = string | undefined 
type yy = string | null 

//never: Nunca tem um retorno
function error(message: string): never {
    throw new Error(message);
}

//object: qualquer tipo de objeto, qualquer coisa que não seja um tipo primitivo(number, string, boolean, array)
let cart: object;
cart = {
    key: 'value'
}
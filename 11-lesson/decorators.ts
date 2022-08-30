//@Component
//@Selector
//@useState('dasdas')

//Factory 
// function logger(prefix:string){
//     return (target:any)=>{
//         console.log(prefix+" "+target)
//     }

// }

// @logger('awesome')
// class Foo {}

// Class decorator

function setAPIVersion(apiVersion: string){
    return (constructor:any)=>{
        return class extends constructor{
            version = apiVersion
        }
    }

}
//decorator  - anotar a versão da API
@setAPIVersion('1.0.0')
class API {}

// Property decorator

function minLength(length:number){
    return (target:any, key: string)=>{
        let val = target[key]
        const getter = ()=> val;
        const setter = (value: string)=>{
            if(value.length < length){
                console.log(`${key} must be at least ${length} characters long`)
            }else{
                val = value
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}

class Movie {
    // validação - se for menor que 5 caracteres, retorna erro
    @minLength(5)
    title: string;
    constructor(t: string){
        this.title = t;
    }
}

const movie = new Movie('The Matrix');

// Method decorator

function delay(ms:number){
    return (target:any, key: string, descriptor: PropertyDescriptor)=>{
        const originalMethod = descriptor.value;
        descriptor.value = function(...args:any[]){
            console.log("Esperando "+ms+"ms para executar a função")
            setTimeout(()=>{
                originalMethod.apply(this, args)
            } , ms)
        }
    }

}

class Greeter{
    greeting: string;
    constructor(g: string){
        this.greeting = g;
    }
    // Espera um tempo e aí vai rodar o método (ms)
    @delay(1000)
    greet(){
        console.log("Hello, " + this.greeting);
    }
}

const joao = new Greeter('João');
joao.greet();

// Parameter decorator
// Accessor decorator
// S=> state
// T=> type
// K=> key
// V=> value
// E=> element

type numOrStr = number | string

function useState<S extends numOrStr = number>(){ // Por padrão é do tipo number
    let state: S

    function getState(){
        return state
    }

    function setState(newState:S){
        state = newState
    }
    return {getState, setState};
}

const newState = useState<string>(); //define o tipo do state como string

const newState2 = useState(); //define o tipo do state como number, pois é o padrão


newState.setState("foo");
console.log(newState.getState());

// newState.setState(123);
// console.log(newState.getState()); // Error: Argument of type '123' is not assignable to parameter of type 'string'.

newState2.setState(123);
console.log(newState2.getState());


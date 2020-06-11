// boolean 
const bool : boolean = true;

// number
const num : number = 50;

// string
const str: string = 'helloooo';

// tuple -> can be used for maintaining ordered lists
let basket: [string, number];
basket = ['Cake', 1];

// objects
let car: object;
car = {
    engine: '1hp',
    price: 2,
};

// enum
enum Size {
    Small = 1,
    Medium = 2,
    Large = 3,
};


// void
let noReturn = (): void => {
    console.log('only console log')
}

// never -> if a function have unreachable endpoint or does not return anything
let err = (): never => {
    throw Error('i am error');
}
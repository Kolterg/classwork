// 1
// Взять слдующий массив:

const cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів.

let carsMore3 = cars.filter(car => car.volume > 3);

// - двигун = 2л.

let carsMore2 = cars.filter(car => car.volume === 2);

// - виробник мерс.

let carsMers = cars.filter(car => car.producer === 'mercedes');

// - двигун більше 3х літрів + виробник мерседес.

let carsMore3Merc = cars.filter(car => car.volume > 3 && car.producer === 'mercedes');

// - двигун більше 3х літрів + виробник субару.

let carsMore3Sub = cars.filter(car => car.volume > 3 && car.producer === 'subaru');

// - сили більше ніж 300.

let carsPower = cars.filter(car => car.power > 300);

// - сили більше ніж 300 + виробник субару.

let carsPowerSub = cars.filter(car => car.power > 300 && car.producer === 'subaru');

// - мотор серіі ej.

let carsEj = cars.filter(car => car.engine.startsWith('ej'));

// - сили більше ніж 300 + виробник субару + мотор серіі ej.

let carsMore3SubEj = cars.filter(car => car.volume > 3 && car.producer === 'subaru' && car.engine.startsWith('ej'));

// - двигун меньше 3х літрів + виробник мерседес.

let carsLess3Merc = cars.filter(car => car.volume < 3 && car.producer === 'mercedes');

// - двигун більше 2л + сили більше 250.

let carsMore2Power = cars.filter(car => car.volume > 2 && car.power > 250);

// - сили більше 250  + виробник бмв.

let carsPowerBmw = cars.filter(car => car.power > 250 && car.producer === 'bmw');

// 2
// Взять слдующий массив.

const usersWithAddress = [
   {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
   {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
   {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
   {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
   {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
   {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
   {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
   {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
   {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
   {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
   {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

// -- Відсортувати їх по ID.

let usersSortId1 = usersWithAddress.sort((a, b) => a.id - b.id);

// -- Відсортувати їх по ID в зворотньому порядку.

let usersSortId2 = usersWithAddress.sort((a, b) => b.id - a.id);

// -- Відсортувати по віку.

let usersSortAge1 = usersWithAddress.sort((a, b) => a.age - b.age);

// -- Відсортувати по віку в зворотньому порядку.

let usersSortAge2 = usersWithAddress.sort((a, b) => b.age - a.age);

// -- Відсорутвати по імені.

let usersSortName = usersWithAddress.sort(function(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
});

// -- Відсорутвати по назві вулиці.

let usersSortStreet = usersWithAddress.sort(function (a, b) {
    if (a.address.street < b.address.street) {
        return -1;
    }
    if (a.address.street > b.address.street) {
        return 1;
    }
    return 0;
})

// -- Відсорутвати по номеру будинку.

let usersSortNum = usersWithAddress.sort((a, b) => a.address.number - b.address.number);

// -- Залишити тільки тих, хто молодший ніж 30 (filter).

let usersYounger30 = usersWithAddress.filter(user => user.age < 30);

// -- Залишити тільки одружених.

let usersMarried = usersWithAddress.filter(user => user.isMarried);

// -- Залишити тільки одружених, які молодні за 30.

let usersMarriedYounger30 = usersWithAddress.filter(user => user.isMarried && user.age < 30);

// -- Залишити лише тих, в кого парні номери будинків.

let usersNum2 = usersWithAddress.filter(user => user.address.number % 2 === 0);

// -- Порахувати загальний вік всіх людей. (reduce).

let usersAgeSum = usersWithAddress.reduce((previousValue, currentValue) => {
    if (previousValue.age) {
        return previousValue.age + currentValue.age;
    }
    return previousValue + currentValue.age;
});

// -- Ті, хто одружений і старший за 30 має отримати обєкти child і попасти в новий масив (reduce).

let arr = [];
let usersWithChild = usersWithAddress.reduce((previousValue, currentValue) => {
    if (previousValue.isMarried && previousValue.age > 30) {
        previousValue.child = [{name: 'Sem'}, {name: 'Elis'}];
        arr.push(previousValue);
    }
    if (currentValue.isMarried && currentValue.age > 30) {
        previousValue.child = [{name: 'Hant'}, {name: 'Kessi'}];
        arr.push(currentValue);
    }
    return arr;
});


// 1
// Створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

function funcMinMax() {
    let minNum = arguments[0];
    let maxNum = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxNum) {maxNum = arguments[i]}
        if (arguments[i] < minNum) {minNum = arguments[i]}
    }
    console.log(`Максимальне ${maxNum}`);
    return minNum;
}

// console.log(`Мінімальне ${funcMinMax(23, 43, 543, 231, 43, 23, 123, 123421, 321)}`);

// 2
// Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
// Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

// 9. Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів.
// 10. Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів.

let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function keysOrValues(arr) {
    let keys = [];
    let values = [];
    let some = prompt('Keys or Values');
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        if (some === 'Keys') {
            let keyArr = Object.keys(arrElement);
            for (let j = 0; j < keyArr.length; j++) {
                const keyArrElement = keyArr[j];
                keys.push(keyArrElement);
            }
            return keys;
        }
        if (some === 'Values') {
            let valueArr = Object.values(arrElement);
            for (let j = 0; j < valueArr.length; j++) {
                const valueArrElement = valueArr[j];
                values.push(valueArrElement);
            }
            return values;
        }
        console.log('Uncorect');
    }
}

// console.log(keysOrValues(arr));

// 3
// Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1".

let arr1 = [1,2,3,4,5,6];
let i = 2;

function swap(arr, i) {
    let el1 = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = el1;
    return arr;
}

// console.log(swap(arr1, i));

// 4
// Створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100.

let arr2 = [21,33,12,0,2,3,0,11,23,43];

function zeroToEnd(arr) {
    let len = arr.length;
    for (let j = 0; j < len; j++) {
        if (arr[j] === 0) {
            arr.splice(j,1);
            arr.push(0);
        }
    }
    return arr;
}

// console.log(zeroToEnd(arr2));

// 5
// Дано список імен.
let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

function normName(name) {
    name = name.trim();
    for (let j = 0; j < name.length; j++) {
        if (name[j] === ' ' && name[j + 1] === ' ') {
            name = name.replace(' ','');
            j = 0;
        }

    }
    return name;
}

// console.log(normName(n3));

// ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :

// 1
// Додає в боді блок з текстом "Hello owu".

let blockHello = () => {
    const divHello = document.createElement('div');
    divHello.innerText = 'Hello owu';
    document.body.appendChild(divHello);
}

blockHello();

// 2
// Додає в боді елемент з текстом. Тип елементу та текст отримати через аргументи.

function newEl(type, text) {
    const element = document.createElement(`${type}`);
    element.innerHTML = `${text}`;
    document.body.appendChild(element);
}

let type = 'h1';
let text = 'Hello world';

newEl(type, text);

// 3
// Приймає масив автомобілів (можна взяти з попередніх дз),
// та індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент,
// індентифікатор якого ви отримали. Всі властивості авто в одному блоці.

let cars = [
    {producer:"Subaru",model: "WRX",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"Subaru",model: "Legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"Subaru",model: "Tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"Subaru",model: "Leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"Subaru",model: "Impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"Subaru",model: "Outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"BMW",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"BMW",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"BMW",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"BMW",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"Mercedes",model: "E200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"Mercedes",model: "E63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"Mercedes",model: "C250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];
let id = document.body;

function blockOfCars(cars, id) {
    for (let j = 0; j < cars.length; j++) {
        const car = document.createElement('div');
        car.innerHTML = `${cars[j].producer} - ${cars[j].model} - ${cars[j].year}`;
        id.appendChild(car);
    }
}

blockOfCars(cars, id);

// 4
// Приймає масив автомобілів (можна взяти з попередніх дз),
// та індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок.

function blockOfCars2(cars, id) {
    for (let j = 0; j < cars.length; j++) {
        const car = document.createElement('div');
        id.appendChild(car);
        const producer = document.createElement('h3');
        producer.innerHTML = `${cars[j].producer}`;
        car.appendChild(producer);
        const model = document.createElement('div');
        model.innerHTML = `${cars[j].model}`;
        car.appendChild(model);
        const year = document.createElement('div');
        year.innerHTML = `${cars[j].year}`;
        car.appendChild(year);
        const color = document.createElement('div');
        color.innerHTML = `${cars[j].color}`;
        car.appendChild(color);
        const type = document.createElement('div');
        type.innerHTML = `${cars[j].type}`;
        car.appendChild(type);
        const engine = document.createElement('div');
        engine.innerHTML = `${cars[j].engine}`;
        car.appendChild(engine);
        const volume = document.createElement('div');
        volume.innerHTML = `${cars[j].volume}`;
        car.appendChild(volume);
        const power = document.createElement('div');
        power.innerHTML = `${cars[j].power}`;
        car.appendChild(power);
        const hr = document.createElement('div');
        hr.innerHTML = `<hr/>`;
        car.appendChild(hr);
    }
}

blockOfCars2(cars, id);
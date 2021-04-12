// 1
// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// - drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину".
// - info () - яка виводить всю інформацію про автомобіль.
// - increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed.
// - changeYear (newValue) - змінює рік випуску на значення newValue.
// - addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
//   і доавляет його в поточний об'єкт car.

function CarsFactory(model, brand, year, maxSpeed, capacity) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.capacity = capacity;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
    }

    this.info = function () {
        console.log(`Інформація про автомобіль: ${this.brand} - ${this.model} ${this.year} року, 
        максимальна швидкість ${this.maxSpeed} км/г, об'єм двигуна - ${this.capacity} л.`);
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    }

    this.changeYear = function (newValue) {
        this.year = newValue
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

// 2
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// - drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// - info () - яка виводить всю інформацію про автомобіль
// - increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// - changeYear (newValue) - змінює рік випуску на значення newValue
// - addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
//   і доавляет його в поточний об'єкт car

class Cars {
    constructor(model, brand, year, maxSpeed, capacity) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.capacity = capacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
    }

    info() {
        console.log(`Інформація про автомобіль: ${this.brand} - ${this.model} ${this.year} року, 
        максимальна швидкість ${this.maxSpeed} км/г, об'єм двигуна - ${this.capacity} л.`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let toyota = new Cars('Corola', 'Toyota', 1997, 162, 2.6);

let driver = {
    name: 'Andriy',
    age: 32,
    driverSkill: true
}

// toyota.info();
//
// toyota.increaseMaxSpeed(185);
//
// toyota.changeYear(2005);
//
// toyota.drive()
//
// toyota.info();
//
// toyota.addDriver(driver);
//
// console.log(toyota);

// 3
// - Створити класс попелюшка з полями ім'я, вік, розмір ноги.
// - Створити 10 попелюшок , покласти їх в масив.
// - Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// - за допоиоги циклу знайти яка попелюшка повинна бути з принцом.

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, slipperSize) {
        this.name = name;
        this.age = age;
        this.slipperSize = slipperSize;
    }
}

/*
let anfisa = new Cinderella('Anfisa', 18, 38);
let jeanne = new Cinderella('Jeanne', 17, 41);
let violtetta = new Cinderella('Violtetta', 32, 39);
let sabrina = new Cinderella('Sabrina', 20, 36);
let tonya = new Cinderella('Tonya', 21, 35);
let kasandra = new Cinderella('Kasandra', 27, 36);
let frina = new Cinderella('Frina', 24, 39);
let monika = new Cinderella('Monika', 22, 34);
let eleonora = new Cinderella('Eleonora', 16, 36);
let elvira = new Cinderella('Elvira', 19, 40);

let cinderellas = [anfisa, jeanne, violtetta, sabrina, tonya, kasandra, frina, monika, eleonora, elvira];

let misha = new Prince('Misha', 26, 35);
*/

/*
for (const cinderella of cinderellas) {
    if (cinderella.footSize === misha.slipperSize) {
        console.log(`Prince find his cinderella - ${cinderella.name}`);
        break;
    }
}*/

// 4
// - Створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// - Створити 10 попелюшок , покласти їх в масив.
// - Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов,
//   та функцію "пошук попелюшки".
// - Функція повинна приймати масив попелюшок, та шукає ту котра йому підходить.

function CinderellaCreator(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let anfisa = new CinderellaCreator('Anfisa', 18, 38);
let jeanne = new CinderellaCreator('Jeanne', 17, 41);
let violtetta = new CinderellaCreator('Violtetta', 32, 39);
let sabrina = new CinderellaCreator('Sabrina', 20, 36);
let tonya = new CinderellaCreator('Tonya', 21, 35);
let kasandra = new CinderellaCreator('Kasandra', 27, 36);
let frina = new CinderellaCreator('Frina', 24, 39);
let monika = new CinderellaCreator('Monika', 22, 34);
let eleonora = new CinderellaCreator('Eleonora', 16, 36);
let elvira = new CinderellaCreator('Elvira', 19, 40);

let cinderellas = [anfisa, jeanne, violtetta, sabrina, tonya, kasandra, frina, monika, eleonora, elvira];

function PrinceCreator(name, age, slipperSize) {
    this.name = name;
    this.age = age;
    this.slipperSize = slipperSize;

    this.findCinderella = function(cinderellas) {
        for (const cinderella of cinderellas) {
            if (cinderella.footSize === misha.slipperSize) {
                console.log(`Prince find his cinderella - ${cinderella.name}`);
                break;
            }
        }
    }
}

let misha = new PrinceCreator('Misha', 26, 35);

misha.findCinderella(cinderellas);
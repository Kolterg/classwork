// Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:

// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]

let usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
    let userWithCity = {id: null, name: undefined, age: null, status: undefined, address: undefined};

    userWithCity.id = usersWithId[i].id;
    userWithCity.name = usersWithId[i].name;
    userWithCity.age = usersWithId[i].age;
    userWithCity.status = usersWithId[i].status;

    for (const cityWithId of citiesWithId) {
        if (userWithCity.id === cityWithId.user_id) {
            userWithCity.address = cityWithId;
        }
    }

    usersWithCities[i] = userWithCity;
}

console.table(usersWithCities);
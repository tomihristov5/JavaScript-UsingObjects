﻿function Person(firstname, lastname, age) {
    if (isNaN(age) || !isFinite(age)) {
        throw new Error('age must be a number');
    }

    if (!(this instanceof Person)) {
        return new Person(firstname, lastname, age);
    }

    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}

Person.prototype.toString = function () {
    return this.firstname + ' ' + this.lastname;
};

function comparePeople(a, b) {
    return a.age - b.age;
}

var people = [
    new Person('Gosho', 'Goshov', 34),
    new Person('Pesho', 'Peshov', 17),
    new Person('Tisho', 'Tishov', 80),
    new Person('Misho', 'Mishev', 65)
];

people.sort(comparePeople);

for (var person = 0; person < people.length; person++) {
    console.log(people[person]);
}

console.log('Youngest: ' + people[0].toString());
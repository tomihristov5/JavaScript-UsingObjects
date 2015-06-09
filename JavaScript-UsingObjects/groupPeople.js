function Person(fname, lname, age) {
    if (isNaN(age) || !isFinite(age)) {
        throw new Error('age must be a number');
    }

    if (!(this instanceof Person)) {
        return new Person(fname, lname, age);
    }

    this.fname = fname;
    this.lname = lname;
    this.age = age;
}

Person.prototype.toString = function () {
    return '(' + this.fname + ' ' + this.lname + ',' + this.age + ')';
};

var people = [
    new Person('Gosho', 'Goshov', 34),
    new Person('Pesho', 'Peshov', 17),
    new Person('Tisho', 'Tishov', 80),
    new Person('Misho', 'Mishev', 65),
    new Person('Gosho', 'Goshov', 54),
    new Person('Pesho', 'Peshov', 37),
    new Person('Tisho', 'Tishov', 90),
    new Person('Misho', 'Mishev', 69),
    new Person('Gosho', 'Goshov', 74),
    new Person('Pesho', 'Peshov', 87),
    new Person('Tisho', 'Tishov', 82),
    new Person('Misho', 'Mishev', 69)
];

function groupPeopleBy(peopleArr, key) {
    if (peopleArr.length === 0) {
        return null;
    }

    // check to see if given key exists in the objects of the array
    if (!peopleArr[0].hasOwnProperty(key)) {
        return null;
    }

    var groupedPeople = {},
		i;

    for (i in peopleArr) {
        // check if current object`s key value exists as property name in the resulting associative array and if it doesn`t create it as empty array
        var groupProperty = peopleArr[i][key];

        if (!groupedPeople.hasOwnProperty(groupProperty)) {
            groupedPeople[groupProperty] = [];
        }
        // if current object`s key value exists as property name in the resulting associative array, add current object to this property in the associative array. This property is also an array, because we would have created it in the previous if statement
        groupedPeople[groupProperty].push(peopleArr[i]);
    }

    return groupedPeople;
}

var groupedByAge = groupPeopleBy(people, 'age');
console.log(groupedByAge);
var groupByFname = groupPeopleBy(people, 'fname');
console.log(groupByFname);
var groupByLname = groupPeopleBy(people, 'lname');
console.log(groupByLname);
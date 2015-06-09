// var obj = 5;
// var obj = 'pesho';
var obj = { firstName: 'Stamat', lastName: 'Harabiyski', Age: 135 };

console.log('Original:');
console.log(obj);
console.log('Cloned:');
console.log(clone(obj));

function clone(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }

    var cloned = {}
    for (var prop in obj) {
        cloned[prop] = clone(obj[prop])
    }

    return cloned;
}
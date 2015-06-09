var shisho = {
    firstName: 'Shisho',
    lastName: 'Bakshisho',
    age: 56,
    wife: 'Minka Svirkata'
};

console.log(shisho);
console.log(shisho.firstName + ' has wife: ' + hasProperty(shisho, 'wife'));
shisho.kids = ['Gosho', 'Pesho'];
console.log(shisho.firstName + ' has kids: ' + hasProperty(shisho, 'kids'));
console.log(shisho.firstName + ' has a pet: ' + hasProperty(shisho, 'pet'));
console.log(shisho);

function hasProperty(obj, prop) {
    for (objProp in obj) {
        if (objProp === prop) {
            return true;
        }
    }
    return false;
}
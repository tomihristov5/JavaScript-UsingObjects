﻿if (!Array.hasOwnProperty('remove')) {
    Array.prototype.remove = function (item) {
        len = this.length
        for (var i = 0; i < len; i++) {
            if (this[i] === item) {
                this.splice(i, 1);
                i -= 1;
                len -= 1;
            }
        }
    }
}

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
arr.remove(1); //arr = [2,4,3,4,111,3,2,'1'];
console.log(arr);


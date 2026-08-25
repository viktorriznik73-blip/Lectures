"use strict";
function greet(person, date) {
    document.write(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Viktor", new Date());

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = exports.addToStart = exports.greetPeople = exports.optionallyAdd = exports.printThis = exports.getPersonNameString = exports.EmployeeClass = exports.PersonClass = exports.getPersonStreetNo = exports.sumEven = exports.countOdd = exports.isOld = exports.greet = void 0;
const greet = (name, birthYear) => {
    const age = new Date().getFullYear() - birthYear;
    return `Hello ${name}, you are ${age} years old`;
};
exports.greet = greet;
const isOld = (age) => age >= 35;
exports.isOld = isOld;
const countOdd = (arr) => {
    return arr.filter((num) => num % 2 !== 0).length;
};
exports.countOdd = countOdd;
const sumEven = (arr) => {
    return arr
        .filter((num) => num % 2 !== 0)
        .reduce((sum, curr) => sum + curr, 0);
};
exports.sumEven = sumEven;
const p = {
    name: "Marcus",
    birthYear: 1972,
    address: {
        street: "Strålgatan",
        streetNo: 23,
        city: "Stockholm",
    },
};
const getPersonStreetNo = (p) => p.address.streetNo;
exports.getPersonStreetNo = getPersonStreetNo;
class PersonClass {
    constructor(name, birthYear) {
        this.name = "";
        this.birthYear = 1970;
        this.name = name;
        this.birthYear = birthYear;
    }
    getName() {
        return this.name;
    }
}
exports.PersonClass = PersonClass;
const q = new PersonClass("Marcus", 1972);
class EmployeeClass extends PersonClass {
    constructor() {
        super(...arguments);
        this.employeeId = -1;
    }
}
exports.EmployeeClass = EmployeeClass;
const e = new EmployeeClass("Marcus Employee", 1972);
console.log(e.name);
console.log(e.employeeId);
const getPersonNameString = (p) => `${p.name}, ${p.birthYear}`;
exports.getPersonNameString = getPersonNameString;
const printThis = (p) => {
    if (!p) {
        return "no person supplied";
    }
    return p.name;
};
exports.printThis = printThis;
const optionallyAdd = (num1, num2, num3, num4, num5) => {
    let sum = num1 + num2;
    if (num3) {
        sum += num3;
    }
    if (num4) {
        sum += num4;
    }
    sum += num5 ? num5 : 0;
};
exports.optionallyAdd = optionallyAdd;
const greetPeople = (greeting, ...names) => {
    return `${greeting} ${names.join(" and ")}`.trim();
};
exports.greetPeople = greetPeople;
function addToStart(list, itemToAdd) {
    return [itemToAdd, ...list];
}
exports.addToStart = addToStart;
class Wrapper {
    constructor(list) {
        this.list = list;
    }
    getFirst() {
        return this.list[0];
    }
    getLast() {
        return this.list[this.list.length - 1];
    }
}
exports.Wrapper = Wrapper;
//# sourceMappingURL=index.js.map
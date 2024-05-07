"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const assert_1 = __importDefault(require("assert"));
const index_1 = require("./index");
describe("ts tests", () => {
    it("get greeting", () => {
        // arrange
        const birthYear = 1972;
        const name = "Marcus";
        // act
        const result = (0, index_1.greet)(name, birthYear);
        // assert
        assert_1.default.strictEqual(result, "Hello Marcus, you are 51 years old");
    });
    it("returns true if age is above or equal to 35", () => {
        // act
        const is34Old = (0, index_1.isOld)(34);
        const is35Old = (0, index_1.isOld)(35);
        const is36Old = (0, index_1.isOld)(36);
        // assert
        assert_1.default.strictEqual(is34Old, false);
        assert_1.default.strictEqual(is35Old, true);
        assert_1.default.strictEqual(is36Old, true);
    });
    it("fun with variables", () => {
        // act 
        let name = "Marcus";
        let nameImplicit = "Marcus";
        let nameImplicit2 = name;
        const cool = true;
        const birthYear = 1972;
        // arrange
        assert_1.default.strictEqual(typeof cool, "boolean");
        assert_1.default.strictEqual(typeof birthYear, "number");
        assert_1.default.strictEqual(typeof name, "string");
        assert_1.default.strictEqual(typeof nameImplicit, "string");
        assert_1.default.strictEqual(typeof nameImplicit2, "string");
    });
    it("arrays are typed in ts", () => {
        const names = ["Marcus", "Julia", "Catherine"];
        const firstFive = [1, 2, 3, 4, 5];
    });
    it("count odd numbers", () => {
        // arrange
        const firstFive = [1, 2, 3, 4, 5];
        // act
        const numberOfOdds = (0, index_1.countOdd)(firstFive);
        // arrange
        assert_1.default.strictEqual(numberOfOdds, 3);
    });
    it("sum even numbres", () => {
        // arrange
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // act 
        const sum = (0, index_1.sumEven)(nums);
        // arrange
        assert_1.default.strictEqual(sum, 30);
    });
    it("gets the street number for a person", () => {
        // arrange
        const p = {
            name: "Marcus",
            birthYear: 1972,
            address: {
                street: "Strålgatan",
                streetNo: 23,
                city: "Stockholm",
            },
        };
        // act 
        const streetNo = (0, index_1.getPersonStreetNo)(p);
        // assert
        assert_1.default.strictEqual(streetNo, 23);
    });
    it("using classes", () => {
        // arrange
        const p = new index_1.PersonClass("Marcus", 1972);
        const e = new index_1.EmployeeClass("Marcus Employee", 1972);
        // act 
        e.employeeId = 12345;
        // assert
        assert_1.default.strictEqual(p.name, "Marcus");
        assert_1.default.strictEqual(p.getName(), "Marcus");
        assert_1.default.strictEqual(e.getName(), "Marcus Employee");
        assert_1.default.strictEqual(e.employeeId, 12345);
    });
    it("prints an IPerson", () => {
        // arrange
        const p1 = { name: "Marcus", birthYear: 1972 };
        const p2 = { name: "David", birthYear: 1975, drummer: true };
        // act
        const p1Address = (0, index_1.getPersonNameString)(p1);
        const p2Address = (0, index_1.getPersonNameString)(p2);
        // assert
        assert_1.default.strictEqual(p1Address, "Marcus, 1972");
        assert_1.default.strictEqual(p2Address, "David, 1975");
    });
    it("uses union types to allow null", () => {
        // act 
        const result1 = (0, index_1.printThis)(undefined);
        const result2 = (0, index_1.printThis)(null);
        // assert
        assert_1.default.strictEqual(result1, "no person supplied");
        assert_1.default.strictEqual(result2, "no person supplied");
    });
    it("optional parameters", () => {
        // act
        const sum = (0, index_1.optionallyAdd)(1, 2, 3, 4, 5);
        // assert
        assert_1.default.strictEqual(sum, 3);
    });
    it("rest parameters - print names", () => {
        // act
        const greeting1 = (0, index_1.greetPeople)("Hello");
        const greeting2 = (0, index_1.greetPeople)("Hello", "Marcus");
        const greeting3 = (0, index_1.greetPeople)("Hello", "Marcus", "Dasha");
        const greeting4 = (0, index_1.greetPeople)("Hello", "Marcus", "Dasha", "David");
        const greeting5 = (0, index_1.greetPeople)("Hello", "Marcus", "Dasha", "David", "Julia", "Wietse", "Lucas");
        // assert
        assert_1.default.strictEqual(greeting1, "Hello");
        assert_1.default.strictEqual(greeting2, "Hello Marcus");
        assert_1.default.strictEqual(greeting3, "Hello Marcus and Dasha");
        assert_1.default.strictEqual(greeting4, "Hello Marcus and Dasha and David");
        assert_1.default.strictEqual(greeting5, "Hello Marcus and Dasha and David and Julia and Wietse and Lucas");
    });
    it("add to list", () => {
        // arrange
        const listOfPeople = [{ name: "Marcus", birthYear: 1972 }];
        const listOfAddresses = [
            { street: "Strålgatan", streetNo: 23, city: "Stockholm" },
            { street: "SchraeschazschStrasse", streetNo: 2, city: "Amsterdam" },
        ];
        // act
        const numberOfPeople = (0, index_1.addToStart)(listOfPeople, {
            name: "David",
            birthYear: 1975,
        });
        const numberOfAddresses = (0, index_1.addToStart)(listOfAddresses, {
            street: "Champs Elysee",
            streetNo: 1,
            city: "Paris",
        });
        // assert
        assert_1.default.strictEqual(numberOfPeople[0].name, "David");
        assert_1.default.strictEqual(numberOfAddresses[0].city, "Paris");
    });
    it("wrapper for addresses", () => {
        // arrange
        const listOfAddresses = [
            { street: "Strålgatan", streetNo: 23, city: "Stockholm" },
            { street: "SchraeschazschStrasse", streetNo: 2, city: "Amsterdam" },
            { street: "Champs Elysee", streetNo: 1, city: "Paris" },
        ];
        // act
        const list = new index_1.Wrapper(listOfAddresses);
        // assert
        assert_1.default.strictEqual(list.getFirst().city, "Stockholm");
        assert_1.default.strictEqual(list.getLast().city, "Paris");
    });
});
//# sourceMappingURL=index.test.js.map
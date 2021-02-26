const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("can set employee name", () => {
    const name = "any";
    const employee = new Employee(name);

    expect(employee.name).toBe(name)
})

test("can set employee email", () => {
    const email = "any@email.com";
    const employee = new Employee("any", 1, email);

    expect(employee.getEmail()).toBe("any@email.com")
})
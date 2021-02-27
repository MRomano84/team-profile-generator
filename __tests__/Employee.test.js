const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("can set employee name", () => {
    const name = "any";
    const employee = new Employee(name);

    expect(employee.name).toBe(name)
})

test("can set employee id", () => {
    const id = 123456;
    const employee = new Employee("", id, "");

    expect(employee.getId()).toBe(123456)
})

test("can set employee email", () => {
    const email = "any@email.com";
    const employee = new Employee("", 123456 , email);

    expect(employee.getEmail()).toBe("any@email.com")
})

test("can set role", () => {
    const employee = new Employee;

    expect(employee.getRole()).toBe(Employee);
})
const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test ("can set name", () => {
    const name = "Russell Wilson";
    const manager = new Manager(name, "", "", "");

    expect(manager.getName()).toBe("Russell Wilson");
});

test ("can set id", () => {
    const id = 123456;
    const manager = new Manager("", id, "", "");

    expect(manager.getId()).toBe(123456);
});

test ("can set email", () => {
    const email = "LetRuss@cook.com";
    const manager = new Manager("", "", email, "");

    expect(manager.getEmail()).toBe("LetRuss@cook.com");
});

test ("can set office number", () => {
    const officeNum = 500;
    const manager = new Manager("", "", "", officeNum);

    expect(manager.getOfficeNum()).toBe(500);
});
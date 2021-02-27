const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test ("can set name", () => {
    const name = "Russell Wilson";
    const intern = new Intern(name, "", "", "");

    expect(intern.getName()).toBe("Russell Wilson");
});

test ("can set id", () => {
    const id = 123456;
    const intern = new Intern("", id, "", "");

    expect(intern.getId()).toBe(123456);
});

test ("can set email", () => {
    const email = "LetRuss@cook.com";
    const intern = new Intern("", "", email, "");

    expect(intern.getEmail()).toBe("LetRuss@cook.com");
});

test ("can set school", () => {
    const school = "Central Washington University";
    const intern = new Intern("", "", "", school);

    expect(intern.getSchool()).toBe(school);
});
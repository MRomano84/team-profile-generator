
const { createHook } = require("async_hooks");
const Engineer = require("../lib/Engineer");

test ("can set name", () => {
    const name = "Russell Wilson";
    const engineer = new Engineer(name, "", "", "");

    expect(engineer.getName()).toBe("Russell Wilson");
});

test ("can set id", () => {
    const id = 123456;
    const engineer = new Engineer("", id, "", "");

    expect(engineer.getId()).toBe(id);
});

test ("can set email", () => {
    const email = "LetRuss@cook.com";
    const engineer = new Engineer("", "", email, "");

    expect(engineer.getEmail()).toBe("LetRuss@cook.com");
});

test ("can set gitHub", () => {
    const gitHubUsername = "gitHubUsername";
    const engineer = new Engineer("", "", "", gitHubUsername);

    expect(engineer.getGitHub()).toBe(gitHubUsername);
});

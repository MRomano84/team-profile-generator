const Employee = require("./Employee");

//Create Engineer class that extends from Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
};

const intern = new Intern(this.name, this.id, this.email, this.school);


module.exports = Intern;
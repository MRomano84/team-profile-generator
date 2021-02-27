const Employee = require("./Employee");

//Create Engineer class that extends from Employee class
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }
};

const engineer = new Engineer(this.name, this.id, this.email, this.gitHub);
console.log(engineer);


module.exports = Engineer;
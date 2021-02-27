const Employee = require("./Employee");

//Create Manager class that extends the Vehicle class
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }

    getRole() {
        return "Manager";
    };

    getOfficeNum() {
        return this.officeNum;
    }
};

const manager = new Manager(this.name, this.id, this.email, this.officeNum)

module.exports = Manager;
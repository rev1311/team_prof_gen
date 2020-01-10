const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.officeNumber = 100;
        this.role = "Manager"
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;
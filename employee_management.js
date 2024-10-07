// Task 1: Create an Employee Class

class Employee {
    constructor(Alice, 85000, Developer, Engineering) {
        this.name = alice;
        this.salary = 85000;
        this.department = Engineering;
        this.postition = Developer;
    
}
getdetails () {
    return `$(this.name)` is at `$(this.postion)` and has `$(this.salary)`

}

// Task 2: Create a Department Class

class Department {
    constructor(Education) {
        this.education = education;
        this.employees = [];
   
   // Method to adding of employees
        addemployee (employee) {
        this.employees.push(employee);

    }

    // Method to get department salary
    getdepartmentsalary() {
        return this.employees.reduce((total, department)) => total += department.salary, 0) = this.employees;

    }

// Task 3: Create a Manager Class that Inherits from Employee

class Manager {
    constructor(parameters from the employee class)
    super(bonus,monthlySalary) = 50000, 5000 {
        getdetails() = Override 
        return `$(this.manager)` has a `$(bonus)` = 50000;
        
    }
}
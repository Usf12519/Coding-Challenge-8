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

// Task 4: Handle Bonuses for Managers
   calculateTotalSalaryWithBonus() 
    totalSalary = 0;
    this.employees.forEach(employee=> totalSalary += employee.salary);
    if (employee instanceof Manager)
        totalSalary += employee.bonus;
    )

// Task 5: Create and Manage Departments and Employees

department = Education("department");
department = Social Science ("department");

dep_manager= manager(Peter, department manager, 90000;
dep_employee1 = Employee(Alex, Designer, 85000);
dep_employee2 = Employee(Cameron, Developer, 65000);
)

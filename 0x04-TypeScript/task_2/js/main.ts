// create director Interfaces
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Create teacher interface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Create Director classe
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Create teacher class
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string) {
    if (salary < 500){
        return "Teacher";
    }
    return "Director";
}

// test function
// console.log(createEmployee(200));
// console.log(createEmployee("1000"));
// console.log(createEmployee("$500"));
// create interface
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [others: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    printTeacher(firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string) {
    return (firstName[0] + ". " + lastName);
}

// console.log(printTeacher('John', "Doe"));
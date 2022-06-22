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

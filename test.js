const employees = [
    {
        gender: "female",
        birthdate: "2000-01-03T00:00:00.000Z",
        name: "Jana",
        surname: "Nováková",
        workload: 20
    },
    {
        gender: "male",
        birthdate: "1994-08-07T00:00:00.000Z",
        name: "Jan",
        surname: "Novák",
        workload: 40
    }
];

function calculateAge(birthdate) {
    const birthDateObj = new Date(birthdate);
    const today = new Date();
    const ageInMilliseconds = today - birthDateObj;
    const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
    return ageInYears;
}

function calculateAverageAge(employees) {
    // Calculate the total age of all employees
    let totalAge = 0;
    employees.forEach(employee => { totalAge += calculateAge(employee.birthdate) });

    // Calculate the average age
    const averageAge = totalAge / employees.length;
    return averageAge;
}

const averageAge = calculateAverageAge(employees);
console.log("Average age of employees:", averageAge);

const now = new Date();
console.log(now)

const then = new Date('2000-01-03T00:00:00.000Z');
console.log(then)
console.log(now - then)
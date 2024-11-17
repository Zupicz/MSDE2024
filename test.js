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
        workload: 10
    },
    {
        gender: "male",
        birthdate: "1989-08-07T00:00:00.000Z",
        name: "Marek",
        surname: "Svoboda",
        workload: 40
    },
    {
        gender: "male",
        birthdate: "2002-08-07T00:00:00.000Z",
        name: "Otakar",
        surname: "Pavel",
        workload: 30
    },
    {
        gender: "female",
        birthdate: "2004-08-07T00:00:00.000Z",
        name: "Julia",
        surname: "Smetana",
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

const employeeAges = employees.map(employee => calculateAge(employee.birthdate));
const employeeWorkloads = [];
employees.forEach(employee => { employeeWorkloads.push(employee.workload) });

function calculateMedian(array) {
    const sortedArray = array.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedArray.length / 2);

    if (sortedArray.length % 2 === 0) {
        return (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
    } else {
        return sortedArray[middleIndex];
    }
}

function calculateAverageGenderWorkload(employees, gender) {
    let totalWorkload = 0;
    let genderCount = 0;
  
    employees.forEach(employee => {
      if (employee.gender === gender) {
        totalWorkload += employee.workload;
        genderCount++;
      }
    });
  
    if (genderCount === 0) {
      return 0;
    }
  
    const averageGenderWorkload = totalWorkload / genderCount;
    const roundedAverageGenderWorkload = Math.round(averageGenderWorkload  * 10) / 10;
    return roundedAverageGenderWorkload;
  }

  const averageWomenWorkload = calculateAverageGenderWorkload(employees, "female");
  const averageMenWorkload = calculateAverageGenderWorkload(employees, "male");
  // console.log(averageWomenWorkload);
  // console.log(averageMenWorkload);

  const sortedByWorkforce = employees.sort((a, b) => a.workload - b.workload);
  console.log(sortedByWorkforce)
function main(dtoIn) {

    function Employee() {

        const GENDER_LIST = ["male", "female"];
        const MALE_NAMES_LIST = ["Jiří", "Jan", "Petr", "Josef", "Pavel", "Martin", "Tomáš", "Jaroslav", "Miroslav", "Zdeněk", "Václav", "Michal", "František", "Jakub", "Milan", "Karel", "Lukáš", "David", "Vladimír", "Ondřej", "Ladislav", "Roman", "Marek", "Stanislav", "Daniel", "Radek", "Antonín", "Vojtěch", "Filip", "Adam", "Matěj", "Dominik", "Aleš", "Miloslav", "Jaromír", "Patrik", "Libor", "Jindřich", "Vlastimil", "Miloš", "Lubomír", "Štěpán", "Oldřich", "Rudolf", "Matyáš", "Ivan", "Robert", "Luboš", "Radim", "Richard"];
        const MALE_SURNAMES_LIST = ["Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý", "Horák", "Němec", "Marek", "Pospíšil", "Pokorný", "Hájek", "Král", "Jelínek", "Růžička", "Beneš", "Fiala", "Sedláček", "Doležal", "Zeman", "Kolář", "Navrátil", "Čermák", "Vaněk", "Urban", "Blažek", "Kříž", "Kovář", "Kratochvíl", "Bartoš", "Vlček", "Polák", "Musil", "Kopecký", "Šimek", "Konečný", "Malý", "Holub", "Čech", "Štěpánek", "Staněk", "Kadlec", "Dostál", "Soukup", "Šťastný", "Mareš", "Moravec", "Sýkora"];
        const FEMALE_NAMES_LIST = ["Jana", "Marie", "Eva", "Hana", "Anna", "Lenka", "Kateřina", "Lucie", "Věra", "Alena", "Petra", "Veronika", "Jaroslava", "Tereza", "Martina", "Michaela", "Jitka", "Helena", "Ludmila", "Zdeňka", "Ivana", "Monika", "Eliška", "Zuzana", "Markéta", "Jarmila", "Barbora", "Jiřina", "Marcela", "Kristýna", "Dana", "Dagmar", "Adéla", "Pavla", "Vlasta", "Miroslava", "Andrea", "Irena", "Božena", "Klára", "Libuše", "Marta", "Šárka", "Nikola", "Karolína", "Iveta", "Pavlína", "Natálie", "Ogla", "Blanka"];
        const FEMALE_SURNAMES_LIST = ["Nováková", "Svobodová", "Novotná", "Dvořáková", "Černá", "Procházková", "Kučerová", "Veselá", "Horáková", "Němcová", "Marková", "Pospíšilová", "Pokorná", "Hájková", "Králová", "Jelínková", "Růžičková", "Benešová", "Fialová", "Sedláčková", "Doležalová", "Zemanová", "Kolářová", "Navrátilová", "Čermáková", "Vaňková", "Urbanová", "Blažková", "Křížová", "Kovářová", "Kratochvílová", "Bartošová", "Vlčková", "Poláková", "Musilová", "Kopecká", "Šimková", "Konečná", "Malá", "Holubová", "Čechová", "Štěpánková", "Staňková", "Kadlecová", "Dostálová", "Soukupová", "Šťastná", "Marešová", "Moravcová", "Sýkorová"];
        const WORKLOAD = [10, 20, 30, 40];

        let startDate = new Date(Date.now());
        startDate.setFullYear(startDate.getFullYear() - dtoIn.age.max);

        let endDate = new Date(Date.now());
        endDate.setFullYear(endDate.getFullYear() - dtoIn.age.min);

        function getRandomDate(startDate, endDate) {

            const randomTimestamp = startDate.getTime() + (Math.random() * (endDate.getTime() - startDate.getTime()));

            return new Date(randomTimestamp);
        }

        this.gender = GENDER_LIST[Math.floor(Math.random() * GENDER_LIST.length)];

        this.birthdate = getRandomDate(startDate, endDate).toISOString();

        if (this.gender === "male") {
            this.name = MALE_NAMES_LIST[Math.floor(Math.random() * MALE_NAMES_LIST.length)];
            this.surname = MALE_SURNAMES_LIST[Math.floor(Math.random() * MALE_SURNAMES_LIST.length)];
        } else if (this.gender === "female") {
            this.name = FEMALE_NAMES_LIST[Math.floor(Math.random() * FEMALE_NAMES_LIST.length)];
            this.surname = FEMALE_SURNAMES_LIST[Math.floor(Math.random() * FEMALE_SURNAMES_LIST.length)];
        }

        this.workload = WORKLOAD[Math.floor(Math.random() * WORKLOAD.length)];
    }

    function generateEmployeeData(dtoIn) {
        let employeeList = [];
        if (dtoIn && typeof dtoIn.count === 'number') {
            for (let i = 0; i < dtoIn.count; i++) {
                employeeList.push(new Employee());
            }
        }
        return employeeList;
    }

    const employeeDataList = generateEmployeeData(dtoIn);

    function getEmployeeStatistics(inputList) {

        function countElementsByProperty(object, property, value) {
            const filteredArray = Object.values(object).filter(item => item[property] === value);
            return filteredArray.length;
        }

        function calculateAge(birthdate) {
            const birthDateObj = new Date(birthdate);
            const today = new Date();
            const ageInMilliseconds = today - birthDateObj;
            const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
            return ageInYears;
        }

        function calculateAverageAge(employees) {
            let totalAge = 0;
            employees.forEach(employee => { totalAge += calculateAge(employee.birthdate) });

            const averageAge = totalAge / employees.length;
            const roundedAverageAge = Math.round(averageAge * 10) / 10;
            return roundedAverageAge;
        }

        function getMinMaxAge(employees) {
            let employeeAges = [];
            employees.forEach(employee => { employeeAges.push(calculateAge(employee.birthdate)) });

            let maximum = Math.max(...employeeAges);
            let minimum = Math.min(...employeeAges);
            let result = ([minimum, maximum]);
            return result;
        }

        const employeeAges = inputList.map(employee => calculateAge(employee.birthdate));
        const employeeWorkloads = [];
        inputList.forEach(employee => { employeeWorkloads.push(employee.workload) });

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
            const roundedAverageGenderWorkload = Math.round(averageGenderWorkload * 10) / 10;
            return roundedAverageGenderWorkload;
        }

        const employeeStatistics = {
            total: inputList.length,
            workload10: countElementsByProperty(inputList, "workload", 10),
            workload20: countElementsByProperty(inputList, "workload", 20),
            workload30: countElementsByProperty(inputList, "workload", 30),
            workload40: countElementsByProperty(inputList, "workload", 40),
            averageAge: calculateAverageAge(inputList),
            minAge: getMinMaxAge(inputList)[0],
            maxAge: getMinMaxAge(inputList)[1],
            medianAge: calculateMedian(employeeAges),
            medianWorkload: calculateMedian(employeeWorkloads),
            averageWomenWorkload: calculateAverageGenderWorkload(inputList, "female"),
            sortedByWorkload: inputList.sort((a, b) => a.workload - b.workload)
        }
        return employeeStatistics;
    }

    const dtoOut = getEmployeeStatistics(employeeDataList);
    return dtoOut;
}

const dtoIn = {
    count: 50,
    age: {
        min: 19,
        max: 35
    }
}

const newEmployees = main(dtoIn);
console.log(newEmployees)
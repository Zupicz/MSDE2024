function main(dtoIn) {

    const GENDER_LIST = ["male", "female"];
    const MALE_NAMES_LIST = ["Jiří", "Jan", "Petr", "Josef", "Pavel", "Martin", "Tomáš", "Jaroslav", "Miroslav", "Zdeněk", "Václav", "Michal", "František", "Jakub", "Milan", "Karel", "Lukáš", "David", "Vladimír", "Ondřej", "Ladislav", "Roman", "Marek", "Stanislav", "Daniel", "Radek", "Antonín", "Vojtěch", "Filip", "Adam", "Matěj", "Dominik", "Aleš", "Miloslav", "Jaromír", "Patrik", "Libor", "Jindřich", "Vlastimil", "Miloš", "Lubomír", "Štěpán", "Oldřich", "Rudolf", "Matyáš", "Ivan", "Robert", "Luboš", "Radim", "Richard"];
    const MALE_SURNAMES_LIST = ["Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý", "Horák", "Němec", "Marek", "Pospíšil", "Pokorný", "Hájek", "Král", "Jelínek", "Růžička", "Beneš", "Fiala", "Sedláček", "Doležal", "Zeman", "Kolář", "Navrátil", "Čermák", "Vaněk", "Urban", "Blažek", "Kříž", "Kovář", "Kratochvíl", "Bartoš", "Vlček", "Polák", "Musil", "Kopecký", "Šimek", "Konečný", "Malý", "Holub", "Čech", "Štěpánek", "Staněk", "Kadlec", "Dostál", "Soukup", "Šťastný", "Mareš", "Moravec", "Sýkora"];
    const FEMALE_NAMES_LIST = ["Jana", "Marie", "Eva", "Hana", "Anna", "Lenka", "Kateřina", "Lucie", "Věra", "Alena", "Petra", "Veronika", "Jaroslava", "Tereza", "Martina", "Michaela", "Jitka", "Helena", "Ludmila", "Zdeňka", "Ivana", "Monika", "Eliška", "Zuzana", "Markéta", "Jarmila", "Barbora", "Jiřina", "Marcela", "Kristýna", "Dana", "Dagmar", "Adéla", "Pavla", "Vlasta", "Miroslava", "Andrea", "Irena", "Božena", "Klára", "Libuše", "Marta", "Šárka", "Nikola", "Karolína", "Iveta", "Pavlína", "Natálie", "Ogla", "Blanka"];
    const FEMALE_SURNAMES_LIST = ["Nováková", "Svobodová", "Novotná", "Dvořáková", "Černá", "Procházková", "Kučerová", "Veselá", "Horáková", "Němcová", "Marková", "Pospíšilová", "Pokorná", "Hájková", "Králová", "Jelínková", "Růžičková", "Benešová", "Fialová", "Sedláčková", "Doležalová", "Zemanová", "Kolářová", "Navrátilová", "Čermáková", "Vaňková", "Urbanová", "Blažková", "Křížová", "Kovářová", "Kratochvílová", "Bartošová", "Vlčková", "Poláková", "Musilová", "Kopecká", "Šimková", "Konečná", "Malá", "Holubová", "Čechová", "Štěpánková", "Staňková", "Kadlecová", "Dostálová", "Soukupová", "Šťastná", "Marešová", "Moravcová", "Sýkorová"];
    const WORKLOAD = [10, 20, 30, 40];

    startDate = new Date(Date.now());
    startDate.setFullYear(startDate.getFullYear() - dtoIn.age.max);

    endDate = new Date(Date.now());
    endDate.setFullYear(endDate.getFullYear() - dtoIn.age.min);

    function getRandomDate(startDate, endDate) {

        const randomTimestamp = startDate.getTime() + (Math.random() * (endDate.getTime() - startDate.getTime()));

        return new Date(randomTimestamp);
    }

    function Employee() {

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
    // return employeeDataList;

    function getEmployeeStatistics(inputList) {

        function countElementsByProperty(object, property, value) {
            const filteredArray = Object.values(object).filter(item => item[property] === value);
            return filteredArray.length;
          }

        const employeeStatistics = {
            total: inputList.length,
            workload10: countElementsByProperty(inputList, "workload", 10),
            workload20: countElementsByProperty(inputList, "workload", 20),
            workload30: countElementsByProperty(inputList, "workload", 30),
            workload40: countElementsByProperty(inputList, "workload", 40),
        }
        return employeeStatistics;
    }
    
    dtoOut = getEmployeeStatistics(employeeDataList);
    return dtoOut;
}

const dtoIn = {
    count: 50,
    age: {
        min: 19,
        max: 35
    }
}

let newEmployees = main(dtoIn);
console.log(newEmployees)
/*
for (i = 0; i < newEmployees.length; i++) {
    console.log(newEmployees[i])
}
*/

/*
const dtoOut = {
    total: 50,
    workload10: 13,
    workload20: 12,
    workload30: 10,
    workload40: 15
    averageAge: 33.6,
    minAge: 19,
    maxAge: 55,
    medianAge: 38,
    medianWorkload: 28,
    averageWomenWorkload: 26,
    sortedByWorkload: [
      {
        gender: "female",
        birthdate: "2000-01-03T00:00:00.000Z",
        name: "Jana",
        surname: "Nováková",
        workload: 20
      },
      {
        gender: "male",
        birthdate: "2000-08-07T00:00:00.000Z",
        name: "Jan",
        surname: "Novák",
        workload: 40
      }
    ]
  }
    */
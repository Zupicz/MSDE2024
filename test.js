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
    return employeeDataList;

}

function getEmployeeChartContent(inputList) {

    const names = {
        all: {},
        male: {},
        female: {},
        femalePartTime: {},
        maleFullTime: {},
      };
    
      const chartData = {
        all: [],
        male: [],
        female: [],
        femalePartTime: [],
        maleFullTime: [],
      };
    
      inputList.forEach((employee) => {
        const { gender, name, workload } = employee;
    
        // Count and populate chart data
        for (const category in names) {
          if (category === 'all' || (category === 'male' && gender === 'male') || (category === 'female' && gender === 'female') || (category === 'femalePartTime' && gender === 'female' && workload < 40) || (category === 'maleFullTime' && gender === 'male' && workload === 40)) {
            names[category][name] = (names[category][name] || 0) + 1;
            chartData[category].push({ label: name, value: names[category][name] });
          }
        }
      });
    
      return { names, chartData };
}

// input
const dtoIn = {
  count: 20,
  age: {
    min: 19,
    max: 35
  }
}

const testArray = main(dtoIn);
console.log(testArray);

const employeeNames = getEmployeeChartContent(testArray);
console.log(JSON.stringify(employeeNames));

/* output
const dtoOut = {
  names: {
    all: {Aneta: 2, Jan: 5, Jana: 3, Jiřina: 1, Jiří: 1, Josef: 1},
    male: {Jan: 5, Jiří: 1, Josef: 1},
    female: {Aneta: 2, Jana: 3, Jiřina: 1},
    femalePartTime: {Aneta: 2, Jana: 1},
    maleFullTime: {Jan: 3, Josef: 1}
  },
  chartData: {
    all: [
     {label: "Jan", value: 5},
     {label: "Jana", value: 3},
     {label: "Aneta", value: 2},
     {label: "Jiřina", value: 1},
     {label: "Jiří", value: 1},
     {label: "Josef", value: 1}
    ],
    male: [
     {label: "Jan", value: 5},
     {label: "Jiří", value: 1},
     {label: "Josef", value: 1}
    ],
    female: [
     {label: "Jana", value: 3},
     {label: "Aneta", value: 2},
     {label: "Jiřina", value: 1}
    ],
    femalePartTime: [
     {label: "Jana", value: 1},
     {label: "Aneta", value: 2}
    ],
    maleFullTime: [
     {label: "Jan", value: 3},
     {label: "Josef", value: 1}
    ]
  }
} */
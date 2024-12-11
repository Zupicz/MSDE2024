function main(dtoIn) {

    function Employee() {

        const GENDER_LIST = ["male", "female"];
        const MALE_NAMES_LIST = ["Jiří", "Jan", "Petr", "Josef", "Pavel", "Martin", "Tomáš", "Jaroslav", "Miroslav", "Zdeněk", "Václav", "Michal", "František", "Jakub", "Milan", "Karel", "Lukáš", "David", "Vladimír", "Ondřej", "Ladislav", "Roman", "Marek", "Stanislav", "Daniel", "Radek", "Antonín", "Vojtěch", "Filip", "Adam", "Matěj", "Dominik", "Aleš", "Miloslav", "Jaromír", "Patrik", "Libor", "Jindřich", "Vlastimil", "Miloš", "Lubomír", "Štěpán", "Oldřich", "Rudolf", "Matyáš", "Ivan", "Robert", "Luboš", "Radim", "Richard"];
        const MALE_SURNAMES_LIST = ["Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý", "Horák", "Němec", "Marek", "Pospíšil", "Pokorný", "Hájek", "Král", "Jelínek", "Růžička", "Beneš", "Fiala", "Sedláček", "Doležal", "Zeman", "Kolář", "Navrátil", "Čermák", "Vaněk", "Urban", "Blažek", "Kříž", "Kovář", "Kratochvíl", "Bartoš", "Vlček", "Polák", "Musil", "Kopecký", "Šimek", "Konečný", "Malý", "Holub", "Čech", "Štěpánek", "Staněk", "Kadlec", "Dostál", "Soukup", "Šťastný", "Mareš", "Moravec", "Sýkora"];
        const FEMALE_NAMES_LIST = ["Jana", "Marie", "Eva", "Hana", "Anna", "Lenka", "Kateřina", "Lucie", "Věra", "Alena", "Petra", "Veronika", "Jaroslava", "Tereza", "Martina", "Michaela", "Jitka", "Helena", "Ludmila", "Zdeňka", "Ivana", "Monika", "Eliška", "Zuzana", "Markéta", "Jarmila", "Barbora", "Jiřina", "Marcela", "Kristýna", "Dana", "Dagmar", "Adéla", "Pavla", "Vlasta", "Miroslava", "Andrea", "Irena", "Božena", "Klára", "Libuše", "Marta", "Šárka", "Nikola", "Karolína", "Iveta", "Pavlína", "Natálie", "Olga", "Blanka"];
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
        
            for (const category in names) {
              if (category === 'all' || (category === 'male' && gender === 'male') || (category === 'female' && gender === 'female') || (category === 'femalePartTime' && gender === 'female' && workload < 40) || (category === 'maleFullTime' && gender === 'male' && workload === 40)) {
                names[category][name] = (names[category][name] || 0) + 1;
                chartData[category].push({ label: name, value: names[category][name] });
              }
            }
          });
        
          return { names, chartData };
    }

    const employeeDataList = generateEmployeeData(dtoIn);
    const dtoOut = getEmployeeChartContent(employeeDataList);
    return dtoOut;
}
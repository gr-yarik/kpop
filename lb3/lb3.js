/// 1
function getAllworkers() {
    let workers = [
        { Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000 },
        { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500 },
        { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600 },
        { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300 }
    ];
    return workers;
}
function logFirstAvailable(workers = getAllworkers()) {
    let workersCount = workers.length;
    console.log(`Workers: ${workersCount}`);
    for (const worker of workers) {
        if (worker.available) {
            let workerName = worker.Name;
            console.log(`Name: ${workerName}, Surname: ${worker.surname}`);
            return;
        }
    }
}
let workers = getAllworkers();
logFirstAvailable(workers);
/// 1.2
var Category;
(function (Category) {
    Category[Category["BUSSINES_ANALYST"] = 0] = "BUSSINES_ANALYST";
    Category[Category["DEVELOPER"] = 1] = "DEVELOPER";
    Category[Category["DESIGNER"] = 2] = "DESIGNER";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["SCRUM_MASTER"] = 4] = "SCRUM_MASTER";
})(Category || (Category = {}));
function addCategory(workers) {
    for (let i = 0; i < workers.length; ++i) {
        workers[i]["category"] = Category[i];
    }
}
function getWorkersNamesByCategory(category = Category.DESIGNER) {
    let workers = getAllworkers();
    addCategory(workers);
    let result = [];
    for (const worker of workers) {
        if (worker.category == Category[category]) {
            result.push(worker.surname);
        }
    }
    return result;
}
function logWorkersNames(workers) {
    for (const worker of workers)
        console.log(worker);
}
let surnames = getWorkersNamesByCategory(Category.DEVELOPER);
logWorkersNames(surnames);
/// 1.3
function addId(workers) {
    for (let i = 0; i < workers.length; ++i) {
        workers[i]["id"] = i;
    }
}
addId(workers);
addCategory(workers);
workers.forEach(element => {
    if (element.category == Category[1]) //Category[1] = DEVELOPER
        console.log(`Name: ${element.Name}, Surname: ${element.surname}`);
});
function getWorkerByID(id) {
    let worker = workers.find(elem => elem.id == id);
    if (worker)
        return [worker.Name, worker.surname, worker.salary, worker.available];
    return [];
}
let worker = getWorkerByID(2);
console.log(worker);
/// 1.4
function createCustomerID(name, id) {
    return id + "-" + name;
}
let myID = createCustomerID("Ann", 10);
console.log(myID);
let IdGenerator = (name, id) => { return id + "-" + name; };
console.log(IdGenerator("Oleksii", 15));
IdGenerator = createCustomerID;
console.log(IdGenerator("Oleksii", 26));
/// 1.5
function createCustomer(name, age, city) {
    let result = name;
    if (age)
        result += ", " + age;
    if (city)
        result += ", " + city;
    console.log(result);
}
createCustomer("Oleksii");
createCustomer("Oleksii", 19);
createCustomer("Oleksii", 19, "Kyiv");
console.log(getWorkersNamesByCategory());
logFirstAvailable();
function сheckoutWorkers(customer, ...workerIDs) {
    console.log(customer);
    let result = [];
    for (const id of workerIDs) {
        let worker = getWorkerByID(id);
        if (worker[3]) {
            result.push((worker[0] + " " + worker[1]));
        }
    }
    return result;
}
let myWorkers = сheckoutWorkers('Ann', 1, 2, 4);
myWorkers.forEach(element => {
    console.log(element);
});

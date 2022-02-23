/// 1
function getAllworkers(): any[] {
    let workers = [
        { Name: 'Ivan',  surname: 'Ivanov',   available: true,  salary: 1000 },
        { Name: 'Petro', surname: 'Petrov',   available: true,  salary: 1500 },
        { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600 },
        { Name: 'Evgen', surname: 'Zhukov',   available: true,  salary: 1300 }
    ]
    return workers;
}

function logFirstAvailable(workers: any[] = getAllworkers()): void {
    let workersCount: number = workers.length;
    console.log(`Workers: ${workersCount}`);
    for (const worker of workers) {
        if(worker.available){
            let workerName: string = worker.Name;
            console.log(`Name: ${workerName}, Surname: ${worker.surname}`);
            return;
        }
    }
}



let workers = getAllworkers();
logFirstAvailable(workers);


/// 1.2
enum Category {
    BUSSINES_ANALYST,
    DEVELOPER,
    DESIGNER,
    QA,
    SCRUM_MASTER
}

function addCategory(workers: any[]){
    for (let i =0; i < workers.length; ++i) {
        workers[i]["category"] = Category[i];
    }
}

function getWorkersNamesByCategory(category: Category = Category.DESIGNER): Array<string> {
    let workers = getAllworkers();
    addCategory(workers);
    let result: Array<string> = [];

    for (const worker of workers) {
        if(worker.category == Category[category]){
            result.push(worker.surname)
        }
    }
    return result;
}

function logWorkersNames(workers: string[]): void{
    for (const worker of workers)
        console.log(worker)
} 

let surnames: string[] = getWorkersNamesByCategory(Category.DEVELOPER);
logWorkersNames(surnames);

/// 1.3

function addId(workers: any[]){
    for (let i = 0; i < workers.length; ++i) {
        workers[i]["id"] = i;
    }
}

addId(workers);
addCategory(workers);

workers.forEach(element => { 
    if(element.category == Category[1]) //Category[1] = DEVELOPER
        console.log(`Name: ${element.Name}, Surname: ${element.surname}`);
});

function getWorkerByID(id: number) {
    let worker = workers.find(elem => elem.id == id );
    if(worker)
        return [worker.Name, worker.surname, worker.salary, worker.available]
    return [];
}

let worker = getWorkerByID(2);
console.log(worker);


/// 1.4
function createCustomerID(name: string, id: number): string {
    return id + "-" + name;
}

let myID: string = createCustomerID("Ann", 10)
console.log(myID);

let IdGenerator = (name: string, id: number): string => { return id + "-" + name; }

console.log(IdGenerator("Oleksii", 15))
IdGenerator = createCustomerID;
console.log(IdGenerator("Oleksii", 26))


/// 1.5
function createCustomer(name: string, age?: number, city?: string): void {
    let result: string = name
    if (age)  result += ", " + age;
    if (city) result += ", " + city;
    console.log(result);
} 

createCustomer("Oleksii");
createCustomer("Oleksii", 19);
createCustomer("Oleksii", 19, "Kyiv");

console.log(getWorkersNamesByCategory());
logFirstAvailable()


function сheckoutWorkers(customer: string, ...workerIDs: number[]): string[] {
    console.log(customer);
    let result: string[] = [];
    for (const id of workerIDs) {
        let worker = getWorkerByID(id);
        if(worker[3]){
            result.push((worker[0] + " " + worker[1]));
        }
    }
    return result;
}

let myWorkers = сheckoutWorkers('Ann', 1, 2, 4);

myWorkers.forEach(element => {
    console.log(element);
});
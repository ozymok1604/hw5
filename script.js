const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function taxCount(sum){
    let tax = sum * this.tax;
    return tax;
}

console.log(taxCount.apply(litva,[1000]));

function getAvarageTax(){
    let sum = this.tax * this.middleSalary;
    return sum;
}
console.log(getAvarageTax.apply(litva));

function getAllTaxes (){
    let taxes = this.tax * this.middleSalary * this.vacancies ;
    return taxes; 
}

console.log(getAllTaxes.call(ukraine));
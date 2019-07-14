'use strict';
export { };

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/* for (let i: number = 0; i < companies.length; i++) {
    console.log(companies[i]);
} */


//for each : easier way to loop through in an array

/* companies.forEach(function (company) {
    console.log(company.name);
}); */

//this forEach is just the same as the for loop before but looks better

//filter it helps us filters out stuff what we need

//filtering with for loop: //task : get 21 and older

/* let canDrink: number[] = [];
for (let i: number = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
}

console.log(canDrink); */

//filtering with .filter

/* const canDrink = ages.filter(function (age) {
    if (age >= 21) {
        return true;
    }
}); */

const canDrink = ages.filter(age => age >= 21);

// Filter retail companies

/* const retailCompanies = companies.filter(function (company) {
    if (company.category === 'Retail') {
        return true;
    }
}); */

// Filter retail companies with arrow function
/* const retailCompanies = companies.filter(company => company.category === 'Retail')
console.log(retailCompanies); */

//get 80s' companies

/* const eightiesCompanies = companies.filter(company => company.start < 1990 && company.start > 1979);
console.log(eightiesCompanies); */

// get the companies that lasted at least 10 years

const tenYorMore = companies.filter(company => (company.end - company.start) >= 10)

//map : instead of just filtering out we can create new arrays

//create array of company names

const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

console.log(companyNames);

// square the ages with map and then multiple it by 2

/* const agesSquareMultiple = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);

console.log(agesSquareMultiple); */

//sort

// sort companies by start name

/* const sortedCompanies = companies.sort(function (c1, c2) {
    if (c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
});
 */

//shorter form

/* const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

console.log(sortedCompanies); */

// Other task : now we sort ages

const sortAges = ages.sort((a, b) => a - b);

console.log(sortAges)



// ? - is a returnary operator. With that we put a condition.
// if that's true then 1,
// : <- this means else, -1


//reduce

// reduce can get really difficult, here we just did some easier exercises




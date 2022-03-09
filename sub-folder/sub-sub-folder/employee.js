'use strict'

import { Person } from './person.js'

export class Employee extends Person {

    #salary = 0;
    #hireDate = new Date();

    constructor(name, dob, salary, hireDate) {
        super(name, dob);
        if (salary > 0) {
            this.#salary = salary;
        }
        if (hireDate instanceof Date) {
            this.#hireDate = hireDate;
        }
    }

    getSalary() {
        return this.#salary;
    }

    getHireDate() {
        return this.#hireDate;
    }

    doJob(jobTitle) {
        console.log(`${this.getName()} is a ${jobTitle} who earns ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(this.#salary)}`)
    }
}
'use strict'

export class Person {

    #name = '';
    #dateOfBirth = null;

    constructor(name, dob) {
        this.#name = name;
        if (dob instanceof Date) {
            this.#dateOfBirth = dob;
        } else {
            this.#dateOfBirth = new Date();
            console.error('Date of birth is invalid');
        }
    }

    getName() {
        return this.#name;
    }

    getDateOfBirth() {
        return this.#dateOfBirth;
    }

    setName(val) {
        this.#name = val;
    }

    setDateOfBirth(val) {
        if (val instanceof Date) {
            this.#dateOfBirth = val;
        } else {
            throw new Error('Not Date object');
        }
    }

    toString() {
        return `{Name: ${this.#name}, DateOfBirth: ${this.#dateOfBirth.toISOString().slice(0,10)}}`;
    }
}
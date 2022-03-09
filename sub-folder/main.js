'use strict'

import { Person } from './sub-sub-folder/person.js';
import { Employee } from './sub-sub-folder/employee.js';

let persons = [
    new Person('Ana Smith', new Date(1998,11,15)),
    new Person('Bob Jone', new Date(1945,10,16)),
    new Person('Carlos Slim Helu', new Date(1976,8,24))
];

persons.forEach( p => console.log(p.toString()));
console.table(persons.map(p => p.toString()));

let emp = new Employee('Jim Hanson', new Date(1998,11,15), 245990, new Date());
emp.doJob('Software Engineer');

"use strict";
class Person {
    constructor(name, birthDate) {
        this._name = name;
        this._birthDate = birthDate;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if (newName.length < 3) {
            throw new Error('Name must be a least 3 characters long');
        }
        if (newName.length < 3) {
            this._name = newName;
        }
    }
    get birthDate() {
        return this._birthDate;
    }
    set birthDate(newBirthDate) {
        this.validateBirthDate(newBirthDate);
        this._birthDate = newBirthDate;
    }
    static getAge(value) {
        const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
        const yearMs = 31536000000; // 1 ano = 31536000000 milissegundos
        return Math.floor(diff / yearMs);
    }
    validateBirthDate(value) {
        if (value.getTime() > new Date().getTime()) {
            throw new Error('A data de nascimento não pode ser uma data no futuro.');
        }
        if (Person.getAge(value) > 120) {
            throw new Error('A pessoa deve ter no máximo 120 anos.');
        }
    }
}
// const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
// const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));
// console.log(maria);
// console.log(luiza);
class Student extends Person {
    constructor(name, birthDate, enrollment, examsGrades, assignmentsGrades) {
        super(name, birthDate);
        this._enrollment = enrollment;
        this._examsGrades = examsGrades;
        this._assignmentsGrades = assignmentsGrades;
    }
    get enrollment() {
        return this._enrollment;
    }
    set enrollment(value) {
        this._enrollment = value;
    }
    gradeSum() {
        return (this._examsGrades.reduce((a, b) => a + b, 0) +
            this._assignmentsGrades.reduce((a, b) => a + b, 0));
    }
    avgGrade() {
        return (this.gradeSum() /
            (this._examsGrades.length + this._assignmentsGrades.length));
    }
}
const student1 = new Student('Joao', new Date('2005/10/02'), 170490, [1, 2, 3, 4], [5, 6]);
console.log(student1.gradeSum());
console.log(student1.avgGrade());
console.log(student1.enrollment);
const testInterfaceEmployee = {
    registration: 'FNC1234567891011',
    salary: 1200.0,
    admissionDate: new Date(),
    generateRegistration() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `FNC${randomStr}`;
    },
};
console.log(testInterfaceEmployee);
class Subject {
    constructor(name) {
        this._name = '';
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this.validateName(value);
        this._name = value;
    }
    validateName(value) {
        if (value.length < 3)
            throw new Error('Name must be at least 3 charcaters long');
    }
}
const math = new Subject('Mathh');
console.log(math.name);
math.name = 'Math';
console.log(math.name);
class Teacher extends Person {
    constructor(name, // nao preciso declarar, atributo ja vem da classe Person
    birthDate, // nao preciso declarar, atributo ja vem da classe Person
    _registration, // Preciso declarar para respeitar o contrato da interface, mas como mudei pra private, coloco '_' na frente e adiciono get e set
    _salary, // Preciso declarar para respeitar o contrato da interface, mas como mudei pra private, coloco '_' na frente e adiciono get e set
    admissionDate, // Preciso declarar para respeitar o contrato da interface, mantenho publico, logo mantenho tambem o nome original e nao preciso de get e set
    _subject) {
        super(name, birthDate);
        this._registration = _registration;
        this._salary = _salary;
        this.admissionDate = admissionDate;
        this._subject = _subject;
        this.subject = _subject;
        this.salary = _salary;
        this.registration = _registration;
    }
    get subject() {
        return this._subject;
    }
    set subject(value) {
        this._subject = value;
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        if (value < 0)
            throw new Error('Salary cannot be negative');
        this._salary = value;
    }
    get registration() {
        return this._registration;
    }
    set registration(value) {
        this._registration = value;
    }
    generateRegistration() {
        return 'teste';
    }
}
const teacher1 = new Teacher('Berna', new Date(), '1111', 5000, new Date(), new Subject('Math'));
console.log(teacher1);

class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }
  get name(): string {
    return this._name;
  }
  set name(newName: string) {
    if (newName.length < 3) {
      throw new Error('Name must be a least 3 characters long');
    }
    if (newName.length < 3) {
      this._name = newName;
    }
  }
  get birthDate(): Date {
    return this._birthDate;
  }
  set birthDate(newBirthDate: Date) {
    this.validateBirthDate(newBirthDate);
    this._birthDate = newBirthDate;
  }
  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }
  private validateBirthDate(value: Date): void {
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
  private _enrollment: number;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];
  constructor(
    name: string,
    birthDate: Date,
    enrollment: number,
    examsGrades: number[],
    assignmentsGrades: number[]
  ) {
    super(name, birthDate);
    this._enrollment = enrollment;
    this._examsGrades = examsGrades;
    this._assignmentsGrades = assignmentsGrades;
  }

  get enrollment(): number {
    return this._enrollment;
  }

  set enrollment(value: number) {
    this._enrollment = value;
  }

  gradeSum(): number {
    return (
      this._examsGrades.reduce((a: number, b: number) => a + b, 0) +
      this._assignmentsGrades.reduce((a: number, b: number) => a + b, 0)
    );
  }

  avgGrade(): number {
    return (
      this.gradeSum() /
      (this._examsGrades.length + this._assignmentsGrades.length)
    );
  }
}

const student1 = new Student(
  'Joao',
  new Date('2005/10/02'),
  170490,
  [1, 2, 3, 4],
  [5, 6]
);

console.log(student1.gradeSum());
console.log(student1.avgGrade());
console.log(student1.enrollment);

interface Employee {
  registration: string;
  salary: number;
  admissionDate: Date;

  generateRegistration(): string;
}

const testInterfaceEmployee: Employee = {
  registration: 'FNC1234567891011',
  salary: 1200.0,
  admissionDate: new Date(),

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ''
    );

    return `FNC${randomStr}`;
  },
};

console.log(testInterfaceEmployee);

class Subject {
  private _name = '';
  constructor(name: string) {
    this.name = name;
  }

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }
  private validateName(value: string): void {
    if (value.length < 3)
      throw new Error('Name must be at least 3 charcaters long');
  }
}

const math = new Subject('Mathh');
console.log(math.name);
math.name = 'Math';
console.log(math.name);

class Teacher extends Person implements Employee {
  constructor(
    name: string, // nao preciso declarar, atributo ja vem da classe Person
    birthDate: Date, // nao preciso declarar, atributo ja vem da classe Person
    private _registration: string, // Preciso declarar para respeitar o contrato da interface, mas como mudei pra private, coloco '_' na frente e adiciono get e set
    private _salary: number, // Preciso declarar para respeitar o contrato da interface, mas como mudei pra private, coloco '_' na frente e adiciono get e set
    public admissionDate: Date, // Preciso declarar para respeitar o contrato da interface, mantenho publico, logo mantenho tambem o nome original e nao preciso de get e set
    private _subject: Subject
  ) {
    super(name, birthDate);
    this.subject = _subject;
    this.salary = _salary;
    this.registration = _registration;
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get salary() {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error('Salary cannot be negative');
    this._salary = value;
  }

  get registration() {
    return this._registration;
  }

  set registration(value) {
    this._registration = value;
  }

  generateRegistration(): string {
    return 'teste';
  }
}

const teacher1 = new Teacher(
  'Berna',
  new Date(),
  '1111',
  5000,
  new Date(),
  new Subject('Math')
);

console.log(teacher1);

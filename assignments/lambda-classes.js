// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects() {
        console.log(this.favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

const Leslie = new Instructor({
    name: 'Leslie Rodriguez',
    age: 23,
    location: 'Texas',
    specialty: 'Back-end',
    favLanguage: 'JavaScript',
    catchPhrase: "You guys are awesome."
});

const Brit = new Instructor({
    name: 'Brit Hemming',
    age: 27,
    location: 'Canada',
    specialty: 'Front-end',
    favLanguage: 'CSS',
    catchPhrase: 'I really encourage you all to do this.'
});

const Edward = new Student ({
    name: 'Edward',
    age: '18',
    location: 'America',
    previousBackground: 'Steel worker',
    className: 'Full Stack Web',
    favSubjects: ['JavaScript', 'CSS', 'HTML']
});

const Claire = new Student ({
    name: 'Claire',
    age: '28',
    location: 'Virginia',
    previousBackground: 'Teacher',
    className: 'Data Science',
    favSubjects: ['SQL']
});

const Amanda = new ProjectManager({
    name: 'Amanda Jenkins',
    age: 23,
    location: 'California',
    specialty: 'Back-end',
    favLanguage: 'JavaScript',
    catchPhrase: 'Push it to the limit',
    gradClassName: 'Programming 301',
    favInstructor: 'Chandler Bing'
});

const Syd = new ProjectManager({
    name: 'Syd Crumley',
    age: 25,
    location: 'Canada',
    specialty: 'Front-end',
    favLanguage: 'HTML',
    catchPhrase: 'I feel the need, the need for speed',
    gradClassName: 'Programming 201',
    favInstructor: 'Brit Hemming'
});

console.log(Leslie.catchPhrase);
console.log(Brit.favLanguage);
console.log(Claire.className);
console.log(Amanda.gradClassName);
Leslie.speak();
Brit.demo('Math');
Brit.grade(Edward, 'Math');
Edward.listsSubjects();
Edward.PRAssignment('git');
Claire.sprintChallenge('React');
Edward.speak();
Syd.standUp('web22');
Amanda.debugsCode(Edward,'Javascript');
Amanda.speak();
Amanda.demo('LESS');
Syd.grade(Claire, 'VS Code');
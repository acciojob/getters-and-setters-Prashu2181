//complete this code
class Person {
	constructor(name, age){
		this._n = name;
		this._a = age;
	}
	get name(){
		return this._n;
	}
	get age(){
		return this._a;
	}
	set age(newAge){
		this._a = newAge;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

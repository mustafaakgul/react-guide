class Personal{

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    save(){
        console.log("Saved" + this.name + " " + this.surname); // this means this object, an object that is in the scope
    }

    saveWithStringLiteral(){
        console.log(`Saved ${this.name} ${this.surname}`); // this means this object, an object that is in the scope
    }
}

//Personal.save(); // error, cuz of it must be create an object to use the class because its referense type
// so every object is independent from each other

const personal = new Personal(); // wrong init, cuz of it must be pass the parameters to the constructor, there is no empty constuctor
personal.name = "Mehmet"; console.log(personal.name); // this usage is not true, this name is not same as name in the constructor
// js allows that

const personal2 = new Personal("Mehmet", "Kara"); // true init
personal2.name = "new";
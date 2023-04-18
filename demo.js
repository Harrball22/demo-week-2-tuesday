const person = {
    firstName: "Peter",
    lastName: "Parker",
    age: 67,
    hometown: "Lehi",
    hobbies: ["fishing", "runnig", "camping"],
    favMovies: {
        name: "Spiderman",
        rating: 5,
        year: "2000"
    },
    favFood: [
        {
            name: "pizza",
            size: "large",
            topping: ["pepperoni", "pineapple"]
        },
        {
            name: "noodles",
            size: "large",
            topping: ["cheese", "sausage"]
        }
    ]
}

let {hometown, firstName} = person
console.log(hometown)
console.log(firstName)


class Dog {
    constructor(name, breed, age){
        this.name = name
        this.breed = breed
        this.age = age
    }

    greeting(){
        console.log(`Hello, my name is ${this.name}. I am ${this.breed}. I am ${this.age} years old`)
    }
}

let dog1 = new Dog("lassie", "collie", 5)
let dog2 = new Dog("john", "lab", 8)

dog1.greeting()
dog2.greeting()

for(let key in dog1){
    console.log(dog1[key])
}

class Puppy extends Dog {
    constructor(name, breed, age, trainingLevel){
        super(name, breed, age)

        this.trainingLevel = trainingLevel
    }

    levelUp(num){
        this.trainingLevel += num
    }
}

let puppy1 = new Puppy("jane", "husky", 3, 20)

console.log(puppy1)

puppy1.levelUp(5)
console.log(puppy1.trainingLevel)
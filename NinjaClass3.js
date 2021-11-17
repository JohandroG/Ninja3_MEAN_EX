class Ninja{

    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
		this.strength = 3;
    }

        showStats() {
            console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
            return this;
        }

        kick(ninja){
            ninja.health = ninja.health - this.strength * 15;
            console.log(ninja.name, "was kicked by", this.name ,"and lost", this.strength * 15 , "Health!")
        }

        punch(ninja){
            ninja.health = ninja.health - 5;
            console.log(ninja.name, "was punched by", this.name ,"and lost 5 Health!")
        }

        sayName() {
			console.log("My name is " + this.name);
			return this;
		}

		drinkSake(){
			this.health += 10;
			return this;
		}

}

const ninja = new Ninja("Juanito");
const ninja2 = new Ninja("Pedro");
		ninja.sayName();
        ninja.kick(ninja2);
        ninja.punch(ninja2);
		ninja2.showStats();
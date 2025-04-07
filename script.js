// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat"
//     }
//     }
//   adventurer.inventory.forEach(item => console.log(item));


const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
      companion: {
        name: "Frank",
        type: "Flea",
        belongings: ["small hat", "sunglasses"]
      }
    },
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  };
  
  // Testing the roll method a few times
  adventurer.roll();
  adventurer.roll();
  adventurer.roll(2); // Testing with a modifier
  
  console.log(adventurer.companion.companion); // Logs Frank's details
  
  // Base class representing any character in the game
  class Character {
    static MAX_HEALTH = 100;
    constructor(name) {
      this.name = name; //Every character has a name
      this.health = Character.MAX_HEALTH;//Default health is 100 for all character
      this.inventory = [];//Every character has an inventory that starts empty
    }
  
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  
    //Add a describe() method to character
    describe() {
      const items = this.inventory.length > 0 ? this.inventory.join(", ") : "nothing";
      console.log(`${this.name} has ${this.health} health and carries: ${items}.`);
    }
  }
  
  //   //Creates main character robin
  //   const robin = new Character("Robin");
  // robin.inventory = ["sword", "potion", "artifact"];//Added items to their inventory
  
  //created Robins cat Leo
  //robin.companion = new companion("Frank", "Flea");
  // robin.companion = new Character("Leo");
  // robin.companion.type = "Cat";
  
  // robin.companion.companion = new Character("Frank");
  // robin.companion.companion.type = "Flea";
  // robin.companion.companion.inventory = ["small hat", "sunglasses"];
  
  class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"]; //Added roles part 4
    constructor(name, role) {
      super(name);
if (!Adventurer.ROLES.includes(role)) {
    throw new Error(`Invalid role: ${role}.`)
}

      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
  
    // Adventurers have the ability to scout ahead of them.
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }
  
  //Create companion class
  class Companion extends Character {
    constructor(name, type) {
      super(name); //Super pulls name,health, inventory from parent (character)
      this.type = type; //Type is specific to companion
      this.strength = 5;
    }
  
    assist() {
      console.log(`${this.name} the ${this.type} is here!`);
      this.roll(1); //companions roll with a small bonus
    }
  }
  
  const robin = new Adventurer("Robin", "Ranger");
  robin.inventory.push("sword", "potion", "artifact");
  
  robin.companion = new Companion("Leo", "Cat");
  robin.companion.companion = new Companion("Frank", "Flea");
  robin.companion.companion.inventory = ["small hat", "sunglasses"];
  
  // Test the roll method for each character
  robin.roll();                         // Robin rolls a d20
  robin.companion.roll();              // Leo rolls a d20
  robin.companion.companion.roll(2);   // Frank rolls a d20 with a +2 modifier
  
  //d20 is shorthand for a "20 sided die"
  //robin.companion.companion.roll(2) the 2 is a modify that +2 to "die roll"
  // Test the describe method to output character info
  robin.describe();
  robin.companion.describe();
  robin.companion.companion.describe();
  
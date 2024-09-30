/* Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements. */

//Dogs class
    //Breed 

class Dog{ //class named dog with one property "breed"
    constructor(breed){
        this.breed = breed;
    }
}
//Class menu
    //class array
    //Add dogs
    //View dogs
    //delete dogs
class Menu{ 
    constructor(){
        this.dogs=[]; //array
    }

//see menu
showMainMenu(){
    return prompt(`
        Main Menu:
        0) Add a dog
        1) Delete a dog
        2) Show all dogs
        3) Exit menu
        `);
}
    

//add dogs
addDog() {
    let dogBreed = prompt("Enter dog breed:"); //collects input
    this.dogs.push(new Dog(dogBreed)); //pushes the new dog to the array
}
//show dogs
showDogs(){
    let showDogs = ' ';
    for (let i=0; i < this.dogs.length; i++) { //iterates and adds each dog to the showDogs.
        showDogs += `
        ${i}) ${this.dogs[i].breed}`
    }
    alert(`
        Dog breeds:
        ${showDogs}
        `);
}
//delete dogs
deleteDog() {
    let dogIndex = prompt("Enter dog to delete:"); 
    this.dogs.splice(dogIndex, 1);
}
//start menu
start(){
    let selection = this.showMainMenu();
    while(selection != 3){ //continues until the user selects 3(exit)

        switch(selection){ //determines what function to call based on the user's selection
            case "0": this.addDog();
            break;

            case "1": this.deleteDog();
            break;

            case "2": this.showDogs();
            break;

            default: selection = 0;
        }
        selection = this.showMainMenu();
    }
    alert("Catch you later, hooman!")
}

} 


//Start the menu

let menu = new Menu(); 



menu.start();

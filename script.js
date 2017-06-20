function addNewAnimal(id, name, age, sex, weight, classification)
{
  var zooAnimal = {};
  zooAnimal.id = id;
  zooAnimal.name = name;
  zooAnimal.age = age;
  zooAnimal.sex = sex;
  zooAnimal.weight = weight;
  zooAnimal.classification = classification;
  return zooAnimal;
}

var tiger1 = addNewAnimal("tiger", "Tigger", 38, "female", "189.3 lbs", "mammal");
var tiger2 = addNewAnimal("tiger", "Doodle", 13, "male", "102.8 lbs", "mammal")
var bear1 = addNewAnimal("bear", "Burly", 23, "male", "244 lbs", "mammal");
var turtle1 = addNewAnimal("turtle", "Slowpoke", 89, "female", "23.4 lbs", "reptile");

var animalArray = [tiger1, tiger2, bear1, turtle1];

//Above is the zoo animals and the array they are in.

var zooFinish = function()
{
  alert("Thank you for visiting the Grant Park Zoo! We hope you enjoyed your time with us.\n\nCome back soon!");
}

var zooAddAnimal = function()
{
  var animalAdd = prompt("What kind of animal would you like to add?\n\nIf you wish you stop adding, just type 'back'.");
  if (animalAdd === "back")
    {
      startZoo();
    }
  else
    {
      animalArray.push(animalAdd);
      console.log(animalArray);
      zooAddAnimal();
    }
}

var zooSearchByType = function()
{
  var typeSearch = prompt("What TYPE of animal do you want to learn about?\n\nTiger\n\nBear\n\nTurtle\n\nIf you are done learning about our animals, type 'Back' to go back to index.")
  var typeSearchUpper = typeSearch.toUpper;
  if (typeSearch === "tiger")
    {
      alert("The tigers in our zoo are " + tiger1.name + " and " + tiger2.name + ". " + tiger1.name + " is " + tiger1.age + "-years-old, is a " + tiger1.classification + ", and weighs " + tiger1.weight + ". " + tiger2.name + " is " + tiger2.age + "-years-old, is a " + tiger2.classification + ", and weighs " + tiger2.weight + ". ");
      zooSearchByType();
    }
  else if (typeSearch === "bear")
    {
      zooSearchByType();
    }
  else if (typeSearch === "turtle")
    {
      zooSearchByType();
    }
  else if (typeSearch === "back")
    {
      startZoo();
    }
  else
    {
      alert("We don't have any animals with that name! Please try again.");
      zooSearchByType();
    }
}

var zooSearch = function()
{
  var nameSearch = prompt("What is the NAME of the animal you would like to learn about?\n\nTigger\n\nDoodle\n\nBurly\n\nSlowpoke\n\nIf you are done learning about our animals, type 'Back' to go back to index.");
  var nameSearchUpper = nameSearch.toUpper;
  if (nameSearch === "tigger")
    {
      alert("This is " + tiger1.name + ". They are a " + tiger1.age + "-year-old " + tiger1.sex + " " + tiger1.id + ". They are classified as a " + tiger1.classification + " and weigh " + tiger1.weight + "!");
      zooSearch();
    }
  else if (nameSearch === "doodle")
    {
      alert("This is " + tiger2.name + ". They are a " + tiger2.age + "-year-old " + tiger2.sex + " " + tiger2.id + ". They are classified as a " + tiger2.classification + " and weigh " + tiger2.weight + "!");
      zooSearch();
    }
  else if (nameSearch === "burly")
    {
      alert("This is " + bear1.name + ". They are a " + bear1.age + "-year-old " + bear1.sex + " " + bear1.id + ". They are classified as a " + bear1.classification + " and weigh " + bear1.weight + "!");
      zooSearch();
    }
  else if (nameSearch === "slowpoke")
    {
      alert("This is " + turtle1.name + ". They are a " + turtle1.age + "-year-old " + turtle1.sex + " " + turtle1.id + ". They are classified as a " + turtle1.classification + " and weigh " + turtle1.weight + "!");
      zooSearch();
    }
  else if (nameSearch === "back")
    {
      startZoo();
    }
  else
    {
      alert("It seems we don't have an animal by that name! Please try again.");
      zooSearch();
    }
}

var zooList = function()
{
  alert("Animals go here.");
  startZoo();
}

var startZoo = function()
{
  var index = prompt("Please enter the keyword next to one of the options below to explore!\n\n------------------\n\nList - Lists all animals in the zoo.\n\nSearch - Search for for details about a particular animal by its name.\n\nType - Search for all the names of the animals under a specific type.\n\nAdd - Add a new animal to our zoo!\n\n------------------\n\nEnd - Finish your adventure and leave the zoo.");
  var indexUpper = index.toUpperCase();
  if (index === "list")
    {
      zooList();
    }
  else if (index === "search")
    {
      zooSearch();
    }
  else if (index === "type")
    {
      zooSearchByType();
    }
  else if (index === "add")
    {
      zooAddAnimal();
    }
  else if (index === "end")
    {
      zooFinish();
    }
  else
    {
      alert("I'm afraid you didn't answer a valid entry, my friend! Please try again!")
      startZoo();
    };
}
alert("Welcome to the Grant Park Zoo!\n\nWe hope you enjoy your tour of our exotic animals.");
startZoo();
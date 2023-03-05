
class Rocks { // class
  constructor(name, rockcat) { // is used to create the instance of the class.create new object &set values
  this.name = name; //instance of the class
  this. rockcat = rockcat ; // rockcat = rock category 
  }
  
  describe() { //allows you to gather your tests into separate groupings within the same file, even multiple nested levels
  //console.log(`${this.name} plays ${this.position}`) 
  return `${this.name} Type of rock: ${this.rockcat}`;
  }
  }
  class Types { 
  constructor(name) {
  this.name = name;
  this.rockobjects = []; //rock objects  
  }
  
  addRock(rockp) { // add a single rock specimen. used to add a specific element into a Set collection
  if (rockp instanceof Rocks) {
  this.rockobjects.push(rockp); 
  } else {    //constructor creates an error object.
  throw new Error(`You can only add an instance of Rocks. 
  argument is not a rock : ${rockp}`);
  }
  }
  
  describe() {
  return `${this.name} has ${this.rockobjects.length} Rock specimen:
  
  `;
  }
  }
  class Menu { // what drives the application and our choices
  constructor() {
  this.teamRocCat = []; //TeamRocCat=  rock caterogry 
  this.selectRocks = null; // manage one group at a time selected rock group= selectRocks
  }
  
  start() { // entry point to application This is the function that is called when you click run
  let selection = this.showMainMenuOptions(); 
  while (selection != 0) { //while creates a loop, executes a specified statement as the test condition evaluates to true.
  switch(selection) {  //switch statement executes a block of code depending on different cases.
  case '1' :
  this.createNewRockGroup();
  break;
  case '2' :
  this.viewRockGroup();
  break;
  case '3' :
  this.deleteRockGroup();
  break;
  case '4' :
  this.displayRockGroup();
  break;
  default:
  selection = 0;  //selection statement uses a condition to select, or determine, the statement that is to be executed. 
  }
  selection = this.showMainMenuOptions();
  }
  alert('Goodbye!');
  }
  
  // note 66 The return statement ends function execution and specifies a value to be returned to the function caller.
  showMainMenuOptions() {  // prompt note 66 instructs the browser to display a dialog with an optional message
  return prompt(`  
  0) exit
  1) create a new rock group
  2) view a rock group
  3) delete a rock group
  4) display all rock groups
  `);
  }
  
  showRocksMenuOptions(typeInfo) {
  return prompt(`
  0) back
  1) add a new rock
  2) delete a rock
  -----------------
  ${typeInfo} 
  `);
  /* ${ It's used to reference a variable within string */
  }
  
  displayRockGroup() {
  let teamRock = '';
  for (let i = 0; i < this.teamRocCat.length; i++) {
  teamRock += i+ ') ' + this.teamRocCat[i].name + '\n';
  }
  alert(teamRock);
  }
  
  createNewRockGroup() {
  let name = prompt('Enter name for new rock group type: ');
  this.teamRocCat.push(new Types (name));
  }
  
  viewRockGroup() {
  let index = prompt("Enter the index number of the rock type group you want to view:");
  if (index > -1 && index < this.teamRocCat.length) {
  this.selectRocks = this.teamRocCat[index];
  let description = 'rock type group: ' + this.selectRocks.name + '\n';
  description += ' ' + this.selectRocks.describe() + '\n ';
  for (let i = 0; i < this.selectRocks.rockobjects.length; i++) { //rock category & rock object

  // description +=
  //  i + 
  //  ') ' + 
  //  this.selectRocks.rockobjects[i].name + 
  //  ' - ' +
  //  this.selectRocks.rockobjects[i].rockcat  + 
  //  '\n';

  description +=
   i + ') ' + this.selectRocks.rockobjects[i].describe() + '\n';
  }
  let selection1 = this.showRocksMenuOptions(description);
  switch (selection1) {
  case '1' :
  this.addNewRock();
  break;
  case '2' :
  this.deleteRock();
  }
  } // validate user input
  }
  deleteRockGroup() {
  let index = prompt(
    'Enter the index of the rock type group that you wish to delete: '
    );
  if (index > -1 && index < this.teamRocCat.length) {
  this.teamRocCat.splice(index,1);
  }
  }
  
  
  addNewRock() {
  let name = prompt('Enter name for new rock: ');
  let rockcat= prompt('Enter name of new rock description : ');
  this.selectRocks.rockobjects.push(new Rocks(name, rockcat));
  // this.selectRocks.addRock(new Rocks(name,rockcat));
  }
  
  deleteRock() {
  let index = prompt('Enter the index number of the rock that you wish to delete: ');
  if (index > -1 && index < this.selectRocks.rockobjects.length) { 
    this.selectRocks.rockobjects.splice(index,1);
  }
  }
  }
  let menu = new Menu(); //a graphical user interface control  4 navigation header for web app or site
  menu.start();
  




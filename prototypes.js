var task = function (name){
    this.name = name;
    this.completed = false;

    //this.complete = function() {
      //  console.log('Task completed: ' + this.name);
     //   this.completed =  true;
    //}

    //this.save = function(){
    //    console.log('Saving task' + this.name);
    //}
}
task.prototype.complete = function() {
    console.log('Completing: ' + this.name);
    this.completed = true;
}; 

task.prototype.save = function() {
    console.log('Saving: '+ this.name);
}

var task1 = new task('Constructors');
var task2 = new task('Prototypes');

task1.complete();
task2.save();
module.export = task; //and in main.js var task = require('./task');

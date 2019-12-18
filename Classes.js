'use strict' //using this you can use classes in JS with ECMAScript5
class Task {
    constructor(name){
        this.name = name;
        this.comnpleted = false;
    };
    complete() {
        console.log('Completing: ' + this.name);
        this.comnpleted = true;
    };
    save() {
        console.log('Saving:' + this.name);
    };
}
var task1 = new task1('constructor');
var task2 = new task2('prototype');
task1.complete();
task2.save();

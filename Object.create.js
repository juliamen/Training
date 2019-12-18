
 Task.prototype.save = function() {

 }

 var myTask = newTask('Legacy');
 myTask.complete();
 myTask.save();

 var UrgentTask = function(name, priority){
     Task.call(this, name);
     this.priority = priority;
 };

 UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.notify = funtion(){
    console.log('Notifying');
};

 UrgentTask.prototype.save = function(){
     this.notify(); 
     console.log('saving, but first..');
     Task.prototype.save.call(this)
 }

 var ut = new UrgentTask('urgent', 1);
 ut.complete();
 ut.save();
 console.log(ut);

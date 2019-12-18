//Facade Pattern is used to provide a simplified interface to a complicated system.
var Task = funtion(data){
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

var TaskService = function() {
    return{
        complete: function(task) {
            task.completed = true;
            console.log('Completing:' + task.name);

        }, 
        setCompleteDate: function(task){
            task.setCompleteDate = new Date();
            console.log(task.name + 'completed on ' + task.setCompleteDate);
        },
        notifyCompletion: function(task, user){
            console.log('Notyfing' + user + 'of the completion of'+ task.name);
        },
        save: function(task){
            console.log('Saving' + task.name);
        }
    }
}();

var TaskServiceWrapper = function(){
var completeAndNotify = function(task) {
    TaskService.complete(myTask);
    if(myTask.completed==true){
        TaskService.setCompleteDate(myTask);
        TaskService.notifyCompletion(myTask, myTask.user);
        TaskService.save(myTask);
    }
}

    return { 
        completeAndNotify: completeAndNotify}
}();

var myTask = new Task([
    name:'myTask', 
    priority: 1,
    project: 'Courses',
    user: 'John',
    completed: false
]);

TaskServiceWrapper.completeAndNotify(myTask);
console.log(myTask);

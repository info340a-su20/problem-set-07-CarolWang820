'use strict';

/* your code goes here! */
class Task {
  constructor(description, complete) {
    this.description = description;
    this.complete = complete;
  }

  render() {
    let ele = document.createElement('li');
    ele.textContent = this.description;
    if (this.complete) {  
      ele.classList.add('font-strike');
    }

    ele.addEventListener('click', () => {
      this.toggleFinished();
      ele.classList.toggle('font-strike');
    })

    return ele;
  }

  toggleFinished() {
    this.complete = !this.complete;  
  }
}

class TaskList {
  constructor(task) {
    this.tasks = task;  
  }

  addTask(description) {
    let newT = new Task(description, false);
    this.tasks.push(newT); 
  }

  render() {
    let ele = document.createElement('ol');
    this.tasks.forEach((t) => {
      let e = t.render();
      ele.appendChild(e);
    })
    return ele;
  }
}


class NewTaskForm {
  constructor(submitted) {
    this.submitCallback = submitted;
  }

  render() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    input.classList.add('form-control', 'mb-3');
    input.setAttribute('placeholder', "What else do you have to do?");
    form.appendChild(input);
    
    let button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = "Add task to list";
    form.appendChild(button);

    button.addEventListener('click', (event) => {
      event.preventDefault();

      let inputValue = input.value;

      let whatToDo = this.submitCallback;
      whatToDo(inputValue); 
    })

    return form;
  }
}

class App {
  constructor(parent, list) {
    this.parent = parent;
    this.taskList = list;
  }

  render() {
    let list = this.taskList.render();
    this.parent.appendChild(list);

    let who = (arg) => this.addTaskToList(arg); 
    let formObj = new NewTaskForm(who);
    this.parent.appendChild(formObj.render());
  }

  addTaskToList(description) {
    this.taskList.addTask(description);
    this.parent.innerHTML = "";
    this.render();
  }
}


let aTask = new Task("Make some classes", true);
let bTask = new Task("Arrow some functions", false);

let appObject = new App(document.querySelector('#app'), new TaskList([aTask, bTask]));
appObject.render();


//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof Task !== 'undefined') 
    module.exports.Task = Task;
  if(typeof TaskList !== 'undefined') 
    module.exports.TaskList = TaskList;
  if(typeof NewTaskForm !== 'undefined') 
    module.exports.NewTaskForm = NewTaskForm;
  if(typeof App !== 'undefined') 
    module.exports.App = App;
}

import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  tasks:Task[] = [];
  newTaskName: string = '';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
      this.loadTask();
  }

  loadTask(): void{
    this.taskService.getTasks().subscribe((data)=> (this.tasks = data))
  }


  addTask(): void{
    if(this.newTaskName.trim()){
      const newTaskName: Task = { name: this.newTaskName.trim(), completed: false }
      this.taskService.addTask(newTaskName);
      this.loadTask();
      this.newTaskName = '';
      }
  }

deleteTask(task: Task): void{
  this.taskService.deleteTask(task);
  this.loadTask();
}


toggleCompletion(task: Task): void {
  this.taskService.toggleTaskCompletion(task);
  this.loadTask();
}



}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Task {
  name: string;
  completed: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    { name: 'Tâche 1', completed: false },
    { name: 'Tâche 2', completed: true },
  ];

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter((t) => t !== task);
  }

  toggleTaskCompletion(task: Task): void {
    const foundTask = this.tasks.find((t) => t === task);
    if (foundTask) {
      foundTask.completed = !foundTask.completed;
    }
  }

  constructor() { }
}

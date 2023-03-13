import { Component } from '@angular/core';
import {Task} from '../task.model'
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
  tasksList: Task[] = [];
  constructor(tasksService: TasksService) {
    this.tasksList = tasksService.getTasks()
    console.log(this.tasksList)
  }

}

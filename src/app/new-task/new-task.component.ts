import { Component } from '@angular/core';
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
taskTitle: string = '';
taskContent:string ='';

private tasksService: TasksService;

constructor(tasksService:TasksService) {
  this.tasksService =tasksService;
}

addNewTask()
{
  if(this.taskTitle!= "" && this.taskContent!= "")
  {
    this.tasksService.addTask(this.taskTitle,this.taskContent)
    this.taskContent ='';
    this.taskTitle ='';
  }

}
}

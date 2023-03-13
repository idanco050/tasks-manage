import {Task} from './task.model'
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Injectable()
export class TasksService {
  private tasks: Task[] = [new Task('c# project', 'gay ronen'), new Task('statistics project', 'nili beck')];
constructor(private http: HttpClient) {
}
  addTask(title: string, content: string) {
  this.http.post("http://localhost:5000",{title:title,content:content}).subscribe(
  );
    const newTask = new Task(title, content);
    this.tasks.push(newTask);
    console.log(`New task "${title}" added.`);
  }

  getTasks() {
    return this.tasks;
  }
}

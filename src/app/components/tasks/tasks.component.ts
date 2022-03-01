import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
// import { TASKS } from 'src/app/mock-tasks';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] | undefined;
  constructor(private readonly taskService: TaskService) {}

  ngOnInit(): void {
    // this.tasks = this.taskService.getTasks();
    this.taskService.getTasks().subscribe((data) => (this.tasks = data));
  }
}
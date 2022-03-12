import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
// import { TASKS } from 'src/app/mock-tasks';
import { TaskService } from 'src/app/services/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] | undefined;
  constructor(private readonly taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => (this.tasks = data));
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks?.filter((t) => t.id !== task.id);
    });
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }
}

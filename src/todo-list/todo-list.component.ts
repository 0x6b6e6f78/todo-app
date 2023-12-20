import {Component} from '@angular/core';
import {DataTableService} from "../services/DataTableService";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule} from "@angular/forms";
import {CategoryListComponent} from "../category-list/category-list.component";
import {Priority, Status, Todo} from "../objects/todo";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    MatIconModule,
    MatTooltipModule,
    NgIf,
    FormsModule,
    DatePipe,
    CategoryListComponent
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  constructor(public dataTableService: DataTableService) {
  }

  nextStatus(todo: Todo) {
    todo.nextStatus();
  }

  getStatusTooltip(todo: Todo): string {
    return todo.status.tooltip;
  }

  protected readonly Priority = Priority;
  protected readonly Status = Status;
}

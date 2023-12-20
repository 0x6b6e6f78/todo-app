import {Component} from '@angular/core';
import {DataTableService} from "../services/DataTableService";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {Category, Cell, Priority, Status, Todo} from "../obejcts/todo";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule} from "@angular/forms";
import {CategoryListComponent} from "../category-list/category-list.component";

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
    this.dataTableService.sort();
  }

  getStatusTooltip(todo: Todo): string {
    return todo.status.tooltip;
  }

  protected readonly Status = Status;
  protected readonly Priority = Priority;
}

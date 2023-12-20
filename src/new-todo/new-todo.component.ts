import {Component, Input} from '@angular/core';
import {DatePipe, NgForOf} from "@angular/common";
import {DataTableService} from "../services/DataTableService";
import {Category, Priority, Todo} from "../objects/todo";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-todo',
  standalone: true,
  imports: [
    NgForOf,
    MatIconModule,
    MatTooltipModule,
    FormsModule,
    DatePipe
  ],
  templateUrl: './new-todo.component.html',
  styleUrl: './new-todo.component.css'
})
export class NewTodoComponent {
  name = "";
  until: Date = new Date();
  category = this.dataTableService.categories[0];
  priority = Priority.UNASSIGNED;

  constructor(public dataTableService: DataTableService) {
  }

  public create() {
    if (this.name.length == 0) {
      this.dataTableService.messageBoxMessage = "Der Name darf nicht leer sein";
      return;
    }
    let todo = new Todo(this.dataTableService.findNextId(), this.name, this.until, this.category!);
    todo.priority = this.priority;
    this.dataTableService.add(todo);
  }

  public defPrio() {
    this.priority = Priority.UNASSIGNED;
    return "checked";
  }

  protected readonly Priority = Priority;
}

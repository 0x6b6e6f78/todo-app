import {Component, Input} from '@angular/core';
import {DatePipe, NgForOf} from "@angular/common";
import {DataTableService} from "../services/DataTableService";
import {Category, Priority, Todo} from "../obejcts/todo";
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
  name: string = "";
  until: Date = new Date();
  category: Category | undefined = this.dataTableService.categories[0];
  priority: {button: string, tooltip: string} = Priority.UNASSIGNED;

  constructor(public dataTableService: DataTableService) {
  }

  public create() {
    let todo = new Todo(this.dataTableService.findNextId(), this.name, this.until, this.category!);
    this.dataTableService.add(todo);
    console.log(this.dataTableService.todos);
  }

  public defPrio() {
    this.priority = Priority.UNASSIGNED;
    return "checked";
  }

  protected readonly Priority = Priority;
}

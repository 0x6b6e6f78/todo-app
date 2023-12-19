import {Component} from '@angular/core';
import {DataTableService} from "../services/DataTableService";
import {NgForOf, NgIf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {Category, Cell, Status, Todo} from "../obejcts/todo";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    MatIconModule,
    MatTooltipModule,
    NgIf,
    FormsModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  public edit: {row: Todo, cell: Cell} | undefined;
  public editName: string | undefined;
  public editDate: Date | undefined;
  public editCategory: Category | undefined;

  constructor(public dataTableService: DataTableService) {
  }

  nextStatus(todo: Todo) {
    todo.nextStatus();
    this.dataTableService.sort();
  }

  public isEditing(todo: Todo, cell: Cell) {
    if (this.edit === undefined) {
      return false;
    }
    let edit: {row: Todo, cell: Cell} = this.edit!;
    return edit.cell == cell && edit.row == todo;
  }

  public doEdit(todo: Todo, cell: Cell) {
    if (this.edit !== undefined) {
      this.save(todo);
    }
    if (cell == Cell.NAME) {
      this.editName = todo.name;
    }
    if (cell == Cell.DATE) {
      this.editDate = todo.until;
    }
    if (cell == Cell.CATEGORY) {
      this.editCategory = todo.category;
    }
    //this.edit = {row: todo, cell: cell};
  }

  public save(todo: Todo) {
    if (this.edit !== undefined) {
      if (this.edit!.cell == Cell.NAME) {
        todo.name = this.editName!;
        this.editName = undefined;
      }
      if (this.edit!.cell == Cell.DATE) {
        todo.until = this.editDate!;
        this.editDate = undefined;
      }
      if (this.edit!.cell == Cell.CATEGORY) {
        todo.category = this.editCategory!;
        this.editCategory = undefined;
      }
    }
    this.edit = undefined;
  }

  getStatusTooltip(todo: Todo): string {
    return todo.status.tooltip;
  }

  protected readonly Status = Status;
  protected readonly Cell = Cell;
}

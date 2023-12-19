import {Category, Status, Todo} from "../obejcts/todo";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: "root" })
export class DataTableService {
  public categories: Category[] = [new Category('Hausarbeit'), new Category('Verein')];
  public todos: Todo[] = [new Todo(1, 'Rasen mähen', new Date('01.01.2020'), this.categories[0]),
    new Todo(2, 'Rasen mähen', new Date('01.01.2020'), this.categories[0]),
    new Todo(3, 'Rasen mähen', new Date('01.01.2020'), this.categories[0])];

  public findNextId(): number {
    let list: number[] = this.todos.map(todo => todo.id);
    let i = 1;
    while (list.includes(i)) {
      i++;
    }
    return i;
  }

  public delete(todo: Todo) {
    this.todos = this.todos.filter(e => e != todo);
    this.sort();
  }

  public add(todo: Todo) {
    this.todos.push(todo);
    this.sort();
  }

  public clone(todo: Todo) {
    let newTodo: Todo = new Todo(this.findNextId(), todo.name, todo.until, todo.category);
    this.add(newTodo);
  }

  public sort() {
    this.todos = this.todos.sort((a, b) => {
      if (a.status == Status.IN_PROGRESS) {
        return 1;
      }
      if (b.status == Status.IN_PROGRESS) {
        return -1;
      }
      if (a.status == Status.NEW) {
        return 1;
      }
      if (b.status == Status.NEW) {
        return -1;
      }
      return b.id - a.id;
    });
  }
}

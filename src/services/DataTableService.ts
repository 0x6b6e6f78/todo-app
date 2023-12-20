import {Category, Priority, Status, Todo} from "../objects/todo";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: "root" })
export class DataTableService {
  public category_defaults: Category[] = [new Category('Hausarbeit'), new Category('Verein')];
  public categories: Category[] = [new Category('Hausarbeit')];
  public todo_defaults: Todo[] = [new Todo(1, 'Garten essen', new Date('01.01.2020'), this.categories[0]),
    new Todo(2, 'Rasen mehlen', new Date('01.01.2020'), this.categories[0]),
    new Todo(3, 'Rasen mähen', new Date('01.01.2020'), this.categories[1])];
  public todos: Todo[] = [];

  public showExtraButtons = {key: "setting_showExtraButtons", description: "Lösch- und Klon-Button anzeigen", enabled: true};
  public sortList = {key: "setting_sortList", description: "Liste sortieren", enabled: true};

  public catName = "";
  public selected: Category | undefined;
  public searchText: string = "";
  public _messageBoxMessage: string | undefined;

  constructor() {
    //localStorage.setItem("todos", JSON.stringify(this.todo_defaults));
    //localStorage.setItem("categories", JSON.stringify(this.category_defaults));

    let localCategories = localStorage.getItem("categories");
    if (localCategories !== null) {
      let list: Category[] = JSON.parse(localCategories!);
      list.forEach(category => {
        if (this.categories.find(e => e.name == category.name) === undefined) {
          this.categories.push(new Category(category.name));
        }
      });
    }
    let localTodos = localStorage.getItem("todos");
    if (localTodos !== null) {
      let list: Todo[] = JSON.parse(localTodos!);
      list.forEach(t => {
        let c: Category | undefined = this.categories.find(e => e.name == t.category.name);
        if (c === undefined) {
          return;
        }
        let todo = new Todo(t.id, t.name, t.until, c!);
        if (t.priority.id == 0) {
          todo.priority = Priority.UNASSIGNED;
        }
        if (t.priority.id == 1) {
          todo.priority = Priority.LOW;
        }
        if (t.priority.id == 2) {
          todo.priority = Priority.HIGH;
        }
        if (t.status.id == 1) {
          todo.status = Status.NEW;
        }
        if (t.status.id == 2) {
          todo.status = Status.IN_PROGRESS;
        }
        if (t.status.id == 0) {
          todo.status = Status.DONE;
        }
        this.todos.push(todo);
      });
    }
    let setting_showExtraButtons = localStorage.getItem(this.showExtraButtons.key);
    if (setting_showExtraButtons !== null) {
      this.showExtraButtons.enabled = JSON.parse(setting_showExtraButtons!);
    }
    let setting_sortList = localStorage.getItem(this.sortList.key);
    if (setting_sortList !== null) {
      this.sortList.enabled = JSON.parse(setting_sortList!);
    }
  }

  public set messageBoxMessage(message: string) {
    this._messageBoxMessage = message;
    new Promise(resolve => setTimeout(resolve, 5000)).then(d => {
      if (this._messageBoxMessage == message) {
        this._messageBoxMessage = undefined;
      }
    });
  }

  public get messageBoxMessage(): string | undefined {
    return this._messageBoxMessage;
  }

  public saveSetting(obj: {key: string, description: string, enabled: boolean}) {
    localStorage.setItem(obj.key, JSON.stringify(!obj.enabled));
  }

  public addCategory() {
    if (this.catName.length == 0) {
      this.messageBoxMessage = "Der Name der Kategorie darf nicht leer sein";
      return;
    }
    if (this.categories.find(e => e.name == this.catName) !== undefined) {
      this.messageBoxMessage = "Diese Kategorie existiert bereits";
      return;
    }
    this.categories.push(new Category(this.catName));
    localStorage.setItem("categories", JSON.stringify(this.categories));
    this.catName = "";
  }

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
    this.save();
    this.messageBoxMessage = "Todo gelöscht";
  }

  public add(todo: Todo) {
    this.todos.push(todo);
    this.save();
    this.messageBoxMessage = "Todo hinzugefügt";
  }

  public save() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  public clone(todo: Todo) {
    let newTodo: Todo = new Todo(this.findNextId(), todo.name, todo.until, todo.category);
    this.add(newTodo);
    this.messageBoxMessage = "Todo geklont"
  }

  public todoList() {
    let a = this.todos;
    if (this.sortList.enabled) {
      a = a.sort((a, b) => {
        if (a.status.id != b.status.id) {
          return b.status.id - a.status.id;
        }
        if (a.priority.id != b.priority.id) {
          return b.priority.id - a.priority.id;
        }
        return a.id - b.id;
      });
    }
    if (this.selected !== undefined) {
      a = a.filter(todo => todo.category == this.selected);
    }
    if (this.searchText.length != 0) {
      a = a.filter(todo => todo.name.toLowerCase().includes(this.searchText.toLowerCase()));
    }
    return a;
  }
}

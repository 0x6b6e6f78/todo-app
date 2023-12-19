import {formatDate} from "@angular/common";

export class Todo {

  public status = Status.NEW;
  public priority = Priority.UNASSIGNED;

  constructor(public id: number, public name: string, public until: Date, public category: Category) {
  }

  public getUntilDate(): string {
    return formatDate(this.until, 'dd.MM.yyyy', 'en-US');
  }

  public tooltipPriority(): string {
    return this.status == Status.NEW ? "Neu" : (this.status == Status.DONE ? "Fertig" : "In Bearbeitung");
  }

  nextStatus() {
    if (this.status == Status.IN_PROGRESS) {
      this.status = Status.DONE;
    }
    if (this.status == Status.NEW) {
      this.status = Status.IN_PROGRESS;
    }
  }
}

export const Status = {
  NEW: {
    button: "add",
    tooltip: "Neu"
  },
  IN_PROGRESS: {
    button: "pending",
    tooltip: "In Bearbeitung"
  },
  DONE: {
    button: "done",
    tooltip: "Fertig"
  }
}

export const Priority = {
  UNASSIGNED: {
    button: "dangerous",
    tooltip: "Keine Priorität"
  },
  LOW: {
    button: "low_priority",
    tooltip: "Niedrige Priorität"
  },
  HIGH: {
    button: "priority_high",
    tooltip: "Hohe Priorität"
  }
}

export enum Cell {
  NAME, DATE, CATEGORY
}

export class Category {

  constructor(public name: string) {
  }
}

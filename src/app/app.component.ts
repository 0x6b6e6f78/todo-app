import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from "@angular/material/icon";
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {TodoListComponent} from "../todo-list/todo-list.component";
import {SettingPageComponent} from "../setting-page/setting-page.component";
import {ComponentService} from "../services/ComponentService";
import {CategoryListComponent} from "../category-list/category-list.component";
import {NewTodoComponent} from "../new-todo/new-todo.component";
import {MessageBoxComponent} from "../message-box/message-box.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIconModule, NavBarComponent, TodoListComponent, SettingPageComponent, CategoryListComponent, NewTodoComponent, MessageBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(public componentService: ComponentService) {
  }

  protected readonly Page = Page;
}

export enum Page {
  LIST, NEW, SETTINGS
}

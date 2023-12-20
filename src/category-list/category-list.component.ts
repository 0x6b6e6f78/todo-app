import { Component } from '@angular/core';
import {DataTableService} from "../services/DataTableService";
import {NgForOf, NgIf} from "@angular/common";
import {Category} from "../obejcts/todo";

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {

  constructor(public dataTableService: DataTableService) {
  }
}

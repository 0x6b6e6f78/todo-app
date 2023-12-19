import { Component } from '@angular/core';
import {DataTableService} from "../services/DataTableService";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {

  constructor(public dataTableService: DataTableService) {
  }
}

import { Component } from '@angular/core';
import {DataTableService} from "../services/DataTableService";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-setting-page',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './setting-page.component.html',
  styleUrl: './setting-page.component.css'
})
export class SettingPageComponent {

  constructor(public dataTableService: DataTableService) {
  }
}

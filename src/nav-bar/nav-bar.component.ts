import { Component } from '@angular/core';
import {DataTableService} from "../services/DataTableService";
import {Page} from "../app/app.component";
import {ComponentService} from "../services/ComponentService";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatIconModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(public componentService: ComponentService, public dataTableService: DataTableService) {
  }

  protected readonly Page = Page;
}

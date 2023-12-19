import { Component } from '@angular/core';
import {DataTableService} from "../services/DataTableService";
import {Page} from "../app/app.component";
import {ComponentService} from "../services/ComponentService";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(public componentService: ComponentService) {
  }

  protected readonly Page = Page;
}

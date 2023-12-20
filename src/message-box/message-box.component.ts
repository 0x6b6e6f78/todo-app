import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableService} from "../services/DataTableService";

@Component({
  selector: 'app-message-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-box.component.html',
  styleUrl: './message-box.component.css'
})
export class MessageBoxComponent {

  constructor(public dataTableService: DataTableService) {
  }
}

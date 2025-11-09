import { Component } from '@angular/core';
import { DriverTableComponent } from "../../../shared/components/driver-table/driver-table";

@Component({
  selector: 'driver-page',
  standalone: true,
  imports: [DriverTableComponent],
  templateUrl: './DriverPage.html',
  styleUrl: './DriverPage.css',
})
export class DriverPage { }

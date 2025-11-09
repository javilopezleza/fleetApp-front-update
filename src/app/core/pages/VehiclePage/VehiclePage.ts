import { Component } from '@angular/core';
import { VehicleTable } from "../../../shared/components/vehicle-table/vehicle-table";

@Component({
  selector: 'app-vehicle-page',
  standalone: true,
  imports: [VehicleTable],
  templateUrl: './VehiclePage.html',
  styleUrl: './VehiclePage.css',
})
export class VehiclePage { }

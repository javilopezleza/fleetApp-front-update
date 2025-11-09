import { Component} from '@angular/core';
import { VehicleDriverTable } from "../../../shared/components/vehicle-driver-table/vehicle-driver-table";


@Component({
  selector: 'app-vehicle-driver-page',
  standalone: true,
  imports: [VehicleDriverTable],
  templateUrl: './VehicleDriverPage.html',
  styleUrl: './VehicleDriverPage.css',
})
export class VehicleDriverPage {


 }

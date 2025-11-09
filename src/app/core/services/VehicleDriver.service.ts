import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { env } from '../../environments/environment';
import { VehicleDriver } from '../../shared/interfaces/VehicleDriver';

@Injectable({
  providedIn: 'root'
})

export class VehicleDriverService {

  private http = inject(HttpClient);
  private baseUrl = `${env.apiUrl}/vehicle-driver`;

  getAllVehicleDriver() {
    return this.http.get<VehicleDriver[]>(this.baseUrl);
  }

  getAllWithRelations(){
    return this.http.get<VehicleDriver[]>(`${this.baseUrl}/full`);
  }

  getDriversByVehiclePlate(vehiclePlate: string) {
    return this.http.get<VehicleDriver[]>(`${this.baseUrl}/${vehiclePlate}`);
  }


}

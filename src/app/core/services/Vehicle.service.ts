import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { env } from '../../environments/environment';
import { Vehicle } from '../../shared/interfaces/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private http = inject(HttpClient);

  private baseUrl = `${env.apiUrl}/vehicles`

  getAllVehicles() {
    return this.http.get<Vehicle[]>(this.baseUrl);
  }

  getVehicleByPlate(plate: string) {
    return this.http.get<Vehicle[]>(`${this.baseUrl}/${plate}`)
  }

  createVehicle(data: {
    matricula: string,
    bastidor: number,
    marca: string,
    modelo: string,
    proxima_revision: string
  }) {
    return this.http.post<Vehicle>(this.baseUrl, data);
  }

  updateVehicle(data: {
    matricula: string,
    bastidor: number,
    marca: string,
    modelo: string,
    proxima_revision: string
  }, plate: string) {
    return this.http.patch<Vehicle>(`${this.baseUrl}/${plate}`, data);
  }

  deleteVehicle(plate: string) {
    return this.http.delete<Vehicle>(`${this.baseUrl}/${plate}`);
  }

}

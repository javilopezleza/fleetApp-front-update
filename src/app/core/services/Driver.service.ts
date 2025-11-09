import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { env } from '../../environments/environment';
import {Driver} from '../../shared/interfaces/Driver'

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private http = inject(HttpClient);

  private baseUrl = `${env.apiUrl}/drivers`

  getAllDrivers() {
    return this.http.get<Driver[]>(this.baseUrl);
  }

  getDriverById(id: number) {
    return this.http.get<Driver[]>(`${this.baseUrl}/${id}`)
  }

  createDriver(data: {nombre:string, fecha_caducidad: string, puesto:string}){
    return this.http.post<Driver>(this.baseUrl, data);
  }

  updateDriver(data: {nombre:string, fecha_caducidad: string, puesto:string}, id: number){
    return this.http.patch<Driver>(`${this.baseUrl}/${id}`, data);
  }

  deleteDriver(id: number) {
    return this.http.delete<Driver>(`${this.baseUrl}/${id}`);
  }

}

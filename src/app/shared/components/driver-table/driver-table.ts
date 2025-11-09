import { Component, inject, OnInit, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DriverService } from '../../../core/services/Driver.service';
import { Driver } from '../../interfaces/Driver';
import { GenericTable } from "../generic-table/generic-table";
import { Spinner } from "../spinner/spinner";

@Component({
  selector: 'driver-table',
  standalone: true,
  imports: [MatTableModule, GenericTable, Spinner],
  templateUrl: './driver-table.html',
  styleUrl: './driver-table.css',
})
export class DriverTableComponent implements OnInit {

  drivers = signal<Driver[]>([]);
  loading = signal(true);

  private driverService = inject(DriverService);

  columns: { key: keyof Driver; label: string }[] =
    [
      {
        key: 'id', label: 'No.'
      },
      {
        key: 'nombre', label: 'Nombre'
      },
      {
        key: 'fecha_caducidad', label: 'Fecha de Caducidad'
      },
      {
        key: 'puesto', label: 'Puesto'
      }
    ];

  ngOnInit(): void {
    this.loadDrivers();
  }

  public loadDrivers(): void {
    this.loading();
    this.driverService.getAllDrivers().subscribe({
      next: (drivers) => {
        this.drivers.set(drivers);
        this.finishLoading();
      },
      error: (err) => {
        console.error('Error al obtener los conductores', err);
        this.loading.set(false);
      }
    })
  }

  private finishLoading() {
    this.loading.set(false);
  }


}

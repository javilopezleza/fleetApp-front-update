import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { VehicleDriver } from '../../interfaces/VehicleDriver';
import { VehicleDriverService } from '../../../core/services/VehicleDriver.service';
import { GenericTable } from "../generic-table/generic-table";
import { Spinner } from "../spinner/spinner";
import { SearchComponent } from "../searchComponent/searchComponent";
import { finalize } from 'rxjs';

@Component({
  selector: 'vehicle-driver-table',
  standalone: true,
  imports: [GenericTable, Spinner, SearchComponent],
  templateUrl: './vehicle-driver-table.html',
  styleUrl: './vehicle-driver-table.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleDriverTable implements OnInit {

  allDrivers = signal<VehicleDriver[]>([]);
  loading = signal(true);

  private vehicleDriverService = inject(VehicleDriverService);

  columns: { key: string; label: string }[] = [
    { key: 'vehiculo', label: 'Matrícula' },
    { key: 'driver.nombre', label: 'Nombre' },
    { key: 'fecha', label: 'Fecha' }
  ];

  vehicleDriver = computed(() => this.allDrivers());

  ngOnInit(): void {
    this.loadAllDrivers();
  }

  loadAllDrivers(): void {
    this.loading.set(true);
    this.vehicleDriverService.getAllWithRelations()
      .pipe(
        finalize(() => this.loading.set(false))
      )
      .subscribe({
        next: (drivers) => {
          this.allDrivers.set(drivers);
        },
        error: (err) => {
          console.error('Error al obtener los datos', err);
        }
      });
  }


  onFilterChanged(plate: string) {
    this.loading.set(true);

    if (!plate) {
      this.loadAllDrivers();
      return;
    }

    this.vehicleDriverService.getDriversByVehiclePlate(plate).subscribe({
      next: (drivers) => {
        this.allDrivers.set(drivers);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error al filtrar por matrícula', err);
        this.loading.set(false);
      }
    });
  }
}

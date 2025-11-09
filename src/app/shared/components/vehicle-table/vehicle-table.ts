import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Vehicle } from '../../interfaces/Vehicle';
import { VehicleService } from '../../../core/services/Vehicle.service';
import { GenericTable } from "../generic-table/generic-table";
import { Spinner } from "../spinner/spinner";

@Component({
  selector: 'vehicle-table',
  standalone: true,
  imports: [GenericTable, Spinner],
  templateUrl: './vehicle-table.html',
  styleUrl: './vehicle-table.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleTable implements OnInit {

  vehicles = signal<Vehicle[]>([]);
  loading = signal(true);

  private vehicleService = inject(VehicleService);


  columns: { key: keyof Vehicle; label: string }[] =
    [
      {
        key: 'matricula', label: 'Matrícula'
      },
      {
        key: 'bastidor', label: 'Bastidor'
      },
      {
        key: 'marca', label: 'Marca'
      },
      {
        key: 'modelo', label: 'Modelo'
      },
      {
        key: 'proxima_revision', label: 'Próxima revisión'
      }
    ]


  ngOnInit(): void {
    this.loading();

    this.vehicleService.getAllVehicles().subscribe({
      next: (vehicles) => {
        this.vehicles.set(vehicles);
        this.finishLoading()
      },
      error: (err) => {
        console.error('Error al obtener los vehiculos', err);
        this.loading.set(false);
      }
    })
  }

    private finishLoading() {
    this.loading.set(false);
  }


}

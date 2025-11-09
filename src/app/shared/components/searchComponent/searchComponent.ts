import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from '@angular/material/icon';
import { VehicleDriverService } from '../../../core/services/VehicleDriver.service';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatOption } from "@angular/material/select";

@Component({
  selector: 'search-component',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelect,
    MatOption
  ],
  templateUrl: './searchComponent.html',
  styleUrl: './searchComponent.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {

  private vehicleDriverService = inject(VehicleDriverService);

  availablePlates = signal<string[]>([]);
  selectedPlate = signal('');

  @Output() filterChanged = new EventEmitter<string>();

  constructor() {
    this.vehicleDriverService.getAllWithRelations().subscribe(data => {
      const plates = [...new Set(data.map(d => d.vehiculo))];
      this.availablePlates.set(plates);
    });
  }

  onSelectPlate(value: string) {
    this.selectedPlate.set(value);
    this.filterChanged.emit(value);
  }

  onClearFilter() {
    this.selectedPlate.set('');
    this.filterChanged.emit('');
  }
}

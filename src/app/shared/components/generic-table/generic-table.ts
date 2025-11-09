import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'generic-table',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './generic-table.html',
  styleUrl: './generic-table.css',
})
export class GenericTable<T> {

  @Input({ required: true }) data: T[] = [];
  @Input({ required: true }) columns: {
    key: string, label: string
  }[] = [];


  get displayedColumns(): string[] {
    return this.columns.map(c => c.key.toString());
  }

getValue(obj: any, path: string) {
  if (!path.includes('.')) {
    return obj[path] ?? 'Conductor no encontrado';
  }
  const value = path.split('.').reduce((o, k) => o?.[k], obj);
  return value ?? 'Conductor no encontrado';
}




}

import { Routes } from '@angular/router';
import { DriverPage } from './core/pages/DriverPage/DriverPage';
import { VehiclePage } from './core/pages/VehiclePage/VehiclePage';
import { IndexPage } from './core/pages/IndexPage/IndexPage';
import { VehicleDriverPage } from './core/pages/VehicleDriverPage/VehicleDriverPage';

export const routes: Routes =
[
  {
    path: '',
    component: IndexPage
  },
  {
    path: 'inicio',
    component: IndexPage
  },
  {
    path: 'conductores',
    component: DriverPage,
  },
  {
    path: 'vehiculos',
    component: VehiclePage,
  },
  {
    path: 'vehiculo-conductor',
    component: VehicleDriverPage,
  },

];

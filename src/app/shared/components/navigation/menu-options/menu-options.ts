import { Component } from '@angular/core';
import { menuOptionsSignal } from '../../../signals/menuOptions.signal';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'menu-options',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './menu-options.html',
  styleUrl: './menu-options.css',
})
export class MenuOptionsComponent {

  menuOptions = menuOptionsSignal;

 }

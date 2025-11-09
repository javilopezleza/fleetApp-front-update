import { Component } from '@angular/core';
import { Body } from "../../../shared/components/index-components/body/body";

@Component({
  selector: 'index-page',
  standalone: true,
  imports: [Body],
  templateUrl: './IndexPage.html',
  styleUrl: './IndexPage.css',
})
export class IndexPage { }

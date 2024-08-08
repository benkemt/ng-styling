import { Component, ViewEncapsulation } from '@angular/core';

import { StylingAngularComponent } from "./styling-angular/styling-angular.component";

@Component({
  selector: 'app-root-style-property',
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
  imports: [ StylingAngularComponent],
  template: `
    <app-styling-angular>
  `,
  styles: 
    `
   
  `
})
export class AppComponent {
}

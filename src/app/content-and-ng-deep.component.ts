import { Component } from '@angular/core';

@Component({
  selector: 'app-content-and-ng-deep',
  standalone: true,
  imports: [],
  template: `
    <h2>Using ng-content and ng-deep</h2>
    <div>
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: './content-and-ng-deep.component.css'
})
export class ContentAndNgDeepComponent {

}

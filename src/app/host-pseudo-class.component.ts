import { Component } from '@angular/core';

@Component({
  selector: 'app-host-pseudo-class',
  standalone: true,
  imports: [],
  template: `
    <h2>Using host Pseudo Class</h2>
    <div>
      <nav>
        <a>Home</a>
        <a>About</a>
      </nav>
    </div>
  `,
  styleUrl: './host-pseudo-class.component.css'
})
export class HostPseudoClassComponent {

}

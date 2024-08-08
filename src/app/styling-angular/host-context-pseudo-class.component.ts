import { Component } from '@angular/core';

@Component({
  selector: 'app-host-context-pseudo-class',
  standalone: true,
  imports: [],
  template: `
    <h2>Using host-context Pseudo Class</h2>
    <div>
      <nav>
        <a>Home</a>
        <a>About</a>
      </nav>
    </div>
  `,
  styleUrl: './host-context-pseudo-class.component.css'
})
export class HostContextPseudoClassComponent {

}

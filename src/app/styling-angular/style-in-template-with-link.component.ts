import { Component } from '@angular/core';

@Component({
  selector: 'app-style-in-template-with-link',
  standalone: true,
  imports: [],
  template: `
  <link rel="stylesheet" href="style-in-template-with-link.component.css">
  <h2>Styling in template with link</h2>
  <div>
    <nav>
      <a>Home</a>
      <a>About</a>
    </nav>
  </div>
  `,
})
export class StyleInTemplateWithLinkComponent {

}

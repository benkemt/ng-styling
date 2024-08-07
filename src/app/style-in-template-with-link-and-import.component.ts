import { Component } from '@angular/core';

@Component({
  selector: 'app-style-in-template-with-link-and-import',
  standalone: true,
  imports: [],
  template: `
  <link rel="stylesheet" href="style-in-template-with-link-and-import.component.css">
  <h2>Styling in template with link and import css</h2>
  <div>
    <nav>
      <a>Home</a>
      <a>About</a>
    </nav>
  </div>
  `,
  styles: ``
})
export class StyleInTemplateWithLinkAndImportComponent {

}

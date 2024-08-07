import { Component } from '@angular/core';

@Component({
  selector: 'app-style-in-template',
  standalone: true,
  imports: [],
  template: `
  <style>
     div {
      background-color: #DA9FBC;
    }

    nav {
      display: flex;
      gap: 50px;
      padding: 10px;
      text-align: center;
    }

    a {
      text-decoration: none;
      color: #333;
    }

    a:hover {
            text-decoration: underline;
    }

    a.active {
      color: #007bff;
    }
  </style>

  <h2>Styling in template</h2>
  <div>
    <nav>
      <a>Home</a>
      <a>About</a>
    </nav>
  </div>
`,
})
export class StyleInTemplateComponent {

}

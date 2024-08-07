import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StyleInTemplateComponent } from "./style-in-template.component";
import { StyleInTemplateWithLinkComponent } from "./style-in-template-with-link.component";
import { StyleInTemplateWithLinkAndImportComponent } from "./style-in-template-with-link-and-import.component";
import { HostPseudoClassComponent } from "./host-pseudo-class.component";
import { HostContextPseudoClassComponent } from "./host-context-pseudo-class.component";
import { ContentAndNgDeepComponent } from "./content-and-ng-deep.component";

@Component({
  selector: 'app-root-style-property',
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
  imports: [RouterOutlet, StyleInTemplateComponent, StyleInTemplateWithLinkComponent, StyleInTemplateWithLinkAndImportComponent, HostPseudoClassComponent, HostContextPseudoClassComponent, ContentAndNgDeepComponent],
  template: `
    <!--<h2>Styling using style property</h2>
    <div>
      <nav>
        <a>Home</a>
        <a>About</a>
      </nav>
    </div>-->
    <app-style-in-template></app-style-in-template>
    <app-style-in-template-with-link/>
    <app-style-in-template-with-link-and-import/>
    <app-host-pseudo-class/>
    <app-host-pseudo-class class="green"/>
    <app-host-pseudo-class class="yellow"/>
    <div class="green"> 
      <app-host-context-pseudo-class/>
    </div>
    <app-content-and-ng-deep>
      <nav>
        <a>Home</a>
        <a>About</a>
      </nav>
    </app-content-and-ng-deep>
  `,
  styles: 
    `
    div {
      background-color: #2A9FBC;
    }

    nav {
      display: flex;
      gap: 50px;
      padding: 10px;
      text-align: center;
    }
/*
    a {
      text-decoration: none;
      color: #333;
    }

    a:hover {
            text-decoration: underline;
    }

    a.active {
      color: #007bff;
    }*/
  `
})
export class AppComponent {
}

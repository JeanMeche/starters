import { Component, VERSION } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `Child OK!`,
})
export class Child {}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Child],
  template: `
    <header>Angular {{version}}</header>
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
   `,
})
export class App {
  version = VERSION.full;
  name = 'Angular';
}

bootstrapApplication(App);

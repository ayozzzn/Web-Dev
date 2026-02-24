import { Component, input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
  <p>The user's name is {{ name() }}</p>

  <p>Username: {{ username }}</p>
  <p>Preferred Framework:</p>
  <ul>
    <li>
      Static Image:
      <img ngSrc="/logo.svg" alt="Angular logo" width="32" height="32" />
    </li>
    <li>
      Dynamic Image:
      <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
    </li>
  </ul>

  <p>Username: {{ username }}</p>
  <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
  <label for="framework">
    Favorite Framework:
    <input id="framework" type="text" [(ngModel)]="favoriteFramework"/>
  </label>
  <button (click)="showFramework()">Show Framework</button>
  `,
  imports: [NgOptimizedImage, FormsModule]
})

export class User {
  readonly name = input<string>();

  logoUrl = '/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';

  favoriteFramework = '';

  showFramework() {
    alert(this.favoriteFramework);
  }
}

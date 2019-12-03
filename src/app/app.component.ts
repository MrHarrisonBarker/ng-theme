import { Component } from '@angular/core';
import { NgThemeService } from 'projects/ng-theme/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-theme-workspace';
  numbers;

  constructor(public theme: NgThemeService){
    console.log(this.theme.currentTheme);
    this.numbers = Array(100);
  }
}

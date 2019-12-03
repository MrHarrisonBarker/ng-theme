import { Component, OnInit } from '@angular/core';
import { NgThemeService } from '../ng-theme.service';

@Component({
  selector: 'ng-theme-dropdown',
  templateUrl: './ng-theme-dropdown.component.html'
})
export class NgThemeDropdownComponent implements OnInit {

  constructor(public themeService: NgThemeService) { }

  ngOnInit() {
  }

  set(value: any) {
    this.themeService.setTheme(value);
  }

}

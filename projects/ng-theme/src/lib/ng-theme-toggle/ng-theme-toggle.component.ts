import { Component, OnInit, Input } from '@angular/core';
import { NgThemeService } from '../ng-theme.service';

@Component({
  selector: 'ng-theme-toggle',
  templateUrl: './ng-theme-toggle.component.html'
})
export class NgThemeToggleComponent implements OnInit {

  constructor(private themeService: NgThemeService) { }

  ngOnInit() {
  }

  public next() {
    this.themeService.nextTheme();
  }
}

import { Component, OnInit } from '@angular/core';
import { NgThemeService } from 'projects/ng-theme/src/lib/ng-theme.service';

@Component({
  selector: 'app-test-bed',
  templateUrl: './test-bed.component.html',
  styleUrls: ['./test-bed.component.css']
})
export class TestBedComponent implements OnInit {

  title = 'ng-theme-workspace';

  constructor(public theme: NgThemeService) { }

  ngOnInit() {
  }

}

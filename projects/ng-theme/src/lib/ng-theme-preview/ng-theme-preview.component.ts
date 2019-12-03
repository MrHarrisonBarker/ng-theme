import { Component, OnInit, Input, PipeTransform, Pipe } from '@angular/core';
import { Theme } from '../ng-theme';

@Pipe({ name: 'keys',  pure: false })
export class KeysPipe implements PipeTransform {
	transform(value: any, args: any[] = null): any {
		return Object.keys(value)//.map(key => value[key]);
	}
}

@Component({
  selector: 'ng-theme-preview',
  templateUrl: './ng-theme-preview.component.html',
  styleUrls: ['./ng-theme-preview.component.css']
})
export class NgThemePreviewComponent implements OnInit {

  @Input() theme: Theme;

  constructor() { }

  ngOnInit() {
  }

  public isValid(str: string) {
		return str != 'name' && str != 'isDark';
	}

}

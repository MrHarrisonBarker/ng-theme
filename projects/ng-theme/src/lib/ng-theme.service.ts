import { Injectable } from '@angular/core';
import { Theme } from './ng-theme';
import { Themes } from './ng-default-themes';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgThemeServiceOptions {
  public testConfig: string = 'This is the defualt text';
  public themes?: Theme[] = Themes;
}

@Injectable({
  providedIn: 'root'
})
export class NgThemeService {

  private options: NgThemeServiceOptions;

  public currentTheme: Theme;
  sub: Subject<string> = new Subject;

  constructor(private serviceOptions: NgThemeServiceOptions) 
  {
    this.options = serviceOptions;
    this.setTheme(this.options.themes[0].name);
    console.log('config options -> ', this.options);
    console.log(this);
  }

  public setTheme(themeName: string): void 
  {
    this.currentTheme = this.options.themes.find(x => x.name == themeName);
    this.sub.next('update theme');
  }

  public toggleTheme(firstThemeName, secondThemeName): void 
  {
    if (this.currentTheme.name == firstThemeName) {
      this.currentTheme = this.options.themes.find(x => x.name == secondThemeName);
    } else {
      this.currentTheme = this.options.themes.find(x => x.name == firstThemeName);
    }
    this.sub.next('update theme');
  }

  public listen(): Observable<string> {
    return this.sub.asObservable();
  }

  public nextTheme() {
    let indexOfCurrentTheme = this.options.themes.indexOf(this.currentTheme);
    if (indexOfCurrentTheme + 1 > this.options.themes.length - 1) {
      this.currentTheme = this.options.themes[0];
    } else {
      this.currentTheme = this.options.themes[indexOfCurrentTheme + 1];
    }
    // console.log(this.currentTheme);
    this.sub.next('update theme');
  }

}

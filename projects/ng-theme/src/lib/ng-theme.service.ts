import { Injectable } from '@angular/core';
import { Theme } from './ng-theme';
import { Themes } from './ng-default-themes';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgThemeService {

  public currentTheme: Theme;
  sub: Subject<string> = new Subject;

  constructor() 
  {
    this.setTheme('Light');
  }

  public setTheme(themeName: string): void 
  {
    this.currentTheme = Themes.find(x => x.name == themeName);
    this.sub.next('update theme');
  }

  public toggleTheme(firstThemeName, secondThemeName): void 
  {
    if (this.currentTheme.name == firstThemeName) {
      this.currentTheme = Themes.find(x => x.name == secondThemeName);
    } else {
      this.currentTheme = Themes.find(x => x.name == firstThemeName);
    }
    this.sub.next('update theme');
  }

  public listen(): Observable<string> {
    return this.sub.asObservable();
  }

}

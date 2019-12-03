import { Injectable, OnInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { Theme } from './ng-theme';
import { Themes } from './ng-default-themes';
import { Observable, Subject } from 'rxjs';
import { CssSelector } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class Background {
  public backgroundOn:boolean;
  public backgroundElement: string;
}

export class NgThemeServiceOptions {
  public background?: Background = {backgroundOn: true, backgroundElement: 'body'};
  public themes?: Theme[] = Themes;

  
}

@Injectable({
  providedIn: 'root'
})
export class NgThemeService {

  private options: NgThemeServiceOptions;
  private backgroundElement: HTMLBodyElement;

  public currentTheme: Theme;
  public themes: Theme[];
  private sub: Subject<string> = new Subject;

  

  constructor(private serviceOptions: NgThemeServiceOptions) 
  {
    this.options = serviceOptions;

    this.themes = this.options.themes;

    if (this.options.background.backgroundElement) {
      console.log('finding background element', this.options.background.backgroundElement);
      this.backgroundElement = document.querySelector(`${this.options.background.backgroundElement}`);
    }

    this.setTheme(this.options.themes[0].name);
    console.log('config options -> ', this.options);
    console.log(this);
  }

  public setTheme(themeName: string): void 
  {		

    this.currentTheme = this.options.themes.find(x => x.name == themeName);

    if (this.options.background.backgroundOn && this.backgroundElement) {
        this.backgroundElement.style.backgroundColor = this.currentTheme.background;
        this.backgroundElement.style.color = this.currentTheme.primaryText;
    }

    this.sub.next('update theme');
  }

  public toggleTheme(firstThemeName, secondThemeName): void 
  {
    if (this.currentTheme.name == firstThemeName) {
      this.setTheme(secondThemeName);
    } else {
      this.setTheme(firstThemeName);
    }
    this.sub.next('update theme');
  }

  public listen(): Observable<string> {
    return this.sub.asObservable();
  }

  public nextTheme() {
    let indexOfCurrentTheme = this.options.themes.indexOf(this.currentTheme);
    if (indexOfCurrentTheme + 1 > this.options.themes.length - 1) {
      this.setTheme(this.options.themes[0].name);
    } else {
      this.setTheme(this.options.themes[indexOfCurrentTheme + 1].name);
    }
    // console.log(this.currentTheme);
    this.sub.next('update theme');
  }

}

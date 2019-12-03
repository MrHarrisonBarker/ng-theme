import { Directive, ElementRef, Input } from '@angular/core';
import { NgThemeService } from './ng-theme.service';
import { ThemeAttrs, Theme } from './ng-theme';

@Directive({
  selector: '[NgTheme]'
})
export class NgThemeDirective {

  @Input('NgTheme') themeAttr: string;
  private currentTheme: Theme;

  constructor(private el: ElementRef, private themeService: NgThemeService) 
  { 
    this.currentTheme = themeService.currentTheme;
    themeService.listen().subscribe(update => {
      if(update) {
        this.currentTheme = themeService.currentTheme;
        this.themeIt();
        // console.log('update');
      }
    });
  }

  ngOnInit(){
    this.themeIt();
  }

  private themeIt() {
    // console.log(this.el);

    if (this.themeAttr) {

      let attr = this.themeAttr.substring(0,this.themeAttr.indexOf(':') );
      let theme = this.themeAttr.substring(this.themeAttr.indexOf(':') + 1);
      // console.log('attr :', attr);
      // console.log('theme :', theme);

      this.el.nativeElement.style[attr] = this.currentTheme[theme];
    } else {
      this.autoTheme();
    }
  }

  private autoTheme() {
    // console.log(this.el);
    switch(this.el.nativeElement.tagName) {
      case "H1" : {
        this.el.nativeElement.style.color = this.themeService.currentTheme.primaryText;
        break;
      } case "H2" : {
        this.el.nativeElement.style.color = this.themeService.currentTheme.secondaryText;
        break;
      } case "H3" : {
        this.el.nativeElement.style.color = this.themeService.currentTheme.secondaryText;
        break;
      } case "H4" : {
        this.el.nativeElement.style.color = this.themeService.currentTheme.secondaryText;
        break;
      } case "H5" : {
        this.el.nativeElement.style.color = this.themeService.currentTheme.secondaryText;
        break;
      } case "A" : {
        this.el.nativeElement.style.color = this.themeService.currentTheme.linkText;
        break;
      } case "I" : {
        this.el.nativeElement.style.color = this.themeService.currentTheme.secondaryText;
        break;
      } case "LABEL" : {
        this.el.nativeElement.style.color = this.themeService.currentTheme.secondaryText;
        break;
      } case "BUTTON" : {
        this.el.nativeElement.style.color = this.themeService.currentTheme.buttonText;
        this.el.nativeElement.style.backgroundColor = this.themeService.currentTheme.buttonBackground;
        this.el.nativeElement.style.borderColor = this.themeService.currentTheme.buttonBorder;
        break;
      } case "INPUT" : {
        this.el.nativeElement.style.color = this.themeService.currentTheme.buttonText;
        this.el.nativeElement.style.backgroundColor = this.themeService.currentTheme.buttonBackground;
        this.el.nativeElement.style.borderColor = this.themeService.currentTheme.buttonBorder;
        break;
      } case "HR" : {
        this.el.nativeElement.style.borderColor = this.themeService.currentTheme.hr;
        break;
      } case "OL" : {
        this.el.nativeElement.style.borderColor = this.themeService.currentTheme.primaryText;
        break;
      } case "UL" : {
        this.el.nativeElement.style.borderColor = this.themeService.currentTheme.primaryText;
        break;
      }
    }
  }

}

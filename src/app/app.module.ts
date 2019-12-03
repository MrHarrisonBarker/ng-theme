import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestBedComponent } from './test-bed/test-bed.component';
import { NgThemeModule, NgThemeDirectiveModule } from 'projects/ng-theme/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    TestBedComponent
  ],
  imports: [
    BrowserModule,
    NgThemeModule.forRoot({
      testConfig: 'this is injected from NgModule',
      themes: [{
        name: 'LightInjected',
        primary: '#FFFFFF',
        primaryText: '#333333',
        secondary: '#343a40',
        secondaryText: '#343a40',
        background: 'red',
        linkText: '#0080c3',
        buttonText: '#343a40',
        buttonBorder: '#d3d7da',
        buttonBackground: '#f1f7fd',
        jumbo: '#333333',
        jumboText: '#FFFFFF',
        hr: '#333333',
        shadow: '#cacaca',
        isDark: false,
        accent: '#E30B16'
      }, {
        name: 'DarkInjected',
        primary: '#1E1E1E',
        primaryText: '#E1E1E1',
        secondary: '#121212',
        secondaryText: '#898989',
        background: 'purple',
        linkText: '#0080c3',
        buttonText: '#E1E1E1',
        buttonBorder: '#f8f9fa',
        buttonBackground: '#343a40',
        jumbo: '#1E1E1E',
        jumboText: '#E1E1E1',
        hr: '#FFFFFF',
        shadow: '#060606',
        isDark: true,
        accent: '#E30B16'
      }]
    }),
    NgThemeDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

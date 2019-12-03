import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgThemeDirective } from 'projects/ng-theme/src/lib/ng-theme.directive';
import { TestBedComponent } from './test-bed/test-bed.component';

@NgModule({
  declarations: [
    AppComponent,
    NgThemeDirective,
    TestBedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgThemeDirectiveModule } from './ng-theme-directive.module';
import { NgThemePreviewComponent, KeysPipe } from './ng-theme-preview/ng-theme-preview.component';
import { NgThemeToggleComponent } from './ng-theme-toggle/ng-theme-toggle.component';
import { NgThemeDropdownComponent } from './ng-theme-dropdown/ng-theme-dropdown.component';

@NgModule({
    imports: [
        CommonModule,
        NgThemeDirectiveModule
    ],
    declarations: [
        NgThemePreviewComponent,
        NgThemeToggleComponent,
        NgThemeDropdownComponent,
        KeysPipe,
    ],
    exports: [
        NgThemePreviewComponent,
        NgThemeToggleComponent,
        NgThemeDropdownComponent
    ]
})  
export class NgThemeComponentsModule {

}
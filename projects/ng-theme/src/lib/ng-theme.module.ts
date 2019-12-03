import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { NgThemeServiceOptions, Background } from './ng-theme.service';
import { Theme } from './ng-theme';



@NgModule()  
export class NgThemeModule {
  static forRoot( options?: NgThemeServiceOptions ) : ModuleWithProviders {
 
    return({
        ngModule: NgThemeModule,
        providers: [
          {
            provide: FOR_ROOT_OPTIONS_TOKEN,
            useValue: options
        },
        {
          provide: NgThemeServiceOptions,
          useFactory: provideNgThemeServiceOptions,
          deps: [ FOR_ROOT_OPTIONS_TOKEN ]
      }
        ] 
    });
 

 }
}

export interface NgThemeServiceModuleOptions {
  background?: Background;
  themes?: Theme[];
}

 export var FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<NgThemeServiceModuleOptions>( "forRoot() MyService configuration." );


 export function provideNgThemeServiceOptions( options?: NgThemeServiceModuleOptions ) : NgThemeServiceOptions {
 
  var serviceOptions = new NgThemeServiceOptions();


  if ( options ) {

      if ( typeof( options.background ) === "object" ) {

        serviceOptions.background = options.background;

    }

      if ( typeof( options.themes ) === "object" ) {

        serviceOptions.themes = options.themes;

    }

  }

  return(serviceOptions);

}
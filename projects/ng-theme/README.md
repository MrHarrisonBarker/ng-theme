# ng-theme

![npm](https://img.shields.io/npm/dt/ng-theme) ![npm](https://img.shields.io/npm/v/ng-theme) ![GitHub issues](https://img.shields.io/github/issues/mrharrisonbarker/ng-theme) ![NPM](https://img.shields.io/npm/l/ng-theme) [![Build Status](https://travis-ci.com/MrHarrisonBarker/ng-theme.svg?branch=master)](https://travis-ci.com/MrHarrisonBarker/ng-time-from-pipe) 

Angular theming libary.

* Collection of defualt themes
* Injectable custom themes
* Auto theming based on HTML element
* Toggle and dropdown components
* Theme service and directive

### Install

 `npm install ng-time-from-pipe` 

#### ng-theme-service

##### Varibles

| Attribute    | Description |
| ------------ | ----------- |
| currentTheme |             |
| themes       |             |

##### Methods

| Attribute   | Description |
| ----------- | ----------- |
| setTheme    |             |
| toggleTheme |             |
| listen      |             |
| nextTheme   |             |

#### ng-theme-directive

##### inputs

| Attribute | Description |
| --------- | ----------- |
| NgTheme   |             |

#### ng-theme-preview

##### inputs

| Attribute | Description |
| --------- | ----------- |
| theme     |             |

```html
<ng-theme-preview [theme]="theme"></ng-theme-preview>
```

### Usage

```typescript
import { NgThemeModule, NgThemeDirectiveModule, NgThemeComponentsModule } from 'projects/ng-theme/src/public-api';
```

```typescript
@NgModule( { 
  declarations: [ ... ], 
  imports: [ ..., NgThemeModule, NgThemeDirectiveModule, NgThemeComponentsModule, ... ]
});
```

```typescript
	imports: [ ..., NgThemeModule.forRoot({
		background: {
        backgroundOn: true,
        backgroundElement: 'body'
      },
      themes: [{
      	...
      }, {
      	...
      }]
	}), ... ]
```

### Theme

```typescript
export class Theme
{
	public name: string;

	public primary: string;
	public primaryText: string;

	public secondary: string;
	public secondaryText?: string;

	public background: string;

	public linkText: string;

	public buttonText?: string;
	public buttonBorder?: string;
	public buttonBackground?: string;

	public jumbo: string;
  public jumboText: string;
    
 	public hr: string;
	
	public shadow: string;

	public isDark: boolean;
	public accent: string;

}
```

```html
<ng-theme-dropdown></ng-theme-dropdown>
```

```html
<ng-theme-toggle></ng-theme-toggle>
```


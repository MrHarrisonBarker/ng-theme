import {
  Theme
} from './ng-theme';

export const Themes: Theme[] = [{
  name: 'Light',
  primary: '#EEEEEE',
  primaryText: '#333333',
  secondary: '#343a40',
  secondaryText: '#343a40',
  background: '#FFFFFF',
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
  name: 'Dark',
  primary: '#1E1E1E',
  primaryText: '#E1E1E1',
  secondary: '#121212',
  secondaryText: '#898989',
  background: '#121212',
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
}];

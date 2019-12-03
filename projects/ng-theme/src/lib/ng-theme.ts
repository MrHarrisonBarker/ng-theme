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

export enum ThemeAttrs
{
	name,

	primary,
	primaryText,

	secondary,
	secondaryText,

	background,

	linkText,

	buttonText,
	buttonBorder,
	buttonBackground,

	jumbo,
	jumboText,
	
	shadow,

	isDark,
	accent,

}
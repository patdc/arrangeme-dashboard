
import { Directive, HostBinding, Input } from '@angular/core';

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[cdzButton]' })
export class CadenzaButtonDirective {
  @Input() variant: ButtonVariant = 'filled';
  @Input() size = 'md';
  @Input() color: ButtonColor = 'primary';

  @HostBinding('class.cdz-button--filled')
  get primary(): boolean {
    return this.variant === 'filled';
  }

  @HostBinding('class.cdz-button--outlined')
  get secondary(): boolean {
    return this.variant === 'outlined';
  }

  @HostBinding('class.cdz-button--text_only')
  get tertiary(): boolean {
    return this.variant === 'text_only';
  }

  @Input()
  @HostBinding('disabled')
  disabled = false;

  @HostBinding('class.cdz-button--xs')
  get xs(): boolean {
    return this.size === 'xs';
  }

  @HostBinding('class.cdz-button--sm')
  get sm(): boolean {
    return this.size === 'sm';
  }

  @HostBinding('class.cdz-button--md')
  get md(): boolean {
    return this.size === 'md';
  }

  @HostBinding('class.cdz-button--lg')
  get lg(): boolean {
    return this.size === 'lg';
  }

  @HostBinding('class.cdz-button--xl')
  get xl(): boolean {
    return this.size === 'xl';
  }

  @HostBinding('class')
  get buttonColor() {
    return {
      'cdz-button': true,
      'cdz-button--primary': this.color === 'primary',
      'cdz-button--secondary': this.color === 'secondary',
      'cdz-button--danger': this.color === 'danger',
      'cdz-button--success': this.color === 'success',
      'cdz-button--info': this.color === 'info',
      'cdz-button--warning': this.color === 'warning',
    };
  }
}

export type ButtonVariant = 'filled' | 'outlined' | 'text_only';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonColor = 'primary' | 'secondary' | 'danger' | 'success' | 'info' | 'warning';

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  // @Input('appInputFormat') format;

  constructor(private el: ElementRef) { }

  // @HostListener('focus') onFocus() {
  //   console.log('on Focus');
  // }

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase();
  }


}

import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appCcCardHover]'
})
export class CcCardHoverDirective {

  @Input('appCcCardHover') options: any;

  constructor(private el: ElementRef,
    private renderer: Renderer) {
    this.customDirective();
  }

  customDirective() {
    
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'gray');
  }

}

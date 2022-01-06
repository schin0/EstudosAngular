import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Marrom]'
})
export class DiretivaAtributoDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'var(--marrom)'
  }

}

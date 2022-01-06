import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[for]'
})

export class DiretivaEstruturalDirective implements OnInit {

  @Input('forIn') numbers: number[] = [];
  @Input('forString') texto: string = '';

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    for(let number of this.numbers) {
      this.container.createEmbeddedView(
        this.template, { $implicit: number }
      )
    }
  }
}
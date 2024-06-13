import { Directive, ElementRef, Input, HostListener } from '@angular/core';
@Directive({
  selector: '[appMadirective]'
})
export class MadirectiveDirective {

  constructor(private el: ElementRef) {}

  // Exemple de directive qui change la couleur de fond sur le survol
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#d3d3d3');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }}

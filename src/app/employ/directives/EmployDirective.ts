import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class EmployDirective {

  @Input() color = '';

  constructor(private element: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log("on mouse enter ",this.color);
    
    this.element.nativeElement.style.color = this.color;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.nativeElement.style.color = '';
  }
}
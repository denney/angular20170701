import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight: string;


  constructor(private el: ElementRef) {
// el.nativeElement.mouseleave
//     this.onMouseEnter('yellow');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'red');

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('red');

  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

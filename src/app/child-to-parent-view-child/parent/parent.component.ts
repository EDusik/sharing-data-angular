import { ChildViewChildComponent } from './../child/child.component';
import { ViewChild, AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  template: `
    Message: {{ message }}
    <app-child-child></app-child-child>
  `,
})
export class ParentViewChildComponent implements AfterViewInit {

  @ViewChild(ChildViewChildComponent) child;

  constructor() { }

  message = '';

  ngAfterViewInit() {
    this.message = this.child.message;
  }
}

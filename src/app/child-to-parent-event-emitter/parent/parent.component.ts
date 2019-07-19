import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-event',
  template: `
    Message: {{message}}
    <app-child-event (messageEvent)="receiveMessage($event)"></app-child-event>
  `,
})
export class ParentEventComponent {

  constructor() { }

  message: string;

  receiveMessage($event) {
    this.message = $event;
  }
}

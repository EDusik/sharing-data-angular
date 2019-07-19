import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-event',
  template: `
      <button (click)="sendMessage()">Send Message</button>
  `,
})
export class ChildEventComponent {

  message = 'Hello World!';

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}

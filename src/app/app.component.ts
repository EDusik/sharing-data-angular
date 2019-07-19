import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  title = 'sharing-data-angular';

  refresh(): void {
    window.location.reload();
  }

}

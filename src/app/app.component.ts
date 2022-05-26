import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedChoice = 'recipe';

  onNavigate(choice: string) {
    this.loadedChoice = choice;
  }
}


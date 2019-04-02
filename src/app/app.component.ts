import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeatsure = 'recipe';

  onNavigate(featsure: string) {
    this.loadedFeatsure = featsure;
  }
}

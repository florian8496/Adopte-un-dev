import {Component} from '@angular/core';
import {DeveloppeurService} from './developpeur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DeveloppeurService]
})
export class AppComponent {

  title = 'Adopte un développeur';

}

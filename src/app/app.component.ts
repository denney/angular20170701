import {Component} from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '标题';

  hero: Hero = {'id': 1, 'name': 'dst'};
}

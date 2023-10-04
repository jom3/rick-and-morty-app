import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

}

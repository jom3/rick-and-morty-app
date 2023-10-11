import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SearchButtonComponent } from './shared/components/search-button/search-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterOutlet,
    SearchButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'rick-and-morty-app';

  private route = inject(Router);
  public isHidden = signal<boolean>(false);

  ngOnInit(): void {
    this.route.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/search') {
          this.isHidden.set(true)
        }else{
          this.isHidden.set(false)
        }
      }
    });
  }
}

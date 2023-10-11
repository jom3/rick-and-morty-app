import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-search-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.css'],
})
export class SearchButtonComponent {

  private router = inject(Router)

  onSearch(){
    this.router.navigate(['/search'])
  }
}

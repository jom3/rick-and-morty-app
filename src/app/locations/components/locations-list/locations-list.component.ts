import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '../../interfaces/locations-response.interface';
import { LocationCardComponent } from '../location-card/location-card.component';

@Component({
  selector: 'app-locations-list',
  standalone: true,
  imports: [CommonModule, LocationCardComponent],
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent {

  @Input() locations:Location[]=[];

}

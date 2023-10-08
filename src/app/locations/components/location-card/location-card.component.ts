import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '../../interfaces/locations-response.interface';

@Component({
  selector: 'app-location-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent {

  baseImageUrl:string = 'https://rickandmortyapi.com/api/character/avatar/'

  @Input() location!:Location;

  getImage(imageUrl:string){
    const img = imageUrl.split('/').at(-1)
    return `${this.baseImageUrl}/${img}.jpeg`
  }

}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Episode } from '../../interfaces/episodes-response.interface';

@Component({
  selector: 'app-episode-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.css']
})
export class EpisodeCardComponent {

  @Input() episode!:Episode;

  baseImageUrl:string = 'https://rickandmortyapi.com/api/character/avatar/'

  getImage(imageUrl:string){
    const img = imageUrl.split('/').at(-1)
    return `${this.baseImageUrl}/${img}.jpeg`
  }
}

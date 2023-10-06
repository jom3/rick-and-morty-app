import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Episode } from '../../interfaces/episodes-response.interface';
import { EpisodeCardComponent } from '../episode-card/episode-card.component';

@Component({
  selector: 'app-episodes-list',
  standalone: true,
  imports: [CommonModule, EpisodeCardComponent],
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css']
})
export class EpisodesListComponent {
  @Input() episodes:Episode[]=[];
}

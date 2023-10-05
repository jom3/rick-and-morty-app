import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/characters-response.interface';
import { DatePipe, NgClass, NgFor } from '@angular/common';
import { CharacterCardComponent } from '../character-card/character-card.component';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [NgFor,DatePipe,NgClass, CharacterCardComponent],
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent {

  @Input() characters:Character[]=[];

}

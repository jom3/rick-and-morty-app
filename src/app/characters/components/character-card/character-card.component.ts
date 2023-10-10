import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Character } from '../../interfaces/characters-response.interface';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent {

  @Input() character!:Character;
}

import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe, NgClass, NgFor } from '@angular/common';
import { CharactersService } from '../../services/characters.service';
import { Character, Info } from '../../interfaces/characters-response.interface';
import { CharactersListComponent } from '../../components/characters-list/characters-list.component';

@Component({
  selector: 'app-characters-page',
  standalone: true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  imports: [NgClass, NgFor, DatePipe, CharactersListComponent],
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.css']
})
export class CharactersPageComponent implements OnInit{

  public characters = signal<Character[]>([])
  public currentPage = signal<number>(1)
  public pageData = signal<Info>({count: 0,next:'',pages:0,prev:''})
  public isLoading = signal<boolean>(false)

  private characterService = inject(CharactersService)

  ngOnInit(): void {
    this.getAllCharacters()
  }

  getAllCharacters(){
    this.characterService.getAllCharacters(this.currentPage()).subscribe({
      next:r=>{
        this.pageData.set(r.info)
        this.characters.set(r.results)
      },
      error:e=>{
        console.log(e) //* #FIXME: agregar cuando haya un componente para el error
      },
      complete:()=>{
        this.isLoading.set(false)
      }
    })
  }

  changeCurrentPage(value:number){
    this.currentPage.set(this.currentPage()+value)
    this.isLoading.set(true)
    this.getAllCharacters()
  }

}

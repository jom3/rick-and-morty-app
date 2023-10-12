import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { Character, Location } from 'src/app/characters/interfaces/characters-response.interface';
import { Episode } from 'src/app/episodes/interfaces/episodes-response.interface';
import { CharactersService } from 'src/app/characters/services/characters.service';
import { EpisodesService } from 'src/app/episodes/services/episodes.service';
import { LocationsService } from 'src/app/locations/services/locations.service';
import { CharactersListComponent } from 'src/app/characters/components/characters-list/characters-list.component';
import { EpisodesListComponent } from 'src/app/episodes/components/episodes-list/episodes-list.component';
import { LocationsListComponent } from 'src/app/locations/components/locations-list/locations-list.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CharactersListComponent,
    EpisodesListComponent,
    LocationsListComponent
  ],
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {

  public results = signal<any[]>([])
  public currentPage = signal<number>(1)
  public currentSearch = signal<string>('')


  private fb = inject(FormBuilder)
  private characterSvc = inject(CharactersService);
  private episodeSvc = inject(EpisodesService);
  private locationSvc = inject(LocationsService);

  searchForm = this.fb.group({
    search: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    options:['episodes', [Validators.required]]
  })

  onSearch(){
    if(this.searchForm.invalid){
      this.searchForm.markAllAsTouched()
      return ;
    }
    const {options,search} = this.searchForm.getRawValue()

    switch (options) {
      case 'characters':
        this.characterSvc.getAllCharacters(this.currentPage(),<string>search).subscribe({
          next:r=>{
            this.currentSearch.set('characters')
            this.results.set(r.results)
          },
          error:e=>{
            console.log(e)
          }
        })
        break;
      case 'episodes':
        this.episodeSvc.getAllEpisodes(this.currentPage(),<string>search).subscribe({
          next:r=>{
            this.currentSearch.set('episodes')
            this.results.set(r.results)
          },
          error:e=>{
            console.log(e)
          }
        })
        break;
      case 'locations':
        this.locationSvc.getAllLocations(this.currentPage(),<string>search).subscribe({
          next:r=>{
            this.currentSearch.set('locations')
            this.results.set(r.results)
          },
          error:e=>{
            console.log(e)
          }
        })
        break;
    }
    this.searchForm.reset({options:'episodes'})
  }
}

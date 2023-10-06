import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Episode, Info } from '../../interfaces/episodes-response.interface';
import { EpisodesService } from '../../services/episodes.service';
import { EpisodesListComponent } from '../../components/episodes-list/episodes-list.component';

@Component({
  selector: 'app-episodes-page',
  standalone: true,
  imports: [CommonModule, EpisodesListComponent],
  templateUrl: './episodes-page.component.html',
  styleUrls: ['./episodes-page.component.css']
})
export class EpisodesPageComponent {


  public episodes = signal<Episode[]>([])
  public currentPage = signal<number>(1)
  public pageData = signal<Info>({count: 0,next:'',pages:0,prev:''})

  private episodeService = inject(EpisodesService)

  ngOnInit(): void {
    this.getAllEpisodes()
  }

  getAllEpisodes(){
    this.episodeService.getAllEpisodes(this.currentPage()).subscribe({
      next:r=>{
        console.log(r.results)
        this.pageData.set(r.info)
        this.episodes.set(r.results)
      },
      error:e=>{
        console.log(e) //* #FIXME: agregar cuando haya un componente para el error
      }
    })
  }

  changeCurrentPage(value:number){
    this.currentPage.set(this.currentPage()+value)
    this.getAllEpisodes()
  }


}

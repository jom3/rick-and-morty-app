import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Info, Location } from '../../interfaces/locations-response.interface';
import { LocationsService } from '../../services/locations.service';
import { LocationsListComponent } from '../../components/locations-list/locations-list.component';

@Component({
  selector: 'app-locations-page',
  standalone: true,
  imports: [CommonModule, LocationsListComponent],
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.css']
})
export class LocationsPageComponent implements OnInit{

  public locations = signal<Location[]>([])
  public currentPage = signal<number>(1)
  public pageData = signal<Info>({count: 0,next:'',pages:0,prev:''})

  private locationService = inject(LocationsService)

  ngOnInit(): void {
    this.getAllLocations()
  }

  getAllLocations(){
    this.locationService.getAllLocations(this.currentPage()).subscribe({
      next:r=>{
        console.log(r.results)
        this.pageData.set(r.info)
        this.locations.set(r.results)
      },
      error:e=>{
        console.log(e) //* #FIXME: agregar cuando haya un componente para el error
      },
    })
  }

  changeCurrentPage(value:number){
    this.currentPage.set(this.currentPage()+value)
    window.scrollTo(0,0)
    this.getAllLocations()
  }

}

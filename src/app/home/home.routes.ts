import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'', loadChildren:()=>import('../characters/characters.routes').then(r=>r.routes)
  },
  {
    path:'', loadChildren:()=>import('../episodes/episodes.routes').then(r=>r.routes)
  },
  {
    path:'', loadChildren:()=>import('../locations/locations.routes').then(r=>r.routes)
  },
];

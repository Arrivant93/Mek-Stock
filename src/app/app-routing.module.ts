import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProfilComponent } from './profil/profil.component';
import { SportifComponent } from './sportif/sportif.component';
import { SportifDetailComponent } from './sportif-detail/sportif-detail.component';
import { ApiComponent } from './api/api.component';
import { CreerComponent } from './creer/creer.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'Accueil', component: AccueilComponent },
  { path: 'Profil', component: ProfilComponent },
  { path: 'Sportif', component: SportifComponent },
  { path: 'detail/:id', component: SportifDetailComponent },
  { path: 'api', component: ApiComponent },
  { path: 'creer', component: CreerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

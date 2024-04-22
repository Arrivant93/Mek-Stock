import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProfilComponent } from './profil/profil.component';
import { SportifComponent } from './sportif/sportif.component';

const routes: Routes = [
  { path: '', redirectTo :'accueil', pathMatch : 'full'},
  { path: 'Accueil', component: AccueilComponent },
  { path: 'Profil', component: ProfilComponent },
  { path: 'Sportif', component: SportifComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

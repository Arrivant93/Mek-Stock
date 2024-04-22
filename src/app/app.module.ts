import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CardComponent } from './commun/card/card.component';
import { ProfilComponent } from './profil/profil.component';
import { SportifComponent } from './sportif/sportif.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CardComponent,
    ProfilComponent,
    SportifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

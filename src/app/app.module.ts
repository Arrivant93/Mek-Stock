import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CardComponent } from './commun/card/card.component';
import { ProfilComponent } from './profil/profil.component';
import { SportifComponent } from './sportif/sportif.component';
import { SportifDetailComponent } from './sportif-detail/sportif-detail.component';
import { ApiComponent } from './api/api.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreerComponent } from './creer/creer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CardComponent,
    ProfilComponent,
    SportifComponent,
    SportifDetailComponent,
    ApiComponent,
    CreerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

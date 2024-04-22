import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {

  nom: string="Roronoa";
  prenom: string="Zoro";
  age: number=22;
  taille: string="175cm";
  poids: string="82Kg";
  specialite: string="Musculation";


}

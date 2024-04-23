import { Injectable } from '@angular/core';
import { Sportif } from '../interface/sportif';

@Injectable({
  providedIn: 'root',
})
export class SportifService {
  constructor() {}

  getSportif(): Sportif[] {
    return [
      { id: 1, nom: 'monkey D.', prenom: 'luffy', age: 21, image: 'luffy.jpg' },
      {
        id: 2,
        nom: 'hatake',
        prenom: 'kakashi',
        age: 21,
        image: 'kakashi.jpg',
      },
      { id: 3, nom: 'uchiwa', prenom: 'itachi', age: 21, image: 'itachi.jpg' },
      { id: 4, nom: 'uchiwa', prenom: 'madara', age: 21, image: 'madara.jpg' },
      { id: 5, nom: 'uzumaki', prenom: 'naruto', age: 21, image: 'naruto.jpg' },
    ];
  }

  postSportif(data:any){
    console.log(data);
  }
}

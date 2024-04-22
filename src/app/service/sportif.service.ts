import { Injectable } from '@angular/core';
import { Sportif } from '../interface/sportif';

@Injectable({
  providedIn: 'root'
})
export class SportifService {

  constructor() { }

  getSportif():Sportif[]{
    return[
      {id:1,nom:"monkey D.",prenom:"luffy",age:21},
      {id:2,nom:"hatake",prenom:"kakashi",age:21},
      {id:3,nom:"uchiwa",prenom:"itachi",age:21},
      {id:4,nom:"uchiwa",prenom:"madara",age:21},
      {id:5,nom:"uzumaki",prenom:"naruto",age:21},
    ]
  }
}

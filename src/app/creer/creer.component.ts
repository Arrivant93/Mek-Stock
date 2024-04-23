import { Component } from '@angular/core';
import { SportifService } from '../service/sportif.service';

@Component({
  selector: 'app-creer',
  templateUrl: './creer.component.html',
  styleUrl: './creer.component.css'
})
export class CreerComponent {
  
  constructor(private sportifService: SportifService) {}

  submit(data: any){
    this.sportifService.postSportif(data);
  }

}

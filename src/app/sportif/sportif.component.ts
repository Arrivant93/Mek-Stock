import { Component } from '@angular/core';
import { SportifService } from '../service/sportif.service';

@Component({
  selector: 'app-sportif',
  templateUrl: './sportif.component.html',
  styleUrl: './sportif.component.css'
})
export class SportifComponent {

  sportifs: any[] = [];

  constructor(private sportifService: SportifService){}

  ngOnInit() {
    this.sportifs = this.sportifService.getSportif();
  }

}

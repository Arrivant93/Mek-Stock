import { Component } from '@angular/core';
import { SportifService } from '../service/sportif.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sportif-detail',
  templateUrl: './sportif-detail.component.html',
  styleUrl: './sportif-detail.component.css'
})
export class SportifDetailComponent {

  sportifDetail: any = {};
  sportifId: any;
  sportifDetailService: any;

  constructor(private sportifService: SportifService, private activeRoute: ActivatedRoute){ }

  ngOnInit() {
    this.sportifId = this.activeRoute.snapshot.paramMap.get('id');
    this.sportifDetail = this.sportifService.getSportif().filter(x =>x.id==this.sportifId);

  

  }


}

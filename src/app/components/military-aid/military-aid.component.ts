import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { sqlDataApi } from 'sql-data-api';

@Component({
  selector: 'app-pickups',
  templateUrl: './military-aid.component.html',
  styleUrls: ['./military-aid.component.css']
})
export class MilitaryAidComponent implements OnInit{
  constructor(private route: ActivatedRoute) {}

  aid: any[] = [];
  async ngOnInit(): Promise<void> {
    //this.tripDate = this.route.snapshot.queryParamMap.get('tripDate');

    this.aid = await sqlDataApi('public-data-connect')
    .select('t.tripDate, t.category, t.item, t.quantity, t.receiver')
    .query("publicData.volunteeringGoods t");
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { sqlDataApi } from 'sql-data-api';

@Component({
  selector: 'app-pickups',
  templateUrl: './pickups.component.html',
  styleUrls: ['./pickups.component.css']
})
export class PickupsComponent implements OnInit{
  constructor(private route: ActivatedRoute) {}

  pickups: any[] = [];
  async ngOnInit(): Promise<void> {
    //this.tripDate = this.route.snapshot.queryParamMap.get('tripDate');

    this.pickups = await sqlDataApi("public-data-connect")
    .select("t.reg, t.tripDate, t.model, t.mainDriver, t.secondaryDriver, t.sponsoredBy, t.receivedBy")
    .query("publicData.VolunteeringPickups t")
  }
}

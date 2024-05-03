import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { sqlDataApi } from 'sql-data-api';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  donors: any[] = [];
  async ngOnInit(): Promise<void> {
    //this.tripDate = this.route.snapshot.queryParamMap.get('tripDate');

    this.donors = await sqlDataApi('public-data-connect')
    .select('t.tripDate, t.donorName, t.donation')
    .orderBy('donation DESC')
    .query('publicData.VolunteeringDonations t');
  }
}

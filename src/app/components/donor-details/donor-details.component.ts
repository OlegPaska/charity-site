import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { sqlDataApi } from 'sql-data-api';

@Component({
  selector: 'app-donor-details',
  templateUrl: './donor-details.component.html',
  styleUrls: ['./donor-details.component.css']
})
export class DonorDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  donor: any = null;
  donorDetails: any[] = [];

  async ngOnInit(): Promise<void> {
    this.donor = this.route.snapshot.queryParamMap.get('donorName');
  
    this.donorDetails = await sqlDataApi('public-data-connect')
    .select('t.tripDate, t.donation')
    .orderBy('donation DESC')
    .filter(' t.donorName = @dt ', { dt: this.donor })
    .query('publicData.VolunteeringDonations t');
    console.log(this.donorDetails)
  }
}

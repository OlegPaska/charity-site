import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { sqlDataApi } from 'sql-data-api';
import { CalloutComponent } from '@coreui/angular';

export interface Donations{
  tripDate: string,
  donorName: string,
  donation: number
}

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
})
export class TripDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  tripDate: string | null = null;
  //donations: Donations[] = [];
  donationsData: any = [];
  pickupsData: any = [];
  aidData: any = [];
  summary: any = null;

  async ngOnInit(): Promise<void> {
    this.tripDate = this.route.snapshot.queryParamMap.get('tripDate');

    this.donationsData = await sqlDataApi('public-data-connect')
      .select('t.tripDate, t.donorName, t.donation')
      .filter(' t.tripDate = @dt ', { dt: this.tripDate })
      .orderBy('donation DESC')
      .query('publicData.VolunteeringDonations t');

    this.pickupsData = await sqlDataApi("public-data-connect")
    .select("t.reg, t.tripDate, t.model, t.mainDriver, t.secondaryDriver, t.sponsoredBy, t.receivedBy")
    .filter(' t.tripDate = @dt ', { dt: this.tripDate })
    .query("publicData.VolunteeringPickups t");

    this.aidData = await sqlDataApi('public-data-connect')
    .select('t.tripDate, t.category, t.item, t.quantity, t.receiver')
    .filter(' t.tripDate = @dt ', { dt: this.tripDate })
    .query("publicData.volunteeringGoods t");

    this.summary = await sqlDataApi("public-data-connect")
    .select("count(*) trips, sum(t.PickUpsDonated) pickups, sum(t.DonationsRaised) donations")
    .top(1000)
    .query("publicData.VolunteeringTripsSummary t")

    console.log(this.summary)
    console.log(this.summary[0].pickups)
  }
}



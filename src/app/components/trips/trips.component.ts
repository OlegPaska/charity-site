import { Component, OnInit } from '@angular/core';
import { sqlDataApi } from 'sql-data-api';

export interface TripDetails {
  TripDate: string;
  Name: string;
  PickUpsDonated: number | null;
  DonationsRaised: number | null;
  Link1: string | null;
}

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css'],
})
export class TripsComponent implements OnInit {
  getData(): TripDetails[] {
    return [
      {
        TripDate: '2024-02-17',
        Name: 'Winter 2024',
        PickUpsDonated: 3,
        DonationsRaised: 7400,
        Link1:
          'https://www.facebook.com/pavlo.paska/posts/pfbid02PvK4ZaZEjVqeBtCvJGAYhXB2CfJYJDdQHQw8Ujd27smG1CXWHnaAdqrqqK6SqwDsl',
      },
      {
        TripDate: '2023-11-24',
        Name: 'Autumn 2023',
        PickUpsDonated: 3,
        DonationsRaised: 6000,
        Link1:
          'https://www.facebook.com/pavlo.paska/posts/pfbid0PHjAnucuALmCNCt3xfiYBfTvZb5QBXZ4KGPYFyen2kDyHyACXnZVvbfwa9aAzcVxl',
      },
      {
        TripDate: '2023-10-18',
        Name: 'Sad Trip',
        PickUpsDonated: 1,
        DonationsRaised: null,
        Link1: null,
      },
      {
        TripDate: '2023-08-26',
        Name: 'Summer 2023',
        PickUpsDonated: 5,
        DonationsRaised: 900,
        Link1:
          'https://www.facebook.com/pavlo.paska/posts/pfbid0k37Zv73Ws2izGeX7fsty8i7b12SN2X8nVU5PEAzX2aEXZ6smLB5cFnmZ6eh2BFbil',
      },
      {
        TripDate: '2023-08-11',
        Name: "Oleg's First Trip",
        PickUpsDonated: 2,
        DonationsRaised: 4185,
        Link1:
          'https://www.facebook.com/pavlo.paska/posts/pfbid0sBTViG9YwR5wL3WV4z5uYicJLth1zu9HqtZb3kdJfJbgo4dQaNxYYWPzV5EwWsdSl',
      },
      {
        TripDate: '2023-06-15',
        Name: 'June 2023',
        PickUpsDonated: 1,
        DonationsRaised: 3990,
        Link1:
          'https://www.facebook.com/pavlo.paska/posts/pfbid0WsWuupJDsC1iGiQzhns4M8AMpGmrfErn1NLgiCgvCgn7x3zs1PTZKCkDDa5AffPMl',
      },
      {
        TripDate: '2023-04-30',
        Name: 'Spring 2023',
        PickUpsDonated: 3,
        DonationsRaised: 3150,
        Link1:
          'https://www.facebook.com/pavlo.paska/posts/pfbid0oJ3iAijcwcpqcDtKcxK7r7SPGhfromuzzwJZBkpfQZPSttvmWD59SRF5g64Kvtwml',
      },
      {
        TripDate: '2023-02-24',
        Name: 'February 2023',
        PickUpsDonated: 1,
        DonationsRaised: 5539,
        Link1:
          'https://www.facebook.com/pavlo.paska/posts/pfbid0WuUxEhXGQvrbBcnV7KWVCG6TkoVdVbXr5BzQAJKuiNDNEyRdbQxghok5TGHmugyTl',
      },
      {
        TripDate: '2023-01-14',
        Name: 'Winter 2023',
        PickUpsDonated: 4,
        DonationsRaised: 1800,
        Link1:
          'https://www.facebook.com/TvoryDobroRazom/posts/pfbid02n5H6eAmVvm2hFfcXSRiT9ztkAK8ATNzRBTANWzrxAbCkGu8qhL15HM87BXsxZSXzl',
      },
      {
        TripDate: '2022-12-15',
        Name: 'December 2022',
        PickUpsDonated: 1,
        DonationsRaised: null,
        Link1:
          'https://www.facebook.com/pavlo.paska/posts/pfbid0S1eQKxy1agNQobJB1C8dy6XEn8iq43ZD9GiA191RVn5jFn4D8U4h32pcbe3yK1Hhl',
      },
      {
        TripDate: '2022-11-25',
        Name: 'First London - Lviv Trip',
        PickUpsDonated: 1,
        DonationsRaised: 3760,
        Link1:
          'https://www.facebook.com/pavlo.paska/posts/pfbid0UhGcpmTrWWyaUfEMjPEKahW6EUZSb6d3RWZ6hJuwnqwBEUEev1GTmadH6SFEZLael',
      },
    ];
  }

  data: any[] = [];

  async ngOnInit(): Promise<void> {
    this.data = await sqlDataApi("public-data-connect")
      .select("t.TripDate, t.Name, t.PickUpsDonated, t.DonationsRaised, t.Link1")
      .orderBy("TripDate DESC")
      .query("publicData.VolunteeringTripsSummary t");
  }
}

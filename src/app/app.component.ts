import { Component, OnInit } from '@angular/core';
import { setBaseUrl } from 'sql-data-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setBaseUrl('https://api.worksheet.systems');
  }
  title = 'charity-site';
}

import { Component, OnInit } from '@angular/core';
import {  faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss'],
})
export class TrendsComponent implements OnInit {
  
  private readonly URL_PREFIX = 'https://trends.google.com/trends/explore';
  faSquareArrowUpRight = faSquareArrowUpRight;
  countryCode: string;
  US = 'US';
  GB = 'GB';
  AU = 'AU';
  constructor() {}

  ngOnInit(): void {}
}

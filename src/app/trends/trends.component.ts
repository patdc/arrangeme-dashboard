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
  trends = [
    {
        title: 'Sheet Music Topic',
        country: 'United States',
        past12months: {
          label: 'Past 12 months',
          link: `${this.URL_PREFIX}?geo=US&q=%2Fg%2F1213jbl8&hl=en`,
        },
        past7days: {
          label: 'Past 7 days',
          link: `${this.URL_PREFIX}?date=now%207-d&geo=US&q=%2Fg%2F1213jbl8&hl=en`,
        },
        past30days: {
          label: 'Past 30 days',
          link: `${this.URL_PREFIX}?date=today%201-m&geo=US&q=%2Fg%2F1213jbl8&hl=en`,
        },
        past90days: {
          label: 'Past 90 days',
          link: `${this.URL_PREFIX}?date=today%203-m&geo=US&q=%2Fg%2F1213jbl8&hl=en`,
        },
        
        pastHour: {
          label: 'Past hour',
          link: `${this.URL_PREFIX}?date=now%201-H&geo=US&q=%2Fg%2F1213jbl8&hl=en`,
        },
        pastDay: {
          label: 'Past day',
          link: `${this.URL_PREFIX}?date=now%201-d&geo=US&q=%2Fg%2F1213jbl8&hl=en`,
        },

    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

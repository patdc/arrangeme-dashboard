import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { CadenzaButtonModule } from 'src/app/ds';

@Component({
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, CadenzaButtonModule],
  selector: 'trends-card',
  templateUrl: './trends-card.component.html',
  styleUrls: ['./trends-card.component.scss'],
})
export class TrendsCardComponent implements OnInit {
  private readonly URL_PREFIX = 'https://trends.google.com/trends/explore';

  faSquareArrowUpRight = faSquareArrowUpRight;
  @Input() countryCode: string = '';
  @Input() searchParams: string = '';
  @Input() term: string = '';


  trends = [];

  constructor() {}

  ngOnInit(): void {
    this.trends = [
      {
          title: this.term,
          country: 'United States',
          past12months: {
            label: 'Past 12 months',
            link: `${this.URL_PREFIX}?geo=${this.countryCode}${this.searchParams}`,
          },
          past7days: {
            label: 'Past 7 days',
            link: `${this.URL_PREFIX}?date=now%207-d&geo=${this.countryCode}${this.searchParams}`,
          },
          past30days: {
            label: 'Past 30 days',
            link: `${this.URL_PREFIX}?date=today%201-m&geo=${this.countryCode}${this.searchParams}`,
          },
          past90days: {
            label: 'Past 90 days',
            link: `${this.URL_PREFIX}?date=today%203-m&geo=${this.countryCode}${this.searchParams}`,
          },
          
          pastHour: {
            label: 'Past hour',
            link: `${this.URL_PREFIX}?date=now%201-H&geo=${this.countryCode}${this.searchParams}`,
          },
          pastDay: {
            label: 'Past day',
            link: `${this.URL_PREFIX}?date=now%201-d&geo=${this.countryCode}${this.searchParams}`,
          },
  
      },
    ];
  }
}

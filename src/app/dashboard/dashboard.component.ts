import { Component, OnInit } from '@angular/core';
import { MetricsService } from '../services/metrics.service';
import * as Papa from 'papaparse';
import { Product } from '../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faMoneyBill1Wave,
  faBagShopping,
  faHandHoldingDollar,
  faDollarSign,
  faMoneyBillTransfer,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private metricsService: MetricsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  csvData: Product[];
  filteredData: Product[] = [];

  faMoneyBill1Wave = faMoneyBill1Wave;
  faBagShopping = faBagShopping;
  faHandHoldingDollar = faHandHoldingDollar;
  faDollarSign = faDollarSign;
  faMoneyBillTransfer = faMoneyBillTransfer;

  totalSales: number = 0;
  totalCommissions: number = 0;
  totalQuantity: number = 0;
  totalRefunds: number = 0;
  mostUsedFormatsData: any = [];
  totalSalesAndQuantityByCountry: any;
  mostUsedFormats: { format: string; count: number }[] = [];
  years: number[] = [];
  displayCount = 3; // Initial number of items to display
  initialDisplayCount = 3;
  salesAndQuantityByCountryData: any[] = [];
  countriesList: any = [];
  countriesLength: number = 0;

  selectedYear: number | null = null;
  selectedMonth: number | null = null;

  months = [
    { name: 'Janeiro', value: 1 },
    { name: 'Fevereiro', value: 2 },
    { name: 'Março', value: 3 },
    { name: 'Abril', value: 4 },
    { name: 'Maio', value: 5 },
    { name: 'Junho', value: 6 },
    { name: 'Julho', value: 7 },
    { name: 'Agosto', value: 8 },
    { name: 'Setembro', value: 9 },
    { name: 'Outubro', value: 10 },
    { name: 'Novembro', value: 11 },
    { name: 'Dezembro', value: 12 },
  ];

  currentDate = new Date();
  monthNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  ngOnInit(): void {
    this.loadCsvData();
    this.route.params.subscribe((params) => {
      this.selectedYear = params['year'] ? Number(params['year']) : null;
      this.selectedMonth = params['month'] ? Number(params['month']) : null;
      this.filterDataByRouteParams(params['year'], params['month']);
    });
  }

  loadCsvData(): void {
    this.csvData = JSON.parse(localStorage.getItem('csvData') || '[]');
    this.calculateMetrics(this.csvData);
    this.years = this.getYearsAvailable(this.csvData);
  }

  calculateMetrics(data: Product[]): void {
    this.totalSales = this.metricsService.getTotalSales(data);
    this.totalCommissions = this.metricsService.getTotalCommissions(data);
    this.totalQuantity = this.metricsService.getTotalQuantity(data);
    this.totalRefunds = this.metricsService.getTotalRefunds(data);
    this.mostUsedFormats = this.metricsService.getMostUsedFormats(data);
    this.totalSalesAndQuantityByCountry =
      this.metricsService.salesAndQuantityByCountry(data);
    this.salesAndQuantityByCountryData =
      this.metricsService.salesAndQuantityByCountry(data);
    this.countriesList = this.metricsService.countriesCount(data);
  }

  handleFileUpload(event: any): void {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (result) => {
          localStorage.setItem('csvData', JSON.stringify(result.data));
          this.loadCsvData(); // Load the new CSV data and recalculate the metrics
        },
      });
    }
  }

  get currentMonthAndYear(): string {
    return `${
      this.monthNames[this.currentDate.getMonth()]
    } ${this.currentDate.getFullYear()}`;
  }

  get daysRemaining(): number {
    const endOfMonth = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      0
    );
    return endOfMonth.getDate() - this.currentDate.getDate();
  }

  filterByYear(selectedYear: number): void {
    this.filteredData = this.filterDataByYear(this.csvData, selectedYear);
    this.calculateMetrics(this.filteredData);
  }

  filterByMonth(data: Product[], month: number): Product[] {
    return data.filter((item) => {
      const date = new Date(item['Date']);
      return date.getMonth() === month;
    });
  }

  getYearsAvailable(data: Product[]): number[] {
    let years: number[] = [];
    data.forEach((item) => {
      const date = new Date(item['Date']);
      const year = date.getFullYear();
      if (isNaN(year)) {
        console.error('Invalid date:', item['Date']);
      } else if (!years.includes(year)) {
        years.push(year);
      }
    });
    return [...years];
  }

  filterDataByYear(data: Product[], year: number): Product[] {
    return data.filter((item: any) => {
      const itemDate = new Date(item.Date);
      const itemYear = itemDate.getFullYear();
      return itemYear === year;
    });
  }

  filterDataByRouteParams(year?: string, month?: string): void {
    let data = this.csvData;

    // If year is defined, filter by year
    if (year) {
      data = this.filterDataByYear(data, +year);
    }

    // If month is defined, filter by month
    if (month) {
      data = this.filterByMonth(data, +month - 1);
    }

    // Update filtered data and recalculate metrics
    this.filteredData = data;
    this.calculateMetrics(this.filteredData);
  }

  onSeeMore(): void {
    this.displayCount += 5;
  }

  onShowLess(): void {
    this.displayCount = this.initialDisplayCount;
  }

  onYearChange() {
    this.navigate();
  }

  onMonthChange() {
    this.navigate();
  }

  navigate() {
    const commands: any[] = ['/'];
    if (this.selectedYear) {
      commands.push(this.selectedYear);
      if (this.selectedMonth) {
        commands.push(this.selectedMonth);
      }
    }
    this.router.navigate(commands);
  }
  onYearSelected(year: number) {
    this.selectedYear = year;
    this.navigate();
  }

  onMonthSelected(month: number) {
    this.selectedMonth = month;
    this.navigate();
  }
}

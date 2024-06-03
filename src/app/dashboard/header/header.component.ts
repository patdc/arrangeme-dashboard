import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() currentMonthAndYear: any;
  @Input() daysRemaining: number;
  @Input() countriesList: string[];
  @Input() years: number[];

  @Output() fileUploaded = new EventEmitter<any>();
  @Output() yearChanged = new EventEmitter<any>();

  faUpload = faUpload;

  handleFileUpload(event: any) {
    this.fileUploaded.emit(event);
  }

  onYearChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const selectedYear = Number(select.value);
    this.yearChanged.emit(selectedYear);
  }
}

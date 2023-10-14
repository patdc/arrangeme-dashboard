import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-motivation-card',
  templateUrl: './motivation-card.component.html',
})
export class MotivationCardComponent {
  @Input() totalCommissions: number;
  @Input() totalSales: number;
  @Input() countriesList: string[];
}

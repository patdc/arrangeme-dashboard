import { Component, Input } from '@angular/core';
import { IconDefinition, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-primary-card',
  templateUrl: './primary-card.component.html',
  styleUrls: ['./primary-card.component.scss'],
})
export class PrimaryCardComponent {
  @Input() icon: IconDefinition = faMoneyBill;
  @Input() label?: string;
  @Input() description?: string;
  @Input() value?: number | string | any;

  faMoneyBill = faMoneyBill;
}

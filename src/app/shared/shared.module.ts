import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NoSalesComponent } from './no-sales/no-sales.component';
import {TableModule} from 'primeng/table'
import { TrendsComponent } from '../trends/trends.component';
import { CadenzaButtonModule } from '../ds/components';
import { UtilsComponent } from '../utils/utils.component';

@NgModule({
  declarations: [
    SidenavComponent,
    NoSalesComponent,
    TrendsComponent,
    UtilsComponent
  ],
  imports: [CommonModule, FormsModule, FontAwesomeModule, RouterModule, TableModule, CadenzaButtonModule],
  exports: [
    SidenavComponent, 
    NoSalesComponent
  ],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}

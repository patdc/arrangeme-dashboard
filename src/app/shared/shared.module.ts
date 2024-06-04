import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NoSalesComponent } from './no-sales/no-sales.component';
import {TableModule} from 'primeng/table'
import { TrendsComponent } from '../trends/trends.component';
import { CadenzaButtonModule } from '../ds/components';
import { UtilsComponent } from '../utils/utils.component';
import { UtilsDesignComponent } from '../utils-design/utils-design.component';
import { TrendsCardComponent } from '../trends/trends-card/trends-card.component';

@NgModule({
  declarations: [
    SidenavComponent,
    NoSalesComponent,
    TrendsComponent,
    UtilsComponent,
    UtilsDesignComponent,
    TrendsComponent,
    
  ],
  imports: [CommonModule, FormsModule, FontAwesomeModule, RouterModule, TableModule, CadenzaButtonModule, TrendsCardComponent, ReactiveFormsModule, FormsModule],
  exports: [
    SidenavComponent, 
    NoSalesComponent
  ],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}

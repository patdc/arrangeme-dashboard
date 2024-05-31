import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NoSalesComponent } from './no-sales/no-sales.component';

@NgModule({
  declarations: [
    SidenavComponent,
    NoSalesComponent
  ],
  imports: [CommonModule, FormsModule, FontAwesomeModule, RouterModule],
  exports: [
    SidenavComponent, 
    NoSalesComponent
  ],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}

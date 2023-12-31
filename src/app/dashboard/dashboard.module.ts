import { NgModule } from '@angular/core';
import { PrimaryCardComponent } from './primary-card/primary-card.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MotivationCardComponent } from './motivation-card/motivation-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PrimaryCardComponent,
    DashboardComponent,
    HeaderComponent,
    MotivationCardComponent,
  ],
  imports: [CommonModule, FormsModule, FontAwesomeModule, RouterModule],
  providers: [],
  bootstrap: [],
})
export class DashboardModule {}

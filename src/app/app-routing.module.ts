import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DarkChannelComponent } from './dark-channel/dark-channel.component';
import { TrendsComponent } from './trends/trends.component';
import { UtilsComponent } from './utils/utils.component';
import { DarkChannelSheetMusicComponent } from './dark-channel-sm/dark-channel-sm.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'dark-channel',
    component: DarkChannelComponent,
  },
  {
    path: 'dark-channel-sm',
    component: DarkChannelSheetMusicComponent,
  },
  {
    path: 'trends',
    component: TrendsComponent,
  },
  {
    path: 'utils',
    component: UtilsComponent,
  },
  {
    path: ':year',
    component: DashboardComponent,
  },
  {
    path: ':year/:month',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

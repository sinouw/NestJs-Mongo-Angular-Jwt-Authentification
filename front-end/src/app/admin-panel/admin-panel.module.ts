import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule
} from '@angular/material';
import { AdminPanelComponent } from './admin-panel.component';
import { HousesListComponent } from './houses/houses-list/houses-list.component';
import { ProfileComponent } from './profile/profile.component';
import { MenuModule } from '../menu/menu.module';
import { RouterModule } from '@angular/router';
import { AdminAccountRoutes } from './admin-panel.routing';
import { HousesComponent } from './houses/houses.component';
import { HousesDetailsComponent } from './houses/houses-details/houses-details.component';
import { ClientsComponent } from './clients/clients.component';
import { HttpClientModule } from '@angular/common/http';
import { HousesService } from './services/houses.service';


@NgModule({
  declarations: [AdminPanelComponent, HousesListComponent, HousesDetailsComponent, ProfileComponent, HousesComponent, ClientsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminAccountRoutes),
    MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatBadgeModule,
      MatListModule,
      MatGridListModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatChipsModule,
      MatTooltipModule,
      MatTableModule,
      MatPaginatorModule,
      MatCardModule,
      MenuModule,
      HttpClientModule
  ],
  exports:[
    MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatBadgeModule,
      MatListModule,
      MatGridListModule,
      MatInputModule,
      MatFormFieldModule,
      MatSelectModule,
      MatRadioModule,
      MatDatepickerModule,
      MatChipsModule,
      MatTooltipModule,
      MatTableModule,
      MatPaginatorModule,
      MatCardModule
  ],
  providers:[HousesService]
})
export class AdminPanelModule { }

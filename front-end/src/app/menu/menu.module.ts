import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalheaderComponent } from './globalheader/globalheader.component';
import { HeaderComponent } from './Adminheader/header.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { SideNavBarService } from './side-nav-bar/side-nav-bar.service';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [HeaderComponent, GlobalheaderComponent, SideNavBarComponent],
  imports: [
    CommonModule,
    FormsModule,
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
  ],
  exports:[HeaderComponent,
    SideNavBarComponent,
    GlobalheaderComponent,
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
  providers:[SideNavBarService]
})
export class MenuModule { }

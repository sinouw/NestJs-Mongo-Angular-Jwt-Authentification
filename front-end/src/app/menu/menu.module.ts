import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { GlobalheaderComponent } from './globalheader/globalheader.component';
import { HeaderComponent } from './Adminheader/header.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { SideNavBarService } from './side-nav-bar/side-nav-bar.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent, GlobalheaderComponent, SideNavBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    
  ],
  exports:[HeaderComponent,SideNavBarComponent],
  providers:[SideNavBarService]
})
export class MenuModule { }

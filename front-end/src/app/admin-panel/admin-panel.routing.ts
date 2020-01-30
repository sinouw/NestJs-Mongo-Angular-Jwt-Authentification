import { Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';
import { AuthGuard } from '../auth/guard/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { HousesComponent } from './houses/houses.component';
import { ClientsComponent } from './clients/clients.component';
import { HousesDetailsComponent } from './houses/houses-details/houses-details.component';



export const AdminAccountRoutes: Routes = [
	{
		path      : '',
      component : AdminPanelComponent,
      canActivate: [AuthGuard],
		children: [ 
         {
            path: 'profile',
            component: ProfileComponent,
            canActivate: [AuthGuard]
         },
         { 
            path: 'houses', 
            component: HousesComponent,
            canActivate: [AuthGuard]
         }, 
         { 
            path: 'clients', 
            component: ClientsComponent,
            canActivate: [AuthGuard]
         }, 
      ]
	}
];
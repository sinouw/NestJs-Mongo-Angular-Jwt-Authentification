import { Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';
import { AuthGuard } from '../auth/guard/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { HousesListComponent } from './houses-list/houses-list.component';
import { HousesDetailsComponent } from './houses-details/houses-details.component';


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
            component: HousesListComponent,
            canActivate: [AuthGuard]

         },
         { 
            path: 'houses/details', 
            component: HousesDetailsComponent,
            canActivate: [AuthGuard]

         },
 
      ]
	}
];
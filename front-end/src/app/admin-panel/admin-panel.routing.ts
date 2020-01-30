import { Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';
import { AuthGuard } from '../auth/guard/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { HousesComponent } from './houses/houses.component';



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
      ]
	}
];
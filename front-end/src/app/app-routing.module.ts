import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './extra/forbidden/forbidden.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { NotfoundComponent } from './extra/notfound/notfound.component';
import { MyHomeComponent } from './my-home/my-home.component';
// import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  {path:'home',component:MyHomeComponent},
  {path:'not-found',component:NotfoundComponent},
  {path:'forbidden',component:ForbiddenComponent},
  {path:'adminpanel',loadChildren:()=>
import('./admin-panel/admin-panel.module').then(m=>m.AdminPanelModule)},
// component:AdminPanelComponent,canActivate:[AuthGuard]
  {
       path: '**',
       redirectTo: 'not-found'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

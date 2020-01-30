import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { AuthInterceptor } from './auth/helper/auth.interceptor';
import { ForbiddenComponent } from './extra/forbidden/forbidden.component';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { MenuModule } from './menu/menu.module';
import { NotfoundComponent } from './extra/notfound/notfound.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    ForbiddenComponent,
    NotfoundComponent,
    MyHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule,
    AdminPanelModule,
    MenuModule,
    
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }

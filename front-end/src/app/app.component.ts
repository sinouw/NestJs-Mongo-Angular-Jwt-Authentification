import { Component } from '@angular/core';
import { UserService } from './shared/user.service';
import { AdminService } from './shared/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Naxxum Mea';
}

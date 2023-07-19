import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private _router: Router, private noty: NotificationService) {

  }

  public handleClick(evt: any) {
    this._router.navigate(['/projects']);
  }

  public clearSession() {
    this.noty.clearSession();
  }

}

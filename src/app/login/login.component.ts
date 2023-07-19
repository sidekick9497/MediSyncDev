import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _router: Router) {
    
  }
 
  /**
   * handle click evt on submit btn
   * @param evt 
   */
  public handleFormSubmit(evt: any) {
    this._router.navigate(['/dashboard']);
  }
}

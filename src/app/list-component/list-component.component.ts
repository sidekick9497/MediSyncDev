import { Component, OnInit } from '@angular/core';
import { DisplayDensity, IgxFilterOptions } from 'igniteui-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent {
  

  public plans: any;
  public idKey = "id";

  showToasterSuccess(name: any, id: any) {
    this.notifyService.selectedPlanId = id;
    this.notifyService.saveData(this.idKey, id);
    this.notifyService.showSuccess("Please check the profile page for more information", name + " added successfully");
  }
  constructor(private notifyService: NotificationService) {
    this.plans = this.notifyService.plans;
  }
  public clearSession() {
    this.notifyService.clearSession();
    this.notifyService.showSuccess("Please check the profile page for more information", "Plan has been removed");
  }

}

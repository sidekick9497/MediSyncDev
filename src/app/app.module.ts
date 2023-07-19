import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { LoginComponent } from './login/login.component';
import { CardModule } from 'primeng/card';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StepsModule } from 'primeng/steps';
import { ProjectComponent } from './project/project.component';
import { ChartModule } from 'primeng/chart';
import { AppConfigService } from './service/appconfigservice';
import { PieChartCardComponent } from './components/pie-chart-card/pie-chart-card.component';
import { RadarChartCardComponent } from './components/radar-chart-card/radar-chart-card.component';
import { TableDonutChartCardComponent } from './components/table-donut-chart-card/table-donut-chart-card.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  IgxAvatarModule,
  IgxFilterModule,
  IgxIconModule,
  IgxListModule,
  IgxInputGroupModule,
  IgxButtonGroupModule,
  IgxRippleModule
} from "igniteui-angular";
import { ClaimsComponent } from './claims/claims.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgPaymentCardModule } from 'ng-payment-card';
import { ProfileComponent } from './profile/profile.component';
import { ToastrModule } from 'ngx-toastr';
import { InsuranceClaimFormComponent } from './insurance-claim-form/insurance-claim-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    ProjectComponent,
    PieChartCardComponent,
    RadarChartCardComponent,
    TableDonutChartCardComponent,
    ListComponentComponent,
    ClaimsComponent,
    ProfileComponent,
    InsuranceClaimFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    CardModule,
    StepsModule,
    ChartModule,
    CardModule,
    BrowserAnimationsModule, IgxListModule, HammerModule, MatCardModule, MatButtonModule, NgPaymentCardModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AppConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

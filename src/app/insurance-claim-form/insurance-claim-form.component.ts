import { Component } from '@angular/core';

@Component({
  selector: 'app-insurance-claim-form',
  templateUrl: './insurance-claim-form.component.html',
  styleUrls: ['./insurance-claim-form.component.scss']
})
export class InsuranceClaimFormComponent {
  claimData = {
    policyNumber: '',
    claimType: '',
    claimDetails: ''
  };

  submitForm() {
    // Here, you can handle the form submission logic
    console.log('Form submitted:', this.claimData);
    // You can send the form data to a backend server for processing or perform any other actions
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(public router: Router, public noty: NotificationService) {
    
  }

  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    photo: 'assets/p.png', // Replace with the actual user photo URL
    personalInfo: {
      dateOfBirth: '1990-01-01',
      gender: 'Male',
      address: '123 Main Street, City, Country',
      phone: '+1 123-456-7890'
    },
    healthData: {
      height: 180,
      weight: 75,
      bloodPressure: '120/80',
      heartRate: 72,
      bloodSugar: 90
    },
    medicalHistory: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Donec ut mauris eu ex rhoncus posuere in ac augue. 
      Suspendisse a turpis ut felis dictum suscipit. 
      Vestibulum interdum dui mi, a porttitor eros dictum non. 
      Nulla facilisi. Praesent eget metus sapien.
    `
  };
}

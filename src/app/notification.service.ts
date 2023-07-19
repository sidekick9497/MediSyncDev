import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { ListComponentComponent } from './list-component/list-component.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  private readonly storageKey = 'my_app_session_data';

  // Save data to sessionStorage
  saveData(key: string, value: any): void {
    const sessionData = this.getSessionData();
    sessionData[key] = value;
    sessionStorage.setItem(this.storageKey, JSON.stringify(sessionData));
  }

  // Retrieve data from sessionStorage
  getData(key: string): any {
    const sessionData = this.getSessionData();
    return sessionData[key];
  }

  // Clear the session data
  clearSession(): void {
    sessionStorage.removeItem(this.storageKey);
  }

  // Helper method to get session data from sessionStorage
  private getSessionData(): any {
    const sessionDataString = sessionStorage.getItem(this.storageKey);
    return sessionDataString ? JSON.parse(sessionDataString) : {};
  }



  showSuccess(message: string | undefined, title: string | undefined) {
    this.toastr.success(message, title)
  }

  showError(message: string | undefined, title: string | undefined) {
    this.toastr.error(message, title)
  }

  getPlanInformation() : any{
    var data = this.getData("id");
    return this.plans.find(x => x.id == data);
  }

  public check = false;
  public selectedPlanId = 0;

  public plans = [
    {
      id: 1,
      plan_name: "BasicCare Plus",
      monthly_premium: 150,
      deductible: 1000,
      coinsurance: 0.2,
      out_of_pocket_max: 5000,
      services_covered: {
        preventive_care: 1.0,
        doctors_visits: 0.8,
        hospitalization: 0.8,
        prescription_drugs: {
          generic: 10,
          brand: 30,
          specialty: 60
        }
      }
    },
    {
      id: 2,
      plan_name: "WellnessGuard",
      monthly_premium: 200,
      deductible: 500,
      coinsurance: 0.15,
      out_of_pocket_max: 4000,
      services_covered: {
        preventive_care: 1.0,
        doctors_visits: 0.9,
        hospitalization: 0.9,
        prescription_drugs: {
          generic: 5,
          brand: 20,
          specialty: 50
        }
      }
    },
    {
      id: 3,
      plan_name: "TotalHealth Elite",
      monthly_premium: 300,
      deductible: 250,
      coinsurance: 0.1,
      out_of_pocket_max: 3000,
      services_covered: {
        preventive_care: 1.0,
        doctors_visits: 1.0,
        hospitalization: 1.0,
        prescription_drugs: {
          generic: 3,
          brand: 15,
          specialty: 40
        }
      }
    },
    {
      id: 4,
      plan_name: "FamilyFirst Plan",
      monthly_premium: 400,
      deductible: 2000,
      coinsurance: 0.25,
      out_of_pocket_max: 8000,
      services_covered: {
        preventive_care: 1.0,
        doctors_visits: 0.8,
        hospitalization: 0.8,
        prescription_drugs: {
          generic: 10,
          brand: 30,
          specialty: 60
        }
      }
    },
    {
      id: 5,
      plan_name: "EssentialSaver",
      monthly_premium: 100,
      deductible: 1500,
      coinsurance: 0.2,
      out_of_pocket_max: 6000,
      services_covered: {
        preventive_care: 1.0,
        doctors_visits: 0.9,
        hospitalization: 0.9,
        prescription_drugs: {
          generic: 10,
          brand: 30,
          specialty: 60
        }
      }
    },
    {
      id: 6,
      plan_name: "SeniorWell Plus",
      monthly_premium: 180,
      deductible: 500,
      coinsurance: 0.1,
      out_of_pocket_max: 4000,
      services_covered: {
        preventive_care: 1.0,
        doctors_visits: 0.9,
        hospitalization: 0.9,
        prescription_drugs: {
          generic: 5,
          brand: 20,
          specialty: 50
        }
      }
    },
    {
      id: 7,
      plan_name: "CatastrophicCare",
      monthly_premium: 50,
      deductible: 6000,
      coinsurance: 0.1,
      out_of_pocket_max: 8000,
      services_covered: {
        preventive_care: 0.5,
        doctors_visits: 0.2,
        hospitalization: 0.2,
        prescription_drugs: {
          generic: 25,
          brand: 50,
          specialty: 100
        }
      }
    },
    {
      id: 8,
      plan_name: "MaternityPlus",
      monthly_premium: 250,
      deductible: 3000,
      coinsurance: 0.15,
      out_of_pocket_max: 6000,
      services_covered: {
        preventive_care: 1.0,
        doctors_visits: 0.9,
        hospitalization: 0.9,
        "maternity_care": 1.0,
        prescription_drugs: {
          generic: 10,
          brand: 30,
          specialty: 60
        }
      }
    },
    {
      id: 9,
      plan_name: "DentalCare",
      monthly_premium: 30,
      deductible: 100,
      coinsurance: 0.1,
      out_of_pocket_max: 1500,
      services_covered: {
        "preventive_dental": 1.0,
        "basic_dental": 0.8,
        "major_dental": 0.5
      }
    },
    {
      id: 10,
      plan_name: "VisionEssentials",
      monthly_premium: 20,
      deductible: 50,
      coinsurance: 0.1,
      out_of_pocket_max: 800,
      services_covered: {
        "eye_exam": 1.0,
        "eyeglasses": 0.8,
        "contact_lenses": 0.8,
        "vision_correction_surgery": 0.5
      }
    }
  ];
}

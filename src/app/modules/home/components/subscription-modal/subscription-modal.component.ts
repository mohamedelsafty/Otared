import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { PrimaryListForm } from 'src/app/shared/models/landing.model';

@Component({
  selector: 'app-subscription-modal',
  templateUrl: './subscription-modal.component.html',
  styleUrls: ['./subscription-modal.component.scss']
})
export class SubscriptionModalComponent implements OnInit {
  
  isLoading:boolean = false;
  isModalOpened: boolean = false;
  primayListForm: PrimaryListForm = new PrimaryListForm();
  primaryListFormSuccess: boolean = false;
  primaryListFormError: boolean = false;


  constructor(private http:HttpService) { }

  ngOnInit(): void {
  }

  openModal() {
    this.isModalOpened = true;
  }

  closeModal() {
    this.isModalOpened = false;
  }

  resetForm(){
    this.primayListForm.name = null;
    this.primayListForm.phone = null;
    this.primayListForm.email = null;
    this.primayListForm.customer_type = 'مطور عقاري';
    this.primayListForm.is_receive_new = false;
  }

  primaryList(){
    this.isLoading = true;
    this.http.create(this.primayListForm, 'add-to-list-receive-new', 'landingApi').subscribe(
      res => {
        if (res){
          this.isLoading = false;
          this.primaryListFormSuccess = true;
          setTimeout(() => { // close modal after 5 seconds
            this.resetForm();
            this.primaryListFormSuccess = false;
            this.closeModal();
          }, 5000);
        }
      },
      error => {
        if (error.status === 422) {
          this.isLoading = false;
          this.primaryListFormError = true;
          setTimeout(() => { // close modal after 10 seconds
            this.resetForm();
            this.primaryListFormError = false;
            this.closeModal();
          }, 5000);
        }
      }
    );
  }

}

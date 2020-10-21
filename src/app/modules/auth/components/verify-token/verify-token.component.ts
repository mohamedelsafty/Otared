import { Component, OnInit } from '@angular/core';
import { UserReset } from 'src/app/shared/models/user.model';
import { HttpService } from 'src/app/shared/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verify-token',
  templateUrl: './verify-token.component.html',
  styleUrls: ['./verify-token.component.scss']
})
export class VerifyTokenComponent implements OnInit {
  isLoading;
  error;
  user: UserReset = {
    phone_number: undefined,
    password_hash: undefined,
    r_password_hash: undefined,
    token: undefined,
  };
  constructor(
    private httpService: HttpService,
    public route: ActivatedRoute,
    private router: Router
  ) {

   }

  ngOnInit(): void {
    let paramNum = this.route.snapshot.queryParams;
    if(paramNum["phone_number"]) this.user.phone_number = paramNum["phone_number"];
    else this.router.navigate([`/auth/forgot-password`]);
  }
  check(){
    this.isLoading = true;
    this.httpService
      .getAll(
        `password-reset/find?phone_number=${this.user.phone_number}&token=${this.user.token}`
      )
      .subscribe(
        (res) => {
          if (res) {
            this.isLoading = false;
            this.router.navigate([`/auth/reset-password`], {
              queryParams: { phone_number: this.user.phone_number, token: this.user.token },
            });
          }
        },
        (error) => {
          if (error.status === 422) {
            this.isLoading = false;
            this.error = error.error.message
          }
        }
      );
  }
}

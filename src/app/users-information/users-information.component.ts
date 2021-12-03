import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-services/api-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-users-information',
  templateUrl: './users-information.component.html',
  styleUrls: ['./users-information.component.css'],
})
export class UsersInformationComponent implements OnInit {
  usersInformation: any;
  complete: boolean = false;
  error: boolean = false;
  loading: boolean = true;
  constructor(
    private apiServiceService: ApiServiceService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.loading = false;
    }, 3000);
    this.apiServiceService.usersInformation().subscribe(
      (usersInformation: any) => {
        this.usersInformation = usersInformation;
      },
      (err) => {
        this.error = true;
      },
      () => {
        this.complete = true;
        console.log(this.usersInformation);
      }
    );
  }
}

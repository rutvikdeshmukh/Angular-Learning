import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from 'src/app/api-services/api-service.service';
@Component({
  selector: 'app-user-entered-subreddit',
  templateUrl: './user-entered-subreddit.component.html',
  styleUrls: ['./user-entered-subreddit.component.css'],
})
export class UserEnteredSubredditComponent implements OnInit {
  userEnteredSubredditName: string;
  loading: boolean = true;
  userSpecificSubreddits: any;
  complete: boolean = false;
  error: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private apiServiceService: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userEnteredSubredditName = params['id'];
    });

    this.apiServiceService
      .userSpecificSubreddits(this.userEnteredSubredditName)
      .subscribe(
        (userSpecificSubreddits: any) => {
          this.userSpecificSubreddits = userSpecificSubreddits;
        },
        (error) => {
          this.error = true;
        },
        () => {
          this.complete = true;
        }
      );
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.loading = false;
    }, 3000);
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-services/api-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-subreddits',
  templateUrl: './all-subreddits.component.html',
  styleUrls: ['./all-subreddits.component.css'],
})
export class AllSubredditsComponent implements OnInit {
  showAllSubreddits: boolean = true;
  loading: boolean = true;
  userEnteredSubredditName: string = '';
  allSubreddits: any;
  complete: boolean = false;
  error: boolean = false;
  constructor(
    private apiServiceService: ApiServiceService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.loading = false;
    }, 3000);
    this.apiServiceService.allSubredditsData().subscribe(
      (apiAllSubreddits: any) => {
        this.allSubreddits = apiAllSubreddits;
      },
      (err) => {
        this.error = true;
      },
      () => {
        this.complete = true;
      }
    );
  }
  showUserEnteredSubreddit() {
    this.showAllSubreddits = false;
    this.router.navigate([
      'user-entered-subreddit',
      `${this.userEnteredSubredditName}`,
    ]);
  }
  backToHome() {
    this.showAllSubreddits = true;
    this.router.navigate(['/']);
  }
}

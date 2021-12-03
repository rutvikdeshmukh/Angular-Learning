import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-all-subreddits-info',
  templateUrl: './all-subreddits-info.component.html',
  styleUrls: ['./all-subreddits-info.component.css'],
})
export class AllSubredditsInfoComponent implements OnInit {
  @Input('allSubreddits') allSubreddits: any;
  constructor() {}
  ngOnInit(): void {}
}

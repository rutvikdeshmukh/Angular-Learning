import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-occured',
  templateUrl: './error-occured.component.html',
  styleUrls: ['./error-occured.component.css'],
})
export class ErrorOccuredComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  refresh(): void {
    window.location.reload();
  }
}

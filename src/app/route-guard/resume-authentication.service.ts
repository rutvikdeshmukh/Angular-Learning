import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { HomescreenService } from './../homescreen.service';
@Injectable({
  providedIn: 'root',
})
export class ResumeAuthenticationService implements CanActivate {
  rutvikResume: boolean = false;
  constructor(
    private router: Router,
    private homescreenService: HomescreenService
  ) {}
  canActivate(): boolean {
    if (this.rutvikResume) {
      return true;
    }
    this.homescreenService.homescreen = false;
    this.router.navigate(['error']);
    return false;
  }
}

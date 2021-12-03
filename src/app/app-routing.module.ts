import { UsersInformationComponent } from './users-information/users-information.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSubredditsComponent } from './all-subreddits/all-subreddits.component';
import { UserEnteredSubredditComponent } from './all-subreddits/user-entered-subreddit/user-entered-subreddit.component';
import { SubredditAuthenticationService } from './route-guard/subreddit-authentication.service';
import { UsersAuthentication } from './route-guard/users-authentication.service';
import { WrongComponent } from './wrong/wrong.component';
import { ResumeAuthenticationService } from './route-guard/resume-authentication.service';
const routes: Routes = [
  {
    path: 'subreddits-information',
    component: AllSubredditsComponent,
    canActivate: [SubredditAuthenticationService],
  },
  {
    path: 'users-information',
    component: UsersInformationComponent,
    canActivate: [UsersAuthentication],
  },
  {
    path: 'user-entered-subreddit/:id',
    component: UserEnteredSubredditComponent,
  },
  { path: 'error', component: WrongComponent },
  {
    path: 'rutvik-resume',
    loadChildren: () =>
      import('./rutvik-resume/rutvik/rutvik.module').then(
        (m) => m.RutvikModule
      ),
    canActivate: [ResumeAuthenticationService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

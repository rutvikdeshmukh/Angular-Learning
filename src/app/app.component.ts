import {
  Component,
  ViewChild,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver,
  NgModuleFactory,
  Compiler,
  Injector,
} from '@angular/core';
import { Router } from '@angular/router';
import { ComponentsType } from './components-type';
import { SubredditAuthenticationService } from './route-guard/subreddit-authentication.service';
import { UsersAuthentication } from './route-guard/users-authentication.service';
import { HomescreenService } from './homescreen.service';
import { ResumeAuthenticationService } from './route-guard/resume-authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-project-updated';
  componentsType: ComponentsType = {
    userComponent: false,
    subredditComponent: false,
  };
  varRutvikResume: boolean = false;
  lazyComponent: boolean = false;
  @ViewChild('one', { read: ViewContainerRef })
  one: ViewContainerRef;

  constructor(
    private router: Router,
    private subredditAuthenticationService: SubredditAuthenticationService,
    private UsersAuthentication: UsersAuthentication,
    public homescreenService: HomescreenService,
    private resumeAuthenticationService: ResumeAuthenticationService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private compiler: Compiler,
    private injector: Injector
  ) {}
  SubredditsInformation() {
    this.one.clear();
    this.lazyComponent = false;
    this.homescreenService.homescreen = true;
    this.subredditAuthenticationService.subredditInformation = true;
    this.componentsType.subredditComponent = true;
    this.varRutvikResume = false;
    this.componentsType.userComponent = false;
    this.router.navigate(['subreddits-information']);
  }
  usersInformation() {
    this.one.clear();
    this.lazyComponent = false;
    this.homescreenService.homescreen = true;
    this.UsersAuthentication.usersInformation = true;
    this.componentsType.userComponent = true;
    this.varRutvikResume = false;
    this.componentsType.subredditComponent = false;
    this.router.navigate(['users-information']);
  }
  backToHome() {
    this.one.clear();
    this.lazyComponent = false;
    this.homescreenService.homescreen = true;
    this.componentsType.userComponent = false;
    this.componentsType.subredditComponent = false;
    this.varRutvikResume = false;
    this.router.navigate(['/']);
  }
  homeScreen() {
    this.one.clear();
    this.lazyComponent = false;
    this.homescreenService.homescreen = true;
    this.one.clear();
    this.router.navigate(['/']);
  }
  rutvikResume() {
    this.one.clear();
    this.lazyComponent = false;
    this.homescreenService.homescreen = true;
    this.varRutvikResume = true;
    this.resumeAuthenticationService.rutvikResume = true;
    this.componentsType.subredditComponent = false;
    this.componentsType.userComponent = false;
    this.router.navigate(['rutvik-resume']);
  }
  ngOnInit() {}
  displayLazymoduleComponent() {
    this.lazyComponent = true;
    this.componentsType.userComponent = false;
    this.componentsType.subredditComponent = false;
    this.varRutvikResume = false;
    this.router.navigate(['/']);
    this.one.clear();

    import('./manual-lazy-loading/lazy-module/lazy-module.module')
      .then((m) => m.LazyModuleModule)
      .then((elementModuleOrFactory) => {
        if (elementModuleOrFactory instanceof NgModuleFactory) {
          // if ViewEngine
          return elementModuleOrFactory;
        } else {
          try {
            // if Ivy
            return this.compiler.compileModuleAsync(elementModuleOrFactory);
          } catch (err) {
            throw err;
          }
        }
      })
      .then((moduleFactory) => {
        try {
          const elementModuleRef = moduleFactory.create(this.injector);

          const moduleInstance = elementModuleRef.instance;
          this.one.createComponent(
            this.componentFactoryResolver.resolveComponentFactory(
              moduleInstance.entryComponent
            )
          );

          // do something with the module...
        } catch (err) {
          throw err;
        }
      });
  }
}

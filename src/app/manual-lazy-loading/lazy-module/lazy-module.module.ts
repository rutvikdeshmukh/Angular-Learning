import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManualLazyLoadingComponent } from '../manual-lazy-loading.component';
import { LazyModuleRoutingModule } from './lazy-module-routing.module';

@NgModule({
  declarations: [ManualLazyLoadingComponent],
  imports: [CommonModule, LazyModuleRoutingModule],
})
export class LazyModuleModule {
  entryComponent: any = ManualLazyLoadingComponent;
  constructor() {
    console.log('this is greeat');
  }
}

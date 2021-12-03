import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutvikResumeComponent } from '../rutvik-resume.component';

const routes: Routes = [{ path: '', component: RutvikResumeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutvikRoutingModule {}

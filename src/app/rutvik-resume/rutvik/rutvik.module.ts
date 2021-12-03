import { RutvikResumeComponent } from './../rutvik-resume.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutvikRoutingModule } from './rutvik-routing.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [RutvikResumeComponent],
  imports: [CommonModule, RutvikRoutingModule, MatCardModule],
})
export class RutvikModule {}

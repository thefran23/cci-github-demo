import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReposComponent } from 'src/app/repos/repos.component';
import { ReposRoutingModule } from './repos-routing.module';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RepoDetailsComponent } from '../repo-details/repo-details.component';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [ReposComponent, RepoDetailsComponent],
  imports: [
    CommonModule,
    ReposRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    RouterModule,
    NgApexchartsModule,
  ],
})
export class ReposModule {}

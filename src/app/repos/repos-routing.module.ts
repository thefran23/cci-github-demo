import { RepoDetailsResolver } from './../repo-details/repo-details.resolver';
import { ReposComponent } from 'src/app/repos/repos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoDetailsComponent } from '../repo-details/repo-details.component';

const routes: Routes = [
  {
    path: '',
    component: ReposComponent,
  },
  {
    path: ':repoFullName',
    component: RepoDetailsComponent,
    resolve: { data: RepoDetailsResolver },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReposRoutingModule {}
